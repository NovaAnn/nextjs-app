exports.id = 944;
exports.ids = [944];
exports.modules = {

/***/ 2430:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__pvgsv",
	"detailsFlexColumn": "MeetupItem_detailsFlexColumn__9UXBM",
	"detailsFlex": "MeetupItem_detailsFlex__e9CMR",
	"image": "MeetupItem_image__0jYm_",
	"content": "MeetupItem_content__fvTRB",
	"actions": "MeetupItem_actions__IeeH4"
};


/***/ }),

/***/ 6672:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__C2D8b",
	"pDiv": "MeetupList_pDiv__4EEMm",
	"mDiv": "MeetupList_mDiv__Ggz1A",
	"mainDiv": "MeetupList_mainDiv__6WW2S",
	"searchDiv": "MeetupList_searchDiv__wISHn",
	"searchItem": "MeetupList_searchItem__nQNNi",
	"indSpan": "MeetupList_indSpan__GoAIb",
	"h3Span": "MeetupList_h3Span__901LP",
	"h3Count": "MeetupList_h3Count__9_or5",
	"switch": "MeetupList_switch__gfv9z",
	"slider": "MeetupList_slider__lAODW",
	"round": "MeetupList_round__Iypkg"
};


/***/ }),

/***/ 7944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ meetups_MeetupList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(4117);
// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(2430);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.js





function MeetupItem(props) {
    const router = (0,router_.useRouter)();
    function showDetailsHandler() {
        router.push('/' + props.id);
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (MeetupItem_module_default()).item,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: props.image,
                        alt: props.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetupItem_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: props.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("address", {
                            children: props.address
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetupItem_module_default()).detailsFlex,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetupItem_module_default()).detailsFlexColumn,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-map-marker-alt",
                                                style: {
                                                    color: "#77002e"
                                                }
                                            })
                                        }),
                                        props.price
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-male",
                                                style: {
                                                    color: "#77002e"
                                                }
                                            })
                                        }),
                                        props.tenant
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (MeetupItem_module_default()).detailsFlexColumn,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-building",
                                                style: {
                                                    color: "#77002e"
                                                }
                                            })
                                        }),
                                        props.apartment
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-tag",
                                                style: {
                                                    color: "#77002e"
                                                }
                                            })
                                        }),
                                        "$",
                                        props.location
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).actions,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: showDetailsHandler,
                        children: "Show Details"
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const meetups_MeetupItem = (MeetupItem);

// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__(6672);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/meetups/MeetupList.js




function MeetupList(props) {
    console.log(props);
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: (MeetupList_module_default()).list,
            children: props.meetups.map((meetup)=>/*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupItem, {
                    id: meetup.id,
                    image: meetup.image,
                    title: meetup.title,
                    address: meetup.address,
                    price: meetup.price,
                    contact: meetup.contact,
                    apartment: meetup.apartment,
                    tenant: meetup.tenant,
                    location: meetup.location,
                    cooler: meetup.cooler,
                    microwave: meetup.microwave,
                    refrigerator: meetup.refrigerator,
                    heater: meetup.heater,
                    description: meetup.description
                }, meetup.id)
            )
        })
    }));
}
/* harmony default export */ const meetups_MeetupList = (MeetupList);


/***/ })

};
;