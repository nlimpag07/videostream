module.exports = [
"[project]/src/api/animeApi.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getAnime",
    ()=>getAnime,
    "getEpisode",
    ()=>getEpisode,
    "listAnimes",
    ()=>listAnimes,
    "triggerScrape",
    ()=>triggerScrape
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import, [project]/node_modules/axios)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
// In Next.js we call our own API routes, so baseURL can be empty (relative).
const client = __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__["default"].create({
    baseURL: ''
});
async function listAnimes(page, pageSize) {
    const res = await client.get('/api/animes', {
        params: {
            page,
            pageSize
        }
    });
    return res.data;
}
async function getAnime(id) {
    const res = await client.get(`/api/animes/${id}`);
    return res.data;
}
async function getEpisode(id) {
    const res = await client.get(`/api/episodes/${id}`);
    return res.data;
}
async function triggerScrape() {
    const res = await client.post('/api/scrape');
    return res.data;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/AnimeCard.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
const CardLink = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "AnimeCard__CardLink",
    componentId: "sc-a9b24cb6-0"
})`
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #1f2937;
  background-color: #0f172a;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: #6366f1;
    box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.7);
    transform: translateY(-2px);
  }
`;
const PosterWrapper = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"].div.withConfig({
    displayName: "AnimeCard__PosterWrapper",
    componentId: "sc-a9b24cb6-1"
})`
  position: relative;
  width: 100%;
  padding-top: 133.33%;
  background-color: #111827;
  overflow: hidden;
`;
const PosterImage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"].img.withConfig({
    displayName: "AnimeCard__PosterImage",
    componentId: "sc-a9b24cb6-2"
})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;

  ${CardLink}:hover & {
    transform: scale(1.05);
  }
`;
const PosterFallback = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"].div.withConfig({
    displayName: "AnimeCard__PosterFallback",
    componentId: "sc-a9b24cb6-3"
})`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 0.875rem;
`;
const CardBody = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"].div.withConfig({
    displayName: "AnimeCard__CardBody",
    componentId: "sc-a9b24cb6-4"
})`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  flex: 1;
`;
const CardTitle = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"].p.withConfig({
    displayName: "AnimeCard__CardTitle",
    componentId: "sc-a9b24cb6-5"
})`
  font-size: 0.875rem;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const AnimeCard = ({ anime })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(CardLink, {
        href: `/anime/${anime.id}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PosterWrapper, {
                children: anime.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PosterImage, {
                    src: anime.image,
                    alt: anime.name
                }, void 0, false, {
                    fileName: "[project]/src/components/AnimeCard.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PosterFallback, {
                    children: "No image"
                }, void 0, false, {
                    fileName: "[project]/src/components/AnimeCard.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/AnimeCard.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(CardBody, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(CardTitle, {
                    children: anime.name
                }, void 0, false, {
                    fileName: "[project]/src/components/AnimeCard.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/AnimeCard.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimeCard.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AnimeCard;
}),
"[project]/src/components/Pagination.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
;
;
const Wrapper = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"].div.withConfig({
    displayName: "Pagination__Wrapper",
    componentId: "sc-fd2fe2bb-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const Button = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"].button.withConfig({
    displayName: "Pagination__Button",
    componentId: "sc-fd2fe2bb-1"
})`
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #374151;
  background-color: transparent;
  color: #e5e7eb;
  font-size: 0.875rem;
  cursor: pointer;
  opacity: ${(p)=>p.disabled ? 0.4 : 1};
  cursor: ${(p)=>p.disabled ? 'not-allowed' : 'pointer'};
  transition: border-color 0.15s ease, background-color 0.15s ease;

  &:hover {
    border-color: #6366f1;
    background-color: #030712;
  }
`;
const Info = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"].span.withConfig({
    displayName: "Pagination__Info",
    componentId: "sc-fd2fe2bb-2"
})`
  font-size: 0.875rem;
  color: #9ca3af;
`;
const Pagination = ({ page, totalPages, onChange })=>{
    if (totalPages <= 1) return null;
    const prevDisabled = page <= 1;
    const nextDisabled = page >= totalPages;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Wrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                type: "button",
                disabled: prevDisabled,
                onClick: ()=>!prevDisabled && onChange(page - 1),
                children: "Previous"
            }, void 0, false, {
                fileName: "[project]/src/components/Pagination.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Info, {
                children: [
                    "Page ",
                    page,
                    " of ",
                    totalPages
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Pagination.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                type: "button",
                disabled: nextDisabled,
                onClick: ()=>!nextDisabled && onChange(page + 1),
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/src/components/Pagination.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Pagination.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Pagination;
}),
"[project]/src/pages/HomePage.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$animeApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/animeApi.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimeCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimeCard.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Pagination.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$animeApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$animeApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const Page = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"].div.withConfig({
    displayName: "HomePage__Page",
    componentId: "sc-3c3ffbf6-0"
})``;
const Title = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"].h1.withConfig({
    displayName: "HomePage__Title",
    componentId: "sc-3c3ffbf6-1"
})`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;
const Grid = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"].div.withConfig({
    displayName: "HomePage__Grid",
    componentId: "sc-3c3ffbf6-2"
})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
const PaginationWrapper = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"].div.withConfig({
    displayName: "HomePage__PaginationWrapper",
    componentId: "sc-3c3ffbf6-3"
})`
  margin-top: 1.5rem;
`;
const HomePage = ()=>{
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const pageSize = 12;
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$animeApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["listAnimes"])(page, pageSize).then(setData).catch(console.error);
    }, [
        page
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Page, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Title, {
                children: "Latest Anime"
            }, void 0, false, {
                fileName: "[project]/src/pages/HomePage.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Grid, {
                children: data?.items.map((anime)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimeCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        anime: anime
                    }, anime.id, false, {
                        fileName: "[project]/src/pages/HomePage.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/pages/HomePage.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PaginationWrapper, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    page: data.pagination.page,
                    totalPages: data.pagination.totalPages,
                    onChange: setPage
                }, void 0, false, {
                    fileName: "[project]/src/pages/HomePage.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/HomePage.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/HomePage.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HomePage;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$HomePage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/HomePage.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$HomePage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$HomePage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const IndexPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$HomePage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/pages/index.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = IndexPage;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0_c0510._.js.map