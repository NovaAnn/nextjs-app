module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("kqZg");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "H1Ta":
/***/ (function(module, exports) {



/***/ }),

/***/ "YEck":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__C_8IT",
	"imgItem": "MeetupDetail_imgItem__yL32N",
	"imgSpan": "MeetupDetail_imgSpan__1Xdwh",
	"mainRow": "MeetupDetail_mainRow__2ltUN",
	"detailsFlex": "MeetupDetail_detailsFlex__1_Iro"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kqZg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__("ykE2");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/font-awesome/css/font-awesome.min.css
var font_awesome_min = __webpack_require__("H1Ta");

// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__("YEck");
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);

// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js





function MeetupDetail(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: MeetupDetail_module_default.a.detail,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: props.image,
      alt: props.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("address", {
      children: props.address
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: MeetupDetail_module_default.a.detailsFlex,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h6", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "fas fa-map-marker-alt",
            style: {
              color: "#77002e"
            }
          })
        }), props.price]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h6", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "fas fa-male",
            style: {
              color: "#77002e"
            }
          })
        }), props.tenant]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h6", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "fas fa-building",
            style: {
              color: "#77002e"
            }
          })
        }), props.apartment]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h6", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "fas fa-tag",
            style: {
              color: "#77002e"
            }
          })
        }), "$", props.location]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h6", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "fas fa-phone",
            style: {
              color: "#77002e"
            }
          })
        }), "+31 ", props.contact]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      style: {
        backgroundColor: "#77002e",
        fontWeight: "600",
        fontStyle: "normal",
        color: "white"
      },
      children: "Amenities"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: MeetupDetail_module_default.a.mainRow,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        style: {
          display: "flex",
          flexWrap: "wrap"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "form-group col-md-3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: MeetupDetail_module_default.a.imgItem,
            style: {
              opacity: `${props.cooler ? 1 : 0.5}`
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "https://cdn-icons-png.flaticon.com/128/816/816655.png",
              style: {
                height: "5rem",
                marginBottom: "1rem"
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: MeetupDetail_module_default.a.imgSpan,
              children: "Air Cooler"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "form-group col-md-3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: MeetupDetail_module_default.a.imgItem,
            style: {
              opacity: `${props.microwave ? 1 : 0.5}`
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              style: {
                height: "5rem",
                marginBottom: "1rem"
              },
              src: "https://t4.ftcdn.net/jpg/02/98/58/67/240_F_298586773_RJyugngszfs8bkVtcB7uZ4h7ooMRscjA.jpg"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: MeetupDetail_module_default.a.imgSpan,
              children: "Microwave"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "form-group col-md-3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: MeetupDetail_module_default.a.imgItem,
            style: {
              opacity: `${props.refrigerator ? 1 : 0.5}`
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              style: {
                height: "5rem",
                marginBottom: "1rem"
              },
              src: "https://cdn-icons.flaticon.com/png/128/2182/premium/2182879.png?token=exp=1640132675~hmac=0dcf409868cadbe0a0973c90e156cfe4"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: MeetupDetail_module_default.a.imgSpan,
              children: "Refrigerator"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "form-group col-md-3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: MeetupDetail_module_default.a.imgItem,
            style: {
              opacity: `${props.heater ? 1 : 0.5}`
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              style: {
                height: "5rem",
                marginBottom: "1rem"
              },
              src: "https://cdn-icons.flaticon.com/png/128/1872/premium/1872999.png?token=exp=1640132703~hmac=f9649e96cee213d41921a5d7f3b87bad"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: MeetupDetail_module_default.a.imgSpan,
              children: "Heater"
            })]
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      style: {
        backgroundColor: "#77002e",
        fontWeight: "600",
        fontStyle: "normal",
        color: "white"
      },
      children: "About the Property"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "form-group col-md-12",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: props.description
        })
      })
    })]
  });
}

/* harmony default export */ var meetups_MeetupDetail = (MeetupDetail);
// CONCATENATED MODULE: ./pages/[meetupId]/index.js








function MeetupDetails(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: props.meetupData.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: props.meetupData.description
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
        src: "https://kit.fontawesome.com/fdba8ed509.js",
        crossorigin: "anonymous"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(meetups_MeetupDetail, {
      image: props.meetupData.image,
      title: props.meetupData.title,
      address: props.meetupData.address,
      description: props.meetupData.description,
      price: props.meetupData.price,
      location: props.meetupData.location,
      contact: props.meetupData.contact,
      tenant: props.meetupData.tenant,
      apartment: props.meetupData.apartment,
      cooler: props.meetupData.cooler,
      microwave: props.meetupData.microwave,
      refrigerator: props.meetupData.refrigerator,
      heater: props.meetupData.heater
    })]
  });
}

async function getStaticPaths() {
  const client = await external_mongodb_["MongoClient"].connect('mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    fallback: 'blocking',
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
}
async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  const client = await external_mongodb_["MongoClient"].connect('mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({
    _id: Object(external_mongodb_["ObjectId"])(meetupId)
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        price: selectedMeetup.price,
        location: selectedMeetup.location,
        contact: selectedMeetup.contact,
        apartment: selectedMeetup.apartment,
        tenant: selectedMeetup.tenant,
        cooler: selectedMeetup.cooler,
        microwave: selectedMeetup.microwave,
        refrigerator: selectedMeetup.refrigerator,
        heater: selectedMeetup.heater
      }
    }
  };
}
/* harmony default export */ var _meetupId_ = __webpack_exports__["default"] = (MeetupDetails);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });