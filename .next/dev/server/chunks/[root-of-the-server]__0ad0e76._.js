module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/db.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$adapter$2d$pg__$5b$external$5d$__$2840$prisma$2f$adapter$2d$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$29$__ = __turbopack_context__.i("[externals]/@prisma/adapter-pg [external] (@prisma/adapter-pg, esm_import, [project]/node_modules/@prisma/adapter-pg)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$adapter$2d$pg__$5b$external$5d$__$2840$prisma$2f$adapter$2d$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$adapter$2d$pg__$5b$external$5d$__$2840$prisma$2f$adapter$2d$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function createPrismaClient() {
    const adapter = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$adapter$2d$pg__$5b$external$5d$__$2840$prisma$2f$adapter$2d$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$29$__["PrismaPg"]({
        connectionString: process.env.DATABASE_URL
    });
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
        adapter
    });
}
const prisma = /*TURBOPACK member replacement*/ __turbopack_context__.g.prisma || createPrismaClient();
if ("TURBOPACK compile-time truthy", 1) {
    /*TURBOPACK member replacement*/ __turbopack_context__.g.prisma = prisma;
}
const __TURBOPACK__default__export__ = prisma;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/api/loadsite/index.tsx [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import, [project]/node_modules/axios)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$cheerio__$5b$external$5d$__$28$cheerio$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cheerio$29$__ = __turbopack_context__.i("[externals]/cheerio [external] (cheerio, esm_import, [project]/node_modules/cheerio)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$cheerio__$5b$external$5d$__$28$cheerio$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cheerio$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$cheerio__$5b$external$5d$__$28$cheerio$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cheerio$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({
            success: false,
            error: 'Method Not Allowed'
        });
    }
    try {
        const pageParam = req.query.page;
        const pageNumber = parseInt(pageParam, 10);
        const url = !pageParam || Number.isNaN(pageNumber) || pageNumber <= 1 ? 'https://luciferdonghua.in/' : `https://luciferdonghua.in/page/${pageNumber}/`;
        const response = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__["default"].get(url, {
            // Spoof a browser user agent; some sites block default Node UA
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
            },
            // Follow redirects if any
            maxRedirects: 5
        });
        const html = response.data;
        const $ = __TURBOPACK__imported__module__$5b$externals$5d2f$cheerio__$5b$external$5d$__$28$cheerio$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cheerio$29$__["load"](html);
        // Narrow down to cards inside div.excstf with class "bsx"
        const cards = $('div.excstf .bsx');
        if (!cards.length) {
            return res.status(200).json({
                success: true,
                count: 0,
                items: []
            });
        }
        const items = [];
        cards.each((i, el)=>{
            const element = $(el);
            // Anchor that likely wraps the card
            const anchor = element.find('a').first();
            const img = element.find('img').first();
            const heading = element.find('h2').first();
            const href = anchor.attr('href') || '';
            // Some sites use data-src for lazy-loaded images; fall back to that.
            const imgSrc = img.attr('src') || img.attr('data-src') || '';
            const title = heading.text().trim();
            items.push({
                index: i,
                href,
                imgSrc,
                title
            });
        });
        // For each scraped card:
        // 1) Upsert the Anime row (by sourceUrl = href).
        // 2) Load the href page, find div.mobius > select[name="mirror"] > option.
        // 3) For each option, upsert a Source row tied to all episodes of that anime.
        for (const item of items){
            if (!item.href) continue;
            // Ensure Anime exists / is updated
            const anime = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].anime.upsert({
                where: {
                    // sourceUrl is unique in the schema
                    sourceUrl: item.href
                },
                update: {
                    name: item.title || item.href,
                    image: item.imgSrc || null
                },
                create: {
                    name: item.title || 'Untitled',
                    image: item.imgSrc || null,
                    sourceUrl: item.href
                }
            });
            try {
                // Load the detail page referenced by href
                const detailRes = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__["default"].get(item.href, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
                    },
                    maxRedirects: 5
                });
                const detailHtml = detailRes.data;
                const $$ = __TURBOPACK__imported__module__$5b$externals$5d2f$cheerio__$5b$external$5d$__$28$cheerio$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cheerio$29$__["load"](detailHtml);
                const options = $$('div.mobius select[name="mirror"] option');
                if (!options.length) {
                    continue;
                }
                const sources = [];
                options.each((_, el)=>{
                    const opt = $$(el);
                    const value = (opt.attr('value') || '').trim();
                    if (!value) return;
                    const label = opt.text().trim() || null;
                    sources.push({
                        value,
                        label
                    });
                });
                if (!sources.length) {
                    continue;
                }
                // Attach the collected sources to the in-memory item so
                // the client can see which mirrors were discovered.
                item.sources = sources;
                console.log(`Found ${sources.length} sources for anime ID ${anime.id}`);
                console.log(sources);
                // Attach sources to all episodes of this anime.
                const episodes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].episode.findMany({
                    where: {
                        animeId: anime.id
                    }
                });
                if (!episodes.length) {
                    continue;
                }
                await Promise.all(episodes.flatMap((episode)=>sources.map((src)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].source.upsert({
                            where: {
                                episodeId_value: {
                                    episodeId: episode.id,
                                    value: src.value
                                }
                            },
                            update: {
                                label: src.label || null
                            },
                            create: {
                                episodeId: episode.id,
                                value: src.value,
                                label: src.label || null
                            }
                        }))));
            } catch (innerErr) {
                console.error('Error fetching or parsing detail page for href', item.href, innerErr?.message || innerErr);
            }
        }
        return res.status(200).json({
            success: true,
            count: items.length,
            items
        });
    } catch (error) {
        console.error('Error fetching luciferdonghua.in:', error?.message || error);
        return res.status(500).json({
            success: false,
            error: 'Failed to fetch or parse remote HTML'
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ad0e76._.js.map