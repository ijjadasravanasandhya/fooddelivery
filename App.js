import React from "react";
import ReactDOM from "react-dom/client";

var hOneElement = React.createElement("h1", {}, "HEADING CREATED using React");
var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);

//rootReact.render(hOneElement);
//console.log(hOneElement);

const Header = () => {
    return (
        
        <div id="header">
            <div id="header-logo">
                <img
                id="logo"
                src="https://e7.pngegg.com/pngimages/815/847/png-clipart-take-out-android-sindelantal-app-food-text-thumbnail.png" />
            </div>
            <div id="header-nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
       
    );
};

const RestaurantCard = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,

    }= resData?.info;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} *</h4>
        <h4>{costForTwo} </h4>
        
      </div>
    );
};


const resList = [

    {
        "info": {
          "id": "257428",
          "name": "Raajbagh Restaurant ",
          "cloudinaryImageId": "xvyrclhxftulsglktaek",
          "locality": "Seoni Road",
          "areaName": "Chhindwara Locality",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Indian",
            "Chinese",
            "Fast Food",
            "Beverages"
          ],
          "avgRating": 3.7,
          "veg": true,
          "parentId": "164019",
          "avgRatingString": "3.7",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 65,
            "lastMileTravel": 10.8,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "10.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-08-25 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹120 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/raajbagh-restaurant-seoni-road-chhindwara-locality-chhindwara-257428",
          "type": "WEBLINK"
        }
    },
    {
        "info": {
          "id": "658210",
          "name": "The Fusion Lounge",
          "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
          "locality": "Triloki nagar",
          "areaName": "Railway Station",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts"
          ],
          "avgRating": 4.2,
          "parentId": "395453",
          "avgRatingString": "4.2",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 60,
            "lastMileTravel": 11.3,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "11.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-08-25 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-fusion-lounge-triloki-nagar-railway-station-chhindwara-658210",
          "type": "WEBLINK"
        }
    },
    {
        "info": {
          "id": "151656",
          "name": "Dev International",
          "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
          "locality": "khajri road",
          "areaName": "Mohan Nagar",
          "costForTwo": "₹100 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Fast Food",
            "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "71556",
          "avgRatingString": "4.3",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 51,
            "lastMileTravel": 11.7,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "11.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-08-25 22:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/dev-international-khajri-road-mohan-nagar-chhindwara-151656",
          "type": "WEBLINK"
        }
    },
    {
        "info": {
          "id": "234875",
          "name": "Adil Hotel",
          "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
          "locality": "Rautha Wada",
          "areaName": "Chhindwara Locality",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "North Indian",
            "Biryani",
            "Tandoor"
          ],
          "avgRating": 4.3,
          "parentId": "27123",
          "avgRatingString": "4.3",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 45,
            "lastMileTravel": 10.7,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "10.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-08-25 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/adil-hotel-rautha-wada-chhindwara-locality-chhindwara-234875",
          "type": "WEBLINK"
        }
    },
    {
        "info": {
          "id": "151648",
          "name": "Mr. Gurung Momo & Chinese Corner",
          "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
          "locality": "Teacher's Colony",
          "areaName": "Mohan Nagar",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Momos",
            "Chinese",
            "Fast Food"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "140255",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 50,
            "lastMileTravel": 11.8,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "11.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-08-25 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-chhindwara-151648",
          "type": "WEBLINK"
        }
    },
    {
        "info": {
          "id": "151649",
          "name": "Hotel Sai Nath & Sai Restaurant",
          "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
          "locality": "railway station",
          "areaName": "Chhindwara Locality",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "101802",
          "avgRatingString": "4.2",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 53,
            "lastMileTravel": 10,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "10.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-08-25 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "FREE ITEM"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-chhindwara-151649",
          "type": "WEBLINK"
        }
    }

]


const Body = () => {
    return (
       
        <div id="body">
            <div id="body-search">Search</div>
            <div id="res-container">
                { resList.map( (restaurant) => (
                     <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ) ) }
            </div>
        </div>
        
    );
};




const AppLayout = () => {
    return (
        <>
        <Header />
        <Body />
        </>
    );
};

rootReact.render(<AppLayout />);