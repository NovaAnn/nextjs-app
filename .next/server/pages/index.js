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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "A3pG":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn",
	"pDiv": "MeetupList_pDiv__302iU",
	"mainDiv": "MeetupList_mainDiv__1Z6yf",
	"searchDiv": "MeetupList_searchDiv__1qx6I",
	"searchItem": "MeetupList_searchItem__3hm_7",
	"indSpan": "MeetupList_indSpan__34xcz",
	"h3Span": "MeetupList_h3Span__3PXOi",
	"h3Count": "MeetupList_h3Count__3Ps_J",
	"switch": "MeetupList_switch__YfrEj",
	"slider": "MeetupList_slider__1MMiu",
	"round": "MeetupList_round__3CeTw"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "H1Ta":
/***/ (function(module, exports) {



/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__("ykE2");

// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__("A3pG");
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);

// EXTERNAL MODULE: ./node_modules/font-awesome/css/font-awesome.min.css
var font_awesome_min = __webpack_require__("H1Ta");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__("leqP");

// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__("RPSF");
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);

// CONCATENATED MODULE: ./components/meetups/MeetupItem.js







function MeetupItem(props) {
  const router = Object(router_["useRouter"])();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
    className: MeetupItem_module_default.a.item,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* default */], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: MeetupItem_module_default.a.image,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: props.image,
          alt: props.title
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: MeetupItem_module_default.a.content,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: props.title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("address", {
          children: props.address
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: MeetupItem_module_default.a.detailsFlex,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: MeetupItem_module_default.a.detailsFlexColumn,
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
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: MeetupItem_module_default.a.detailsFlexColumn,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h6", {
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
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: MeetupItem_module_default.a.actions,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: showDetailsHandler,
          children: "Show Details"
        })
      })]
    })
  });
}

/* harmony default export */ var meetups_MeetupItem = (MeetupItem);
// CONCATENATED MODULE: ./components/meetups/MeetupList.js





function MeetupList(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      className: MeetupList_module_default.a.list,
      children: props.meetups.map(meetup => /*#__PURE__*/Object(jsx_runtime_["jsx"])(meetups_MeetupItem, {
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
      }, meetup.id))
    })
  });
}

/* harmony default export */ var meetups_MeetupList = (MeetupList);
// CONCATENATED MODULE: ./pages/index.js








let priceChanged = false;
let locationChanged = false;
let tenantChanged = false;
let apartmentChanged = false;
let refinedMeetups = [];
let priceQueryArray = [];
let totQuery;
let requiredTenants = [];
let requiredApartment = [];
let searchMode = false;

function HomePage(props) {
  const locations = props.locationArray.map(item => {
    return item._id;
  });
  const priceList = props.priceArray.map(item => {
    if (item._id == 'Other') {
      return 80000;
    } else {
      return item._id;
    }
  });
  const tenants = props.tenantArray.map(item => {
    return item._id;
  });
  const apartment = props.apartmentArray.map(item => {
    return item._id;
  });
  const {
    0: checkedState,
    1: setCheckedState
  } = Object(external_react_["useState"])(new Array(locations.length).fill(true));
  const {
    0: pcheckedState,
    1: psetCheckedState
  } = Object(external_react_["useState"])(new Array(priceList.length).fill(true));
  const {
    0: tcheckedState,
    1: tsetCheckedState
  } = Object(external_react_["useState"])(new Array(tenants.length).fill(true));
  const {
    0: acheckedState,
    1: asetCheckedState
  } = Object(external_react_["useState"])(new Array(apartment.length).fill(true));
  const {
    0: search,
    1: setSearch
  } = Object(external_react_["useState"])(false);
  const {
    0: checking,
    1: setChecking
  } = Object(external_react_["useState"])(false);
  const actualPriceList = [20000, 40000, 60000, 80000];

  const commonFunction = array => {
    return array.map(price => {
      const higherLim = actualPriceList.find(actPrice => {
        return actPrice > price;
      });

      if (higherLim) {
        return [price, higherLim];
      } else {
        return [price];
      }
    });
  };

  const priceArray = commonFunction(priceList);

  const submitHandler = () => {
    refinedMeetups = [];
    searchMode = true;
    setChecking(true);
    const requiredLocations = locations.filter((_, index) => {
      return checkedState[index];
    });
    const requiredPrices = priceList.filter((_, index) => {
      return pcheckedState[index];
    });

    if (tenants.length > 0) {
      requiredTenants = tenants.filter((_, index) => {
        return tcheckedState[index];
      });
    }

    if (apartment.length > 0) {
      requiredApartment = apartment.filter((_, index) => {
        return acheckedState[index];
      });
    }

    const locationQuery = {
      price: {
        $in: [...requiredLocations]
      }
    };
    const tenantQuery = {
      tenant: {
        $in: [...requiredTenants]
      }
    };
    const apartmentQuery = {
      apartment: {
        $in: [...requiredApartment]
      }
    };
    const searchArray = commonFunction(requiredPrices);
    searchArray.forEach((element, i) => {
      if (element.length > 1) {
        priceQueryArray[i] = {
          $and: [{
            "$expr": {
              "$gte": [{
                "$toInt": "$location"
              }, element[0]]
            }
          }, {
            "$expr": {
              "$lte": [{
                "$toInt": "$location"
              }, element[1]]
            }
          }]
        };
      } else {
        priceQueryArray[i] = {
          "$expr": {
            "$gte": [{
              "$toInt": "$location"
            }, 80000]
          }
        };
      }
    });
    const priceQuery = {
      $or: [...priceQueryArray]
    };
    totQuery = {
      $and: [priceQuery, locationQuery, tenantQuery, apartmentQuery]
    };

    async function addMeetupHandler() {
      const url = '/api/' + props.meetups[0].price;
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(totQuery),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseData = await response.json();

      if (responseData.result) {
        refinedMeetups = responseData.result;
        setChecking(false);
      }
    }

    addMeetupHandler();
  };

  const handleOnChange = event => {
    switch (event.target.name) {
      case 'location':
        {
          locationChanged = true;
          const locIndex = locations.findIndex(location => {
            return location == event.target.value;
          });
          const updatedCheckedState = checkedState.map((item, index) => index === locIndex ? !item : item);
          setCheckedState(updatedCheckedState);
        }

      case 'tenant':
        {
          tenantChanged = true;
          const tenIndex = tenants.findIndex(location => {
            return location == event.target.value;
          });
          const tupdatedCheckedState = tcheckedState.map((item, index) => index === tenIndex ? !item : item);
          tsetCheckedState(tupdatedCheckedState);
        }

      case 'apartment':
        {
          apartmentChanged = true;
          const aptIndex = apartment.findIndex(location => {
            return location == event.target.value;
          });
          const aupdatedCheckedState = acheckedState.map((item, index) => index === aptIndex ? !item : item);
          asetCheckedState(aupdatedCheckedState);
        }

      case 'price':
        {
          priceChanged = true;
          const priceIndex = priceList.findIndex(location => {
            return location == event.target.value;
          });
          const pupdatedCheckedState = pcheckedState.map((item, index) => index === priceIndex ? !item : item);
          psetCheckedState(pupdatedCheckedState);
        }
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "React Meetups"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: "Browse a huge list of highly active React meetups!"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
        src: "https://kit.fontawesome.com/fdba8ed509.js",
        crossorigin: "anonymous"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: MeetupList_module_default.a.mainDiv,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: MeetupList_module_default.a.searchDiv,
        children: [props.locationArray && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: MeetupList_module_default.a.searchItem,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
            children: "Location"
          }), props.locationArray.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: MeetupList_module_default.a.indSpan,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
              className: MeetupList_module_default.a.switch,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "checkbox",
                name: "location",
                value: item._id,
                checked: checkedState[index],
                onChange: handleOnChange.bind(index)
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: MeetupList_module_default.a.slider
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: MeetupList_module_default.a.h3Span,
              children: item._id
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: MeetupList_module_default.a.h3Count,
              children: item.count
            })]
          }))]
        }), props.priceArray && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: MeetupList_module_default.a.searchItem,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
            children: "Price"
          }), priceArray.map((item, index, arr) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: MeetupList_module_default.a.indSpan,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
              className: MeetupList_module_default.a.switch,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "checkbox",
                name: "price",
                value: item[0] == "Other" ? 80000 : item[0],
                checked: pcheckedState[index],
                onChange: handleOnChange.bind(index)
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: MeetupList_module_default.a.slider
              })]
            }), item.length > 1 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
              className: MeetupList_module_default.a.h3Span,
              children: ["$", item[0], " - $", item[1]]
            }), item.length < 2 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: MeetupList_module_default.a.h3Span,
              children: "Greater than $80000"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: MeetupList_module_default.a.h3Count,
              children: props.priceArray[index].count
            })]
          }))]
        }), props.tenantArray && props.tenantArray[0]._id && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: MeetupList_module_default.a.searchItem,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
            children: "Tenant Allowed"
          }), props.tenantArray.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: MeetupList_module_default.a.indSpan,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
              className: MeetupList_module_default.a.switch,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "checkbox",
                name: "tenant",
                value: item._id,
                checked: tcheckedState[index],
                onChange: handleOnChange.bind(index)
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: MeetupList_module_default.a.slider
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: MeetupList_module_default.a.h3Span,
              children: item._id
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: MeetupList_module_default.a.h3Count,
              children: item.count
            })]
          }))]
        }), props.apartmentArray && props.apartmentArray[0]._id && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: MeetupList_module_default.a.searchItem,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
            children: "Apartment Type"
          }), props.apartmentArray.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: MeetupList_module_default.a.indSpan,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
              className: MeetupList_module_default.a.switch,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "checkbox",
                name: "apartment",
                value: item._id,
                checked: acheckedState[index],
                onChange: handleOnChange.bind(index)
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: MeetupList_module_default.a.slider
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: MeetupList_module_default.a.h3Span,
              children: item._id
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: MeetupList_module_default.a.h3Count,
              children: item.count
            })]
          }))]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          type: "button",
          onClick: submitHandler,
          children: "Search"
        })]
      }), !checking && refinedMeetups && refinedMeetups.length > 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(meetups_MeetupList, {
        meetups: refinedMeetups
      }), !searchMode && /*#__PURE__*/Object(jsx_runtime_["jsx"])(meetups_MeetupList, {
        meetups: props.meetups
      }), !checking && searchMode && refinedMeetups && refinedMeetups.length < 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: MeetupList_module_default.a.pDiv,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "No Results Found"
        })
      }), checking && searchMode && refinedMeetups.length < 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: MeetupList_module_default.a.pDiv,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Searching..."
        })
      })]
    })]
  });
}

async function getStaticProps() {
  // fetch data from an API
  const client = await external_mongodb_["MongoClient"].connect('mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  const result2 = await meetupsCollection.aggregate([{
    $project: {
      title: 1,
      image: 1,
      item: 1,
      address: 1,
      price: 1,
      location: 1,
      tenant: 1,
      apartment: 1,
      description: 1,
      priceInt: {
        $toInt: "$location"
      }
    }
  }, {
    $facet: {
      "categorizedByLocation": [{
        $sortByCount: "$price"
      }],
      "categorizedByTenant": [{
        $sortByCount: "$tenant"
      }],
      "categorizedByApartment": [{
        $sortByCount: "$apartment"
      }],
      "categorizedByPrice": [{
        $match: {
          price: {
            $exists: 1
          }
        }
      }, {
        $bucket: {
          groupBy: "$priceInt",
          boundaries: [0, 20000, 40000, 60000, 80000],
          default: "Other",
          output: {
            "count": {
              $sum: 1
            },
            "titles": {
              $push: "$title"
            }
          }
        }
      }]
    }
  }]);
  const yourData = await result2.next();
  client.close();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        price: meetup.price,
        contact: meetup.contact,
        apartment: meetup.apartment,
        tenant: meetup.tenant,
        location: meetup.location,
        cooler: meetup.cooler,
        microwave: meetup.microwave,
        refrigerator: meetup.refrigerator,
        heater: meetup.heater,
        description: meetup.description,
        id: meetup._id.toString()
      })),
      priceArray: yourData.categorizedByPrice,
      locationArray: yourData.categorizedByLocation,
      tenantArray: yourData.categorizedByTenant,
      apartmentArray: yourData.categorizedByApartment
    },
    revalidate: 1
  };
}
/* harmony default export */ var pages = __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "RPSF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"detailsFlexColumn": "MeetupItem_detailsFlexColumn__1dKjR",
	"detailsFlex": "MeetupItem_detailsFlex__33616",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "leqP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rQAc");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);



function Card(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "rQAc":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


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