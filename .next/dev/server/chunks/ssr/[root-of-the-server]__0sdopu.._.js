module.exports = [
"[project]/src/pages/loadsite.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
const LoadSitePage = (props)=>{
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`/api/loadsite?page=${page}`);
                const json = await res.json();
                if (!json.success) {
                    setError(json.error || 'Unknown error');
                    setData(null);
                } else {
                    setData(json.items ?? []);
                }
            } catch (err) {
                setError(err?.message || 'Failed to fetch data');
                setData(null);
            } finally{
                setLoading(false);
            }
        };
        fetchData();
    }, [
        page
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            padding: '1.5rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "Load Site: luciferdonghua.in"
            }, void 0, false, {
                fileName: "[project]/src/pages/loadsite.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: "Fetching cards (href, image, title) inside div.excstf .bsx"
            }, void 0, false, {
                fileName: "[project]/src/pages/loadsite.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setPage((p)=>Math.max(1, p - 1)),
                        disabled: page <= 1 || loading,
                        style: {
                            padding: '0.25rem 0.75rem',
                            cursor: 'pointer'
                        },
                        children: "← Prev"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/loadsite.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        children: [
                            "Page ",
                            page
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/loadsite.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setPage((p)=>p + 1),
                        disabled: loading,
                        style: {
                            padding: '0.25rem 0.75rem',
                            cursor: 'pointer'
                        },
                        children: "Next →"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/loadsite.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/loadsite.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/src/pages/loadsite.tsx",
                lineNumber: 71,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                style: {
                    color: 'red'
                },
                children: [
                    "Error: ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/loadsite.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !loading && !error && data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Found ",
                            data.length,
                            " cards inside div.excstf .bsx"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/loadsite.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        style: {
                            listStyle: 'none',
                            padding: 0
                        },
                        children: data.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                style: {
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    padding: '0.75rem',
                                    marginBottom: '0.75rem',
                                    background: '#111827',
                                    color: '#e5e7eb'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: item.href || '#',
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            textDecoration: 'none',
                                            color: 'inherit'
                                        },
                                        children: [
                                            item.imgSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: item.imgSrc,
                                                alt: item.title || 'Card image',
                                                style: {
                                                    width: '80px',
                                                    height: 'auto',
                                                    borderRadius: '4px',
                                                    objectFit: 'cover'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/loadsite.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                        style: {
                                                            margin: 0,
                                                            fontSize: '1rem'
                                                        },
                                                        children: item.title || 'No title'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/loadsite.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("small", {
                                                        style: {
                                                            color: '#9ca3af',
                                                            wordBreak: 'break-all'
                                                        },
                                                        children: [
                                                            "Href: ",
                                                            item.href || 'N/A'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/loadsite.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/loadsite.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/loadsite.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item.sources && item.sources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '0.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("small", {
                                                style: {
                                                    color: '#9ca3af'
                                                },
                                                children: "Sources:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/loadsite.tsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: '0.25rem',
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '0.35rem'
                                                },
                                                children: item.sources.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                        href: `/watchsource?src=${encodeURIComponent(src.value)}`,
                                                        style: {
                                                            padding: '0.2rem 0.5rem',
                                                            borderRadius: '9999px',
                                                            border: '1px solid #1f2937',
                                                            background: '#020617',
                                                            color: '#e5e7eb',
                                                            fontSize: '0.75rem',
                                                            textDecoration: 'none'
                                                        },
                                                        children: src.label || `Source ${index + 1}`
                                                    }, `${item.index}-${index}-${src.value}`, false, {
                                                        fileName: "[project]/src/pages/loadsite.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/loadsite.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/loadsite.tsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.index, true, {
                                fileName: "[project]/src/pages/loadsite.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/loadsite.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/loadsite.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LoadSitePage;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0sdopu.._.js.map