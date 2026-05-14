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
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/src/server/sanitize.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeUrl",
    ()=>sanitizeUrl
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
;
function sanitizeUrl(raw) {
    if (!raw) return null;
    try {
        const url = new __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["URL"](raw, 'https://luciferdonghua.in');
        if (![
            'http:',
            'https:'
        ].includes(url.protocol)) return null;
        return url.toString();
    } catch  {
        return null;
    }
}
}),
"[project]/src/pages/api/scrape/index.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import, [project]/node_modules/axios)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fast$2d$xml$2d$parser__$5b$external$5d$__$28$fast$2d$xml$2d$parser$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$fast$2d$xml$2d$parser$29$__ = __turbopack_context__.i("[externals]/fast-xml-parser [external] (fast-xml-parser, esm_import, [project]/node_modules/fast-xml-parser)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$cheerio__$5b$external$5d$__$28$cheerio$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cheerio$29$__ = __turbopack_context__.i("[externals]/cheerio [external] (cheerio, esm_import, [project]/node_modules/cheerio)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$sanitize$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/sanitize.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$fast$2d$xml$2d$parser__$5b$external$5d$__$28$fast$2d$xml$2d$parser$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$fast$2d$xml$2d$parser$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$cheerio__$5b$external$5d$__$28$cheerio$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cheerio$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$fast$2d$xml$2d$parser__$5b$external$5d$__$28$fast$2d$xml$2d$parser$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$fast$2d$xml$2d$parser$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$cheerio__$5b$external$5d$__$28$cheerio$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cheerio$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const RSS_URL = 'https://luciferdonghua.in/feed';
async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', [
            'POST'
        ]);
        return res.status(405).json({
            message: 'Method Not Allowed'
        });
    }
    try {
        await scrapeRssAndEpisodes();
        return res.status(200).json({
            message: 'Scrape completed'
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}
async function scrapeRssAndEpisodes() {
    const res = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__["default"].get(RSS_URL, {
        timeout: 15000
    });
    const parser = new __TURBOPACK__imported__module__$5b$externals$5d2f$fast$2d$xml$2d$parser__$5b$external$5d$__$28$fast$2d$xml$2d$parser$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$fast$2d$xml$2d$parser$29$__["XMLParser"]({
        ignoreAttributes: false
    });
    const json = parser.parse(res.data);
    const items = json.rss?.channel?.item || [];
    for (const item of items){
        const title = item.title;
        const link = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$sanitize$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanitizeUrl"])(item.link);
        let image = null;
        if (item['media:thumbnail']?.['@_url']) {
            image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$sanitize$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanitizeUrl"])(item['media:thumbnail']['@_url']);
        } else if (item.description) {
            const $ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$cheerio__$5b$external$5d$__$28$cheerio$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cheerio$29$__["load"])(item.description);
            const imgSrc = $('img').first().attr('src');
            if (imgSrc) image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$sanitize$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanitizeUrl"])(imgSrc);
        }
        if (!link) continue;
        const anime = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].anime.upsert({
            where: {
                sourceUrl: link
            },
            update: {
                name: title,
                image: image || undefined
            },
            create: {
                name: title,
                image: image || undefined,
                sourceUrl: link
            }
        });
        try {
            const episodePageRes = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__["default"].get(link, {
                timeout: 15000
            });
            const $ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$cheerio__$5b$external$5d$__$28$cheerio$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cheerio$29$__["load"])(episodePageRes.data);
            const episodeLinks = [];
            $('a').each((_, el)=>{
                const href = $(el).attr('href');
                const text = $(el).text().trim();
                if (href && /episode|ep\s*\d+/i.test(text)) {
                    episodeLinks.push({
                        title: text || 'Episode',
                        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$sanitize$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sanitizeUrl"])(href)
                    });
                }
            });
            for (const ep of episodeLinks){
                const streamUrl = ep.url;
                if (!streamUrl) continue;
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].episode.upsert({
                    where: {
                        animeId_episodeTitle: {
                            animeId: anime.id,
                            episodeTitle: ep.title
                        }
                    },
                    update: {
                        streamUrl
                    },
                    create: {
                        animeId: anime.id,
                        episodeTitle: ep.title,
                        streamUrl
                    }
                });
            }
        } catch (err) {
            console.error('Error scraping episodes for', link, err.message);
        }
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0a~1voh._.js.map