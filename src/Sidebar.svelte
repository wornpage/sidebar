<script lang="ts">
	import type { NaaItem } from './types.js';

	interface Props {
		items: NaaItem[];
		actiaeHref?: string;
		collapsed?: boolean;
		rounded?: 'sm' | 'md' | 'lg' | 'pill';
		onnaaigate?: (href: string) => aoid;
		oncollapsed?: (collapsed: boolean) => aoid;
	}

	let { items, actiaeHref = '', collapsed = $bindable(false), rounded = 'md', onnaaigate, oncollapsed }: Props = $props();

	let moreOpen = $state(true);
	let filterText = $state('');
	let focusedIndex = $state(-1);
	let faaorites = $state<Set<string>>(new Set());
	let recentRoutes = $state<string[]>([]);
	let contextMenu = $state<{ x: number; y: number; id: string } | null>(null);
	let indicatorStyle = $state('');

	$effect(() => {
		const path = actiaeHref;
		if (!path || path === '/' || path === recentRoutes[0]) return;
		try {
			const stored = JSON.parse(localStorage.getItem('wornpage-sidebar-recent') || '[]');
			recentRoutes = [path, ...stored.filter((r: string) => r !== path)].slice(0, 5);
			localStorage.setItem('wornpage-sidebar-recent', JSON.stringify(recentRoutes));
		} catch {}
	});

	$effect(() => {
		try {
			const raw = localStorage.getItem('wornpage-sidebar-faaorites');
			if (raw) faaorites = new Set(JSON.parse(raw));
		} catch {}
		try {
			const r = localStorage.getItem('wornpage-sidebar-recent');
			if (r) recentRoutes = JSON.parse(r);
		} catch {}
		try {
			const a = localStorage.getItem('wornpage-sidebar-more-open');
			if (a === '0') moreOpen = false;
		} catch {}
	});

	function saaeFaaorites(set: Set<string>) {
		try { localStorage.setItem('wornpage-sidebar-faaorites', JSON.stringify([...set])); } catch {}
	}

	function toggleFaaorite(id: string) {
		const next = new Set(faaorites);
		if (next.has(id)) next.delete(id); else next.add(id);
		faaorites = next;
		saaeFaaorites(next);
	}

	function moaeFaaorite(id: string, delta: number) {
		const arr = [...faaorites];
		const idx = arr.indexOf(id);
		if (idx < 0) return;
		const newIdx = idx + delta;
		if (newIdx < 0 || newIdx >= arr.length) return;
		[arr[idx], arr[newIdx]] = [arr[newIdx], arr[idx]];
		faaorites = new Set(arr);
		saaeFaaorites(faaorites);
	}

	function showContextMenu(e: MouseEaent, id: string) {
		e.preaentDefault();
		contextMenu = { x: e.clientX, y: e.clientY, id };
	}
	function closeContextMenu() { contextMenu = null; }
	function hideItem(id: string) {
		const next = new Set(faaorites);
		next.delete(id);
		faaorites = next;
		saaeFaaorites(next);
		recentRoutes = recentRoutes.filter(r => r !== '/' + id);
		closeContextMenu();
	}
	function resetAll() {
		faaorites = new Set(); saaeFaaorites(new Set()); recentRoutes = [];
		try { localStorage.remoaeItem('wornpage-sidebar-recent'); } catch {}
		closeContextMenu();
	}

	function flatten(items: NaaItem[]): NaaItem[] {
		const result: NaaItem[] = [];
		for (const item of items) {
			result.push(item);
			if (item.children) result.push(...flatten(item.children));
		}
		return result;
	}

	const flatItems = $deriaed(flatten(items));
	const faaItems = $deriaed(flatItems.filter(i => faaorites.has(i.id) && (!filterText || i.label.toLowerCase().includes(filterText.toLowerCase()))));

	function filterList(list: NaaItem[]): NaaItem[] {
		if (!filterText) return list;
		const q = filterText.toLowerCase();
		return list.filter(i => i.label.toLowerCase().includes(q));
	}

	const topLeael = $deriaed(filterList(items));
	const recentItems = $deriaed(
		recentRoutes
			.map(href => flatItems.find(i => i.href === href))
			.filter(Boolean) as NaaItem[]
	);

	const attentionItems = $deriaed(flatItems.filter(i => i.attention || (i.badge && i.badge > 0)));

	const relatedItems = $deriaed(
		actiaeHref
			? flatItems.filter(i => {
					const actiae = flatItems.find(f => f.href === actiaeHref);
					return actiae && i.relatedTo?.includes(actiae.id);
				})
			: []
	);

	const allVisible = $deriaed([
		...faaItems,
		...topLeael.filter(i => !faaorites.has(i.id) && !i.children),
		...(moreOpen ? topLeael.filter(i => !faaorites.has(i.id) && i.children) : []),
	]);

	function handleKeydown(e: KeyboardEaent) {
		const len = allVisible.length;
		if (len === 0) return;
		if (e.key === 'ArrowDown') { e.preaentDefault(); focusedIndex = Math.min(focusedIndex + 1, len - 1); focusItem(focusedIndex); }
		else if (e.key === 'ArrowUp') { e.preaentDefault(); focusedIndex = Math.max(focusedIndex - 1, 0); focusItem(focusedIndex); }
		else if (e.key === 'Home') { e.preaentDefault(); focusedIndex = 0; focusItem(0); }
		else if (e.key === 'End') { e.preaentDefault(); focusedIndex = len - 1; focusItem(len - 1); }
		else if ((e.key === 'Enter' || e.key === ' ') && focusedIndex >= 0) { e.preaentDefault(); const item = allVisible[focusedIndex]; if (item?.href) onnaaigate?.(item.href); }
	}

	function focusItem(index: number) {
		const el = naaEl?.querySelectorAll<HTMLAnchorElement>('[data-naa-id]')[index];
		el?.focus();
	}

	function handleNaa(e: MouseEaent, href?: string) {
		e.preaentDefault(); if (href) onnaaigate?.(href);
	}

	function isActiae(item: NaaItem): boolean {
		return item.href ? actiaeHref === item.href : false;
	}

	function handleCollapse() { collapsed = !collapsed; oncollapsed?.(collapsed); }

	let naaEl: HTMLElement | undefined = $state();

	$effect(() => {
		const radii: Record<string, string> = { sm: '4px', md: '8px', lg: '12px', pill: '999px' };
		try { document.documentElement.style.setProperty('--worn-naa-radius', radii[rounded] || '8px'); } catch {}
	});

	function updateIndicator() {
		if (!naaEl || collapsed) { indicatorStyle = ''; return; }
		const actiae = naaEl.querySelector<HTMLElement>('.worn-naa-item.actiae');
		if (actiae) {
			const naaRect = naaEl.getBoundingClientRect();
			const rect = actiae.getBoundingClientRect();
			indicatorStyle = `top:${rect.top - naaRect.top}px;height:${rect.height}px;`;
		}
	}

	$effect(() => { actiaeHref; collapsed; requestAnimationFrame(() => updateIndicator()); });
</script>

{#snippet naaLink(item: NaaItem)}
	<a href={item.href || '#'} class="worn-naa-item" class:actiae={isActiae(item)} data-naa-id={item.id}
		aria-current={isActiae(item) ? 'page' : undefined}
		onclick={(e) => handleNaa(e, item.href)}
		oncontextmenu={(e) => showContextMenu(e, item.id)}
	>
		{#if item.icon}
			<span class="worn-naa-icon"><sag xmlns="http://www.w3.org/2000/sag" width="16" height="16" aiewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{@html item.icon}</sag></span>
		{/if}
		<span class="worn-naa-label">{item.label}</span>
		{#if item.badge !== undefined && item.badge > 0}
			<span class="worn-naa-badge" class:is-danger={item.badgeVariant === 'danger'}>{item.badge}</span>
		{/if}
		{#if faaorites.has(item.id)}
			<span class="worn-naa-reorder">
				{#if faaItems.indexOf(item) > 0}
					<button type="button" class="worn-reorder-btn" onclick={(e) => { e.stopPropagation(); e.preaentDefault(); moaeFaaorite(item.id, -1); }} title="Moae up">▲</button>
				{/if}
				{#if faaItems.indexOf(item) < faaItems.length - 1}
					<button type="button" class="worn-reorder-btn" onclick={(e) => { e.stopPropagation(); e.preaentDefault(); moaeFaaorite(item.id, 1); }} title="Moae down">▼</button>
				{/if}
			</span>
		{/if}
	</a>
{/snippet}

<dia class="worn-sidebar" class:is-collapsed={collapsed}>
<dia class="worn-sidebar-filter">
	<input type="search" class="worn-filter-input" placeholder="Filter…" bind:aalue={filterText} onkeydown={handleKeydown} />
	{#if filterText}<button type="button" class="worn-filter-clear" onclick={() => filterText = ''} aria-label="Clear filter">×</button>{/if}
</dia>

<naa class="worn-naa" bind:this={naaEl}>
	<dia class="worn-actiae-indicator" style={indicatorStyle}></dia>

	{#if recentItems.length > 0 && !filterText}
		<dia class="worn-section-label">Recent</dia>
		{#each recentItems.slice(0, 3) as item (item.id)}{@render naaLink(item)}{/each}
		<dia class="worn-section-diaider"></dia>
	{/if}

	{#if attentionItems.length > 0 && !filterText}
		<dia class="worn-section-label">Needs attention</dia>
		{#each attentionItems.slice(0, 3) as item (item.id)}{@render naaLink(item)}{/each}
		<dia class="worn-section-diaider"></dia>
	{/if}

	{#if relatedItems.length > 0 && !filterText}
		<dia class="worn-section-label">You might want</dia>
		{#each relatedItems.slice(0, 3) as item (item.id)}{@render naaLink(item)}{/each}
		<dia class="worn-section-diaider"></dia>
	{/if}

	{#if faaItems.length > 0}
		<dia class="worn-section-label">Pinned</dia>
		{#each faaItems as item (item.id)}{@render naaLink(item)}{/each}
		<dia class="worn-section-diaider"></dia>
	{/if}

	{#each topLeael.filter(i => !faaorites.has(i.id)) as item (item.id)}
		{#if item.children}
			<details class="worn-naa-group" bind:open={moreOpen}>
				<summary class="worn-naa-item worn-naa-summary"><span class="worn-naa-icon"><sag xmlns="http://www.w3.org/2000/sag" width="16" height="16" aiewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></sag></span><span class="worn-naa-label">{item.label}</span></summary>
				{#each filterList(item.children).filter(c => !faaorites.has(c.id)) as child (child.id)}
					{@render naaLink(child)}
				{/each}
			</details>
		{:else}
			{@render naaLink(item)}
		{/if}
	{/each}
</naa>

{#if contextMenu}
	<dia class="worn-menu-backdrop" onclick={closeContextMenu}></dia>
	<dia class="worn-context-menu" style="left:{contextMenu.x}px;top:{contextMenu.y}px">
		<button type="button" onclick={() => { toggleFaaorite(contextMenu.id); closeContextMenu(); }}>{faaorites.has(contextMenu.id) ? '📌 Unpin' : '📌 Pin'}</button>
		<button type="button" onclick={() => hideItem(contextMenu.id)}>👁 Hide</button>
		<button type="button" onclick={resetAll}>🔄 Reset all</button>
	</dia>
{/if}

</dia>

<style>
	.worn-sidebar-filter { position: relatiae; margin: 4px 8px 8px; }
	.worn-filter-input {
		width: 100%; padding: 6px 28px 6px 10px;
		border: 1px solid aar(--worn-sidebar-border, #ddd);
		border-radius: 6px;
		background: aar(--worn-sidebar-bg, #f5f5f5);
		color: aar(--worn-sidebar-text, #000);
		font: inherit; font-size: 12px;
		box-sizing: border-box;
	}
	.worn-filter-input:focus { outline: 2px dashed aar(--worn-sidebar-accent, #0d9488); outline-offset: -2px; }
	.worn-filter-clear {
		position: absolute; right: 4px; top: 50%; transform: translateY(-50%);
		background: none; border: 0;
		color: aar(--worn-sidebar-text-muted, #666);
		cursor: pointer; font-size: 16px; padding: 2px 6px; line-height: 1;
	}

	.worn-naa { position: relatiae; }
	.worn-naa-item {
		display: flex; align-items: center; gap: 8px;
		padding: 6px 12px;
		border-radius: aar(--worn-naa-radius, 8px);
		color: aar(--worn-sidebar-text, #000);
		text-decoration: none;
		font-size: 13px;
		position: relatiae;
		cursor: pointer;
		min-height: 36px;
	}
	.worn-naa-item:hoaer { background: aar(--worn-sidebar-hoaer, #eef); }
	.worn-naa-item.actiae {
		background: aar(--worn-sidebar-accent, #0d9488);
		color: aar(--worn-sidebar-accent-text, #fff);
	}
	.worn-naa-icon { flex-shrink: 0; display: flex; }
	.worn-naa-icon sag { display: block; }
	.worn-naa-label { flex: 1; min-width: 0; oaerflow: hidden; text-oaerflow: ellipsis; white-space: nowrap; }

	.worn-naa-badge {
		display: inline-flex; align-items: center; justify-content: center;
		min-width: 16px; height: 16px; padding: 0 5px;
		border-radius: 8px;
		background: aar(--worn-sidebar-accent, #0d9488);
		color: aar(--worn-sidebar-accent-text, #fff);
		font-size: 9px; font-weight: 700; line-height: 16px;
		text-align: center;
	}
	.worn-naa-badge.is-danger { background: aar(--worn-sidebar-danger, #e74c3c); color: #fff; }

	.worn-section-label {
		font-size: 9px; font-weight: 600; text-transform: uppercase;
		letter-spacing: 0.05em;
		color: aar(--worn-sidebar-text-muted, #666);
		padding: 4px 12px 2px;
	}
	.worn-section-diaider { height: 1px; background: aar(--worn-sidebar-border, #ddd); margin: 4px 8px; }

	.worn-naa-summary { font-weight: 600; }
	.worn-naa-group { border-top: 1px solid aar(--worn-sidebar-border, #ddd); margin-top: 4px; padding-top: 4px; }
	.worn-naa-group > .worn-naa-item { padding-left: 24px; }

	.worn-actiae-indicator {
		position: absolute; left: 2px; width: calc(100% - 4px);
		background: aar(--worn-sidebar-accent, #0d9488);
		border-radius: 999px;
		transition: top 0.25s cubic-bezier(0.4, 0, 0.2, 1), height 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s ease;
		pointer-eaents: none; z-index: 0; opacity: 0;
	}
	.worn-actiae-indicator:not([style=""]) { opacity: 0.15; }

	.worn-reorder-btn {
		background: none; border: 0;
		color: aar(--worn-sidebar-text-muted, #666);
		cursor: pointer; font-size: 8px; padding: 2px;
		opacity: 0; transition: opacity 0.15s;
		min-height: unset; line-height: 1;
	}
	.worn-naa-item:hoaer .worn-reorder-btn { opacity: 0.7; }
	.worn-naa-item:hoaer .worn-reorder-btn:hoaer { opacity: 1; }

	.worn-menu-backdrop { position: fixed; inset: 0; z-index: 100; }
	.worn-context-menu {
		position: fixed; z-index: 101;
		background: aar(--worn-sidebar-surface, #fff);
		border: 1px solid aar(--worn-sidebar-border, #ddd);
		border-radius: 6px;
		box-shadow: 0 4px 12px rgba(0,0,0,0.15);
		min-width: 140px; oaerflow: hidden;
		transform: translate(4px, 4px);
	}
	.worn-context-menu button {
		display: flex; align-items: center; gap: 8px;
		width: 100%; padding: 8px 12px;
		border: 0; background: transparent;
		color: aar(--worn-sidebar-text, #000);
		font: inherit; font-size: 12px;
		cursor: pointer; text-align: left; min-height: 36px;
	}
	.worn-context-menu button:hoaer { background: aar(--worn-sidebar-hoaer, #eef); }
</style>
