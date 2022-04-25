[{
  "geoAPIs": [
    // "state",
    // "counties",
    "gazcta-coa", // new geoAPI spatially filtered to COA
    // "gahouse",
    // "gasenate",
    "gatracts-coa", // new geoAPI spatially filtered to COA
    "tract2020-coa", // new geoAPI spatially filtered to COA
    "coansa",
    "coanpu",
    // "uscongress",
    // "rc",
    // "rc2021",
    "cities",
    // "superdistrict",
    "ga-elem-schools-2019", // prefiltered to COA
    "ga-middle-schools-2019", // prefiltered to COA
    "ga-high-schools-2019", // prefiltered to COA
    "library", // prefiltered to COA
    "greenspace" // prefiltered to COA
  ],
  "dataAPIs": [
    "ACSAllGeo2017-0",
    "ACSAllGeo2017-1",
    "ACSAllGeo2017-2",
    "ACSAllGeo2017-3",
    "ACSAllGeo2017-4",
    "ACSAllGeo2017-5",
    "ACSAllGeo2017-6",
    "ACSAllGeo2017-7",
    "ACSAllGeo2018-0",
    "ACSAllGeo2018-1",
    "ACSAllGeo2018-2",
    "ACSAllGeo2018-3",
    "ACSAllGeo2018-4",
    "ACSAllGeo2018-5",
    "ACSAllGeo2018-6",
    "ACSAllGeo2018-7",
    "ACSAllGeo2018-8",
    "ACSAllGeo2018-9",
    "GA_Elem_Schools_2019",
    "GA_Middle_Schools_2019",
    "GA_High_Schools_2019",
    "JobFlows_LEHD_2010_2017",
    "Maternal_Health_2008_18",
    "School_By_Tract_18_19",
    "ACSAllGeo2019-Change2000",
    "ACSAllGeo2019-Change2010",
    "ACSAllGeo2019-Economic",
    "ACSAllGeo2019-Demographic",
    "ACSAllGeo2019-Social",
    "ACSAllGeo2019-Housing",
    "ACSAllGeo2019-RaceEconomic",
    "ACSAllGeo2019-RaceDemographic",
    "ACSAllGeo2019-RaceSocial",
    "ACSAllGeo2019-RaceHousing",
    "Maternal_Health_Asthma_2015_19",
    "JobFlows_LEHD_2010_2018",
    "CACDS_2017_20",
    "PopChange_Multi_Geos_2010_20",
    "Asthma_2008_18",
    "PopChange_1990to2020",
    "JobFlows_LEHD_2010_2019",
    //Crime, building permits, 
  ],
  "tileLayers": [
    "tile-layer-color",
    "tile-arcgis-grey",
    "tile-arcgis-satellite",
    "tile-arcgis-color",
    "tile-natgeo",
    "tile-layer-dark"
  ],
  "name": "coa-sd29dm2dn0",
  "style": {
    "colorPalette": [
      "#ffb3ba",
      "#ffdfba",
      "#ffffba",
      "#baffc9",
      "#bae1ff"
    ],
    "header": {
      "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/8/80/Seal_of_Atlanta.png",
      "text": "City Data"
    },
    "footer": {
      "bgUrl": "https://www.transparenttextures.com/patterns/diagmonds-light.png",
      "logoUrl": "https://neighborhoodnexus.org/wp-content/uploads/2016/04/neighborhood-nexus-logo.png",
      "bgcolor": "#EDF3F1",
      "logoLinkUrl": "https://neighborhoodnexus.org/"
    },
    "tabbedboxes": {
      "bgcolor2": "lightgrey",
      "bgcolor1": "lightgrey"
    },
    "navbar": {
      "bgUrl": "https://www.transparenttextures.com/patterns/diagmonds-light.png",
      "logoUrl": "https://via.placeholder.com/300x40.png?text=Logo+Goes+Here",
      "bgcolor": "#E6E6E6"
    },
    "mainwrapper": {
      "bgcolor": '#E6E6E6'
    },
    "global": {
      "borderradius": "10px"
    }
  },
  "states": {
    "map": {
      "center": [
        33.765,
        -84.4
      ],
      "zoom": 12
    },
    "layers": {
      // "rc": {
      //   "style": {
      //     "opacity": 0.8,
      //     "borderColor": "teal",
      //     "borderWidth": 3,
      //     "borderType": "solid",
      //     "fillColor": "teal",
      //     "data": {
      //       "colormapReverse": false,
      //       "numOfBins": 72,
      //       "colormap": "portland"
      //     }
      //   },
      //   "label": "Regional Commissions",
      //   "shortlabel": "RCs",
      //   "boundingGEO": "State",
      //   "visible": true,
      //   "selected": false,
      //   "priority": 2,
      //   "stats": {
      //     "count": 3748,
      //     "sources": [
      //       {
      //         "name": "Decennial",
      //         "count": 173
      //       },
      //       {
      //         "name": "Decennial/ACS",
      //         "count": 95
      //       },
      //       {
      //         "name": "ACS",
      //         "count": 3338
      //       },
      //       {
      //         "name": "TIGER",
      //         "count": 3
      //       },
      //       {
      //         "name": "ACS, TIGER",
      //         "count": 7
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       }
      //     ],
      //     "categories": [
      //       {
      //         "name": "Change since 2000",
      //         "count": 268
      //       },
      //       {
      //         "name": "Demographic",
      //         "count": 535
      //       },
      //       {
      //         "name": "Economic",
      //         "count": 935
      //       },
      //       {
      //         "name": "Housing",
      //         "count": 544
      //       },
      //       {
      //         "name": "Social",
      //         "count": 930
      //       },
      //       {
      //         "name": "Change since 2010",
      //         "count": 404
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       }
      //     ]
      //   }
      // },
      // "rc2021": {
      //   "style": {
      //     "opacity": 0.8,
      //     "borderColor": "teal",
      //     "borderWidth": 3,
      //     "borderType": "solid",
      //     "fillColor": "teal",
      //     "data": {
      //       "colormapReverse": false,
      //       "numOfBins": 72,
      //       "colormap": "portland"
      //     }
      //   },
      //   "label": "Regional Commissions (New)",
      //   "shortlabel": "RCs (New)",
      //   "boundingGEO": "State",
      //   "visible": true,
      //   "selected": false,
      //   "priority": 2,
      //   "stats": {
      //     "count": 392,
      //     "sources": [
      //       {
      //         "name": "LEHD, Origin-Destination Data",
      //         "count": 66
      //       },
      //       {
      //         "name": "Census 2020 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2010 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2000 Redistricting Summary Data File",
      //         "count": 35
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1",
      //         "count": 5
      //       },
      //       {
      //         "name": "Census 1990 Redistricting Summary Data File",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B",
      //         "count": 4
      //       },
      //       {
      //         "name": "Census 2010 and 2020 Redistricting Summary Data Files",
      //         "count": 42
      //       },
      //       {
      //         "name": "Census 2000 and 2020 Redistricting Summary Data Files",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1  and 2020 Redistricting Summary Data File",
      //         "count": 6
      //       },
      //       {
      //         "name": "Census 1990 and 2020 Redistricting Summary Data Files",
      //         "count": 37
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B  and 2020 Redistricting Summary Data File",
      //         "count": 5
      //       },
      //       {
      //         "name": "US Decennial Census, 2020",
      //         "count": 13
      //       },
      //       {
      //         "name": "US Decennial Census, 2010 & 2020 (in 2020 Census Geographies)",
      //         "count": 14
      //       },
      //       {
      //         "name": "US Decennial Census, 2010 (in 2020 Census Geographies)",
      //         "count": 13
      //       }
      //     ],
      //     "categories": [
      //       {
      //         "name": "Economic",
      //         "count": 66
      //       },
      //       {
      //         "name": "Demographic",
      //         "count": 248
      //       },
      //       {
      //         "name": "Housing",
      //         "count": 38
      //       },
      //       {
      //         "name": "Demographics",
      //         "count": 40
      //       }
      //     ]
      //   }
      // },
      // "superdistrict": {
      //   "style": {
      //     "opacity": 0.8,
      //     "borderColor": "teal",
      //     "borderWidth": 3,
      //     "borderType": "solid",
      //     "fillColor": "teal",
      //     "data": {
      //       "colormapReverse": false,
      //       "numOfBins": 72,
      //       "colormap": "portland"
      //     }
      //   },
      //   "label": "Super Districts",
      //   "shortlabel": "SDs",
      //   "boundingGEO": "State",
      //   "visible": true,
      //   "priority": 7,
      //   "selected": false,
      //   "stats": {
      //     "count": 4212,
      //     "sources": [
      //       {
      //         "name": "Decennial",
      //         "count": 173
      //       },
      //       {
      //         "name": "Decennial/ACS",
      //         "count": 95
      //       },
      //       {
      //         "name": "ACS",
      //         "count": 3338
      //       },
      //       {
      //         "name": "TIGER",
      //         "count": 3
      //       },
      //       {
      //         "name": "ACS, TIGER",
      //         "count": 7
      //       },
      //       {
      //         "name": "GA CACDS",
      //         "count": 72
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       },
      //       {
      //         "name": "LEHD, Origin-Destination Data",
      //         "count": 66
      //       },
      //       {
      //         "name": "Census 2020 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2010 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2000 Redistricting Summary Data File",
      //         "count": 35
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1",
      //         "count": 5
      //       },
      //       {
      //         "name": "Census 1990 Redistricting Summary Data File",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B",
      //         "count": 4
      //       },
      //       {
      //         "name": "Census 2010 and 2020 Redistricting Summary Data Files",
      //         "count": 42
      //       },
      //       {
      //         "name": "Census 2000 and 2020 Redistricting Summary Data Files",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1  and 2020 Redistricting Summary Data File",
      //         "count": 6
      //       },
      //       {
      //         "name": "Census 1990 and 2020 Redistricting Summary Data Files",
      //         "count": 37
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B  and 2020 Redistricting Summary Data File",
      //         "count": 5
      //       },
      //       {
      //         "name": "US Decennial Census, 2020",
      //         "count": 13
      //       },
      //       {
      //         "name": "US Decennial Census, 2010 & 2020 (in 2020 Census Geographies)",
      //         "count": 14
      //       },
      //       {
      //         "name": "US Decennial Census, 2010 (in 2020 Census Geographies)",
      //         "count": 13
      //       }
      //     ],
      //     "categories": [
      //       {
      //         "name": "Change since 2000",
      //         "count": 268
      //       },
      //       {
      //         "name": "Demographic",
      //         "count": 783
      //       },
      //       {
      //         "name": "Economic",
      //         "count": 1001
      //       },
      //       {
      //         "name": "Housing",
      //         "count": 582
      //       },
      //       {
      //         "name": "Social",
      //         "count": 930
      //       },
      //       {
      //         "name": "Change since 2010",
      //         "count": 404
      //       },
      //       {
      //         "name": "Early Childhood",
      //         "count": 72
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       },
      //       {
      //         "name": "Demographics",
      //         "count": 40
      //       }
      //     ]
      //   },
      //   "geoFieldManifest": {
      //     "GEOID": {
      //       "field": "GEOID",
      //       "type": "string",
      //       "alias": "GEOID"
      //     },
      //     "NAME": {
      //       "field": "NAME",
      //       "type": "string",
      //       "alias": "NAME"
      //     },
      //     "PlanningRegion": {
      //       "field": "PlanningRegion",
      //       "type": "string",
      //       "alias": "Planning Region"
      //     }
      //   }
      // },
      // "uscongress": {
      //   "style": {
      //     "opacity": 0.8,
      //     "borderColor": "teal",
      //     "borderWidth": 3,
      //     "borderType": "solid",
      //     "fillColor": "teal",
      //     "data": {
      //       "colormapReverse": false,
      //       "numOfBins": 72,
      //       "colormap": "portland"
      //     }
      //   },
      //   "label": "US House Districts",
      //   "shortlabel": "US House",
      //   "boundingGEO": "State",
      //   "visible": true,
      //   "selected": false,
      //   "priority": 6,
      //   "stats": {
      //     "count": 4100,
      //     "sources": [
      //       {
      //         "name": "Decennial",
      //         "count": 173
      //       },
      //       {
      //         "name": "Decennial/ACS",
      //         "count": 95
      //       },
      //       {
      //         "name": "ACS",
      //         "count": 3338
      //       },
      //       {
      //         "name": "TIGER",
      //         "count": 3
      //       },
      //       {
      //         "name": "ACS, TIGER",
      //         "count": 7
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       },
      //       {
      //         "name": "LEHD, Origin-Destination Data",
      //         "count": 66
      //       },
      //       {
      //         "name": "Census 2020 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2010 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2000 Redistricting Summary Data File",
      //         "count": 35
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1",
      //         "count": 5
      //       },
      //       {
      //         "name": "Census 1990 Redistricting Summary Data File",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B",
      //         "count": 4
      //       },
      //       {
      //         "name": "Census 2010 and 2020 Redistricting Summary Data Files",
      //         "count": 42
      //       },
      //       {
      //         "name": "Census 2000 and 2020 Redistricting Summary Data Files",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1  and 2020 Redistricting Summary Data File",
      //         "count": 6
      //       },
      //       {
      //         "name": "Census 1990 and 2020 Redistricting Summary Data Files",
      //         "count": 37
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B  and 2020 Redistricting Summary Data File",
      //         "count": 5
      //       }
      //     ],
      //     "categories": [
      //       {
      //         "name": "Change since 2000",
      //         "count": 268
      //       },
      //       {
      //         "name": "Demographic",
      //         "count": 783
      //       },
      //       {
      //         "name": "Economic",
      //         "count": 1001
      //       },
      //       {
      //         "name": "Housing",
      //         "count": 582
      //       },
      //       {
      //         "name": "Social",
      //         "count": 930
      //       },
      //       {
      //         "name": "Change since 2010",
      //         "count": 404
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       }
      //     ]
      //   },
      //   "geoFieldManifest": {
      //     "GEOID": {
      //       "field": "GEOID",
      //       "type": "string",
      //       "alias": "GEOID"
      //     },
      //     "NAME": {
      //       "field": "NAME",
      //       "type": "string",
      //       "alias": "NAME"
      //     },
      //     "PlanningRegion": {
      //       "field": "PlanningRegion",
      //       "type": "string",
      //       "alias": "Planning Region"
      //     }
      //   }
      // },
      "gazcta": {
        "style": {
          "opacity": 0.8,
          "borderColor": "teal",
          "borderWidth": 3,
          "borderType": "solid",
          "fillColor": "teal",
          "data": {
            "colormapReverse": false,
            "numOfBins": 72,
            "colormap": "portland"
          }
        },
        "label": "Zip Code Tabulation Areas (ZCTA)",
        "shortlabel": "ZCTAs",
        "boundingGEO": "State",
        "visible": true,
        "selected": false,
        "priority": 8,
        "stats": {
          "count": 3761,
          "sources": [
            {
              "name": "Decennial",
              "count": 173
            },
            {
              "name": "Decennial/ACS",
              "count": 95
            },
            {
              "name": "ACS",
              "count": 3339
            },
            {
              "name": "TIGER",
              "count": 3
            },
            {
              "name": "ACS, TIGER",
              "count": 7
            },
            {
              "name": "LEHD Origin-Destination Data",
              "count": 66
            },
            {
              "name": "LEHD, Origin-Destination Data",
              "count": 66
            },
            {
              "name": "Georgia Department of Public Health, OHIP (OASIS)",
              "count": 11
            },
            {
              "name": "ACS, Georgia Department of Public Health, OHIP (OASIS)",
              "count": 1
            }
          ],
          "categories": [
            {
              "name": "Change since 2000",
              "count": 268
            },
            {
              "name": "Demographic",
              "count": 535
            },
            {
              "name": "Economic",
              "count": 1001
            },
            {
              "name": "Housing",
              "count": 544
            },
            {
              "name": "Social",
              "count": 930
            },
            {
              "name": "Change since 2010",
              "count": 404
            },
            {
              "name": "LEHD Origin-Destination Data",
              "count": 66
            },
            {
              "name": "Health",
              "count": 13
            }
          ]
        },
        "geoFieldManifest": {
          "GEOID": {
            "field": "GEOID",
            "type": "string",
            "alias": "GEOID"
          },
          "NAME": {
            "field": "NAME",
            "type": "string",
            "alias": "NAME"
          },
          "PlanningRegion": {
            "field": "PlanningRegion",
            "type": "string",
            "alias": "Planning Region"
          }
        }
      },
      "coansa": {
        "style": {
          "opacity": 0.8,
          "borderColor": "teal",
          "borderWidth": 3,
          "borderType": "solid",
          "fillColor": "teal",
          "data": {
            "colormapReverse": false,
            "numOfBins": 72,
            "colormap": "portland"
          }
        },
        "label": "City of Atlanta's Neighborhood Statistical Areas (NSAs)",
        "shortlabel": "NSAs",
        "boundingGEO": "Atlanta",
        "visible": true,
        "selected": false,
        "priority": 12,
        "stats": {
          "count": 4113,
          "sources": [
            {
              "name": "Decennial",
              "count": 173
            },
            {
              "name": "Decennial/ACS",
              "count": 95
            },
            {
              "name": "ACS",
              "count": 3339
            },
            {
              "name": "TIGER",
              "count": 3
            },
            {
              "name": "ACS, TIGER",
              "count": 7
            },
            {
              "name": "LEHD Origin-Destination Data",
              "count": 132
            },
            {
              "name": "LEHD, Origin-Destination Data",
              "count": 66
            },
            {
              "name": "Georgia Department of Public Health, OHIP (OASIS)",
              "count": 11
            },
            {
              "name": "ACS, Georgia Department of Public Health, OHIP (OASIS)",
              "count": 1
            },
            {
              "name": "Census 2020 Redistricting Summary Data File",
              "count": 40
            },
            {
              "name": "Census 2010 Redistricting Summary Data File",
              "count": 40
            },
            {
              "name": "Census 2000 Redistricting Summary Data File",
              "count": 35
            },
            {
              "name": "Census 2000 Summary File 1",
              "count": 5
            },
            {
              "name": "Census 1990 Redistricting Summary Data File",
              "count": 36
            },
            {
              "name": "Census 1990 Summary Tape File 1B",
              "count": 4
            },
            {
              "name": "Census 2010 and 2020 Redistricting Summary Data Files",
              "count": 42
            },
            {
              "name": "Census 2000 and 2020 Redistricting Summary Data Files",
              "count": 36
            },
            {
              "name": "Census 2000 Summary File 1  and 2020 Redistricting Summary Data File",
              "count": 6
            },
            {
              "name": "Census 1990 and 2020 Redistricting Summary Data Files",
              "count": 37
            },
            {
              "name": "Census 1990 Summary Tape File 1B  and 2020 Redistricting Summary Data File",
              "count": 5
            }
          ],
          "categories": [
            {
              "name": "Change since 2000",
              "count": 268
            },
            {
              "name": "Demographic",
              "count": 783
            },
            {
              "name": "Economic",
              "count": 1001
            },
            {
              "name": "Housing",
              "count": 582
            },
            {
              "name": "Social",
              "count": 930
            },
            {
              "name": "Change since 2010",
              "count": 404
            },
            {
              "name": "LEHD Origin-Destination Data",
              "count": 132
            },
            {
              "name": "Health",
              "count": 13
            }
          ]
        }
      },
      "coanpu": {
        "style": {
          "opacity": 0.8,
          "borderColor": "teal",
          "borderWidth": 3,
          "borderType": "solid",
          "fillColor": "teal",
          "data": {
            "colormapReverse": false,
            "numOfBins": 72,
            "colormap": "portland"
          }
        },
        "label": "City of Atlanta's Neighborhood Planning Units (NPUs)",
        "shortlabel": "NPUs",
        "boundingGEO": "Atlanta",
        "visible": true,
        "selected": false,
        "priority": 11,
        "stats": {
          "count": 4113,
          "sources": [
            {
              "name": "Decennial",
              "count": 173
            },
            {
              "name": "Decennial/ACS",
              "count": 95
            },
            {
              "name": "ACS",
              "count": 3339
            },
            {
              "name": "TIGER",
              "count": 3
            },
            {
              "name": "ACS, TIGER",
              "count": 7
            },
            {
              "name": "LEHD Origin-Destination Data",
              "count": 132
            },
            {
              "name": "LEHD, Origin-Destination Data",
              "count": 66
            },
            {
              "name": "Georgia Department of Public Health, OHIP (OASIS)",
              "count": 11
            },
            {
              "name": "ACS, Georgia Department of Public Health, OHIP (OASIS)",
              "count": 1
            },
            {
              "name": "Census 2020 Redistricting Summary Data File",
              "count": 40
            },
            {
              "name": "Census 2010 Redistricting Summary Data File",
              "count": 40
            },
            {
              "name": "Census 2000 Redistricting Summary Data File",
              "count": 35
            },
            {
              "name": "Census 2000 Summary File 1",
              "count": 5
            },
            {
              "name": "Census 1990 Redistricting Summary Data File",
              "count": 36
            },
            {
              "name": "Census 1990 Summary Tape File 1B",
              "count": 4
            },
            {
              "name": "Census 2010 and 2020 Redistricting Summary Data Files",
              "count": 42
            },
            {
              "name": "Census 2000 and 2020 Redistricting Summary Data Files",
              "count": 36
            },
            {
              "name": "Census 2000 Summary File 1  and 2020 Redistricting Summary Data File",
              "count": 6
            },
            {
              "name": "Census 1990 and 2020 Redistricting Summary Data Files",
              "count": 37
            },
            {
              "name": "Census 1990 Summary Tape File 1B  and 2020 Redistricting Summary Data File",
              "count": 5
            }
          ],
          "categories": [
            {
              "name": "Change since 2000",
              "count": 268
            },
            {
              "name": "Demographic",
              "count": 783
            },
            {
              "name": "Economic",
              "count": 1001
            },
            {
              "name": "Housing",
              "count": 582
            },
            {
              "name": "Social",
              "count": 930
            },
            {
              "name": "Change since 2010",
              "count": 404
            },
            {
              "name": "LEHD Origin-Destination Data",
              "count": 132
            },
            {
              "name": "Health",
              "count": 13
            }
          ]
        }
      },
      "gatracts": {
        "style": {
          "opacity": 0.8,
          "borderColor": "#777777",
          "borderWidth": 1,
          "borderType": "solid",
          "fillColor": "teal",
          "data": {
            "colormapReverse": false,
            "numOfBins": 72,
            "colormap": "portland"
          }
        },
        "label": "Census Tracts",
        "shortlabel": "Census Tracts",
        "boundingGEO": "state",
        "visible": true,
        "selected": true,
        "priority": 10,
        "stats": {
          "count": 4003,
          "sources": [
            {
              "name": "Decennial",
              "count": 173
            },
            {
              "name": "Decennial/ACS",
              "count": 95
            },
            {
              "name": "ACS",
              "count": 3342
            },
            {
              "name": "TIGER",
              "count": 3
            },
            {
              "name": "ACS, TIGER",
              "count": 7
            },
            {
              "name": "Georgia Department of Public Health, OHIP (OASIS)",
              "count": 17
            },
            {
              "name": "ACS, Georgia Department of Public Health, OHIP (OASIS)",
              "count": 3
            },
            {
              "name": "GA CACDS",
              "count": 72
            },
            {
              "name": "LEHD Origin-Destination Data",
              "count": 132
            },
            {
              "name": "LEHD, Origin-Destination Data",
              "count": 66
            },
            {
              "name": "Georgia Department of Public Health (DPH)",
              "count": 54
            },
            {
              "name": "Georgia Department of Education (GA DOE)",
              "count": 39
            }
          ],
          "categories": [
            {
              "name": "Change since 2000",
              "count": 268
            },
            {
              "name": "Demographic",
              "count": 535
            },
            {
              "name": "Economic",
              "count": 1001
            },
            {
              "name": "Housing",
              "count": 544
            },
            {
              "name": "Social",
              "count": 930
            },
            {
              "name": "Change since 2010",
              "count": 404
            },
            {
              "name": "Health",
              "count": 24
            },
            {
              "name": "Early Childhood",
              "count": 72
            },
            {
              "name": "LEHD Origin-Destination Data",
              "count": 132
            },
            {
              "name": "Maternal Health",
              "count": 54
            },
            {
              "name": "Public School Data by Census Tract",
              "count": 39
            }
          ]
        },
        "geoFieldManifest": {
          "GEOID": {
            "field": "GEOID",
            "type": "string",
            "alias": "GEOID"
          },
          "LONGNAME": {
            "field": "LONGNAME",
            "type": "string",
            "alias": "NAME"
          },
          "COUNTY": {
            "field": "COUNTY",
            "type": "string",
            "alias": "County"
          },
          "PlanningRegion": {
            "field": "PlanningRegion",
            "type": "string",
            "alias": "Planning Region"
          },
          "ARCModelingArea": {
            "field": "ARCModelingArea",
            "type": "string",
            "alias": "ARC Modeling Area"
          }
        }
      },
      "tract2020": {
        "style": {
          "opacity": 0.8,
          "borderColor": "#777777",
          "borderWidth": 1,
          "borderType": "solid",
          "fillColor": "teal",
          "data": {
            "colormapReverse": false,
            "numOfBins": 72,
            "colormap": "portland"
          }
        },
        "label": "Census Tracts (2020)",
        "shortlabel": "Census Tracts (2020)",
        "boundingGEO": "state",
        "visible": true,
        "selected": false,
        "priority": 10,
        "stats": {
          "count": 326,
          "sources": [
            {
              "name": "Census 2020 Redistricting Summary Data File",
              "count": 40
            },
            {
              "name": "Census 2010 Redistricting Summary Data File",
              "count": 40
            },
            {
              "name": "Census 2000 Redistricting Summary Data File",
              "count": 35
            },
            {
              "name": "Census 2000 Summary File 1",
              "count": 5
            },
            {
              "name": "Census 1990 Redistricting Summary Data File",
              "count": 36
            },
            {
              "name": "Census 1990 Summary Tape File 1B",
              "count": 4
            },
            {
              "name": "Census 2010 and 2020 Redistricting Summary Data Files",
              "count": 42
            },
            {
              "name": "Census 2000 and 2020 Redistricting Summary Data Files",
              "count": 36
            },
            {
              "name": "Census 2000 Summary File 1  and 2020 Redistricting Summary Data File",
              "count": 6
            },
            {
              "name": "Census 1990 and 2020 Redistricting Summary Data Files",
              "count": 37
            },
            {
              "name": "Census 1990 Summary Tape File 1B  and 2020 Redistricting Summary Data File",
              "count": 5
            },
            {
              "name": "US Decennial Census, 2020",
              "count": 13
            },
            {
              "name": "US Decennial Census, 2010 & 2020 (in 2020 Census Geographies)",
              "count": 14
            },
            {
              "name": "US Decennial Census, 2010 (in 2020 Census Geographies)",
              "count": 13
            }
          ],
          "categories": [
            {
              "name": "Demographic",
              "count": 248
            },
            {
              "name": "Housing",
              "count": 38
            },
            {
              "name": "Demographics",
              "count": 40
            }
          ]
        },
        "geoFieldManifest": {
          "GEOID": {
            "field": "GEOID",
            "type": "string",
            "alias": "GEOID"
          },
          "NAME": {
            "field": "NAME",
            "type": "string",
            "alias": "NAME"
          },
          "COUNTYNAME": {
            "field": "COUNTYNAME",
            "type": "string",
            "alias": "County"
          },
          "PlanningRegion": {
            "field": "PlanningRegion",
            "type": "string",
            "alias": "Planning Region"
          },
          "ARCModelingArea": {
            "field": "ARCModelingArea",
            "type": "string",
            "alias": "ARC Modeling Area"
          }
        }
      },
      // "gasenate": {
      //   "style": {
      //     "opacity": 0.8,
      //     "borderColor": "teal",
      //     "borderWidth": 3,
      //     "borderType": "solid",
      //     "fillColor": "teal",
      //     "data": {
      //       "colormapReverse": false,
      //       "numOfBins": 72,
      //       "colormap": "portland"
      //     }
      //   },
      //   "label": "Georgia Senate Districts",
      //   "shortlabel": "State Senate",
      //   "boundingGEO": "state",
      //   "visible": true,
      //   "selected": false,
      //   "priority": 2,
      //   "stats": {
      //     "count": 4113,
      //     "sources": [
      //       {
      //         "name": "Decennial",
      //         "count": 173
      //       },
      //       {
      //         "name": "Decennial/ACS",
      //         "count": 95
      //       },
      //       {
      //         "name": "ACS",
      //         "count": 3339
      //       },
      //       {
      //         "name": "TIGER",
      //         "count": 3
      //       },
      //       {
      //         "name": "ACS, TIGER",
      //         "count": 7
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       },
      //       {
      //         "name": "LEHD, Origin-Destination Data",
      //         "count": 66
      //       },
      //       {
      //         "name": "Georgia Department of Public Health, OHIP (OASIS)",
      //         "count": 11
      //       },
      //       {
      //         "name": "ACS, Georgia Department of Public Health, OHIP (OASIS)",
      //         "count": 1
      //       },
      //       {
      //         "name": "Census 2020 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2010 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2000 Redistricting Summary Data File",
      //         "count": 35
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1",
      //         "count": 5
      //       },
      //       {
      //         "name": "Census 1990 Redistricting Summary Data File",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B",
      //         "count": 4
      //       },
      //       {
      //         "name": "Census 2010 and 2020 Redistricting Summary Data Files",
      //         "count": 42
      //       },
      //       {
      //         "name": "Census 2000 and 2020 Redistricting Summary Data Files",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1  and 2020 Redistricting Summary Data File",
      //         "count": 6
      //       },
      //       {
      //         "name": "Census 1990 and 2020 Redistricting Summary Data Files",
      //         "count": 37
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B  and 2020 Redistricting Summary Data File",
      //         "count": 5
      //       }
      //     ],
      //     "categories": [
      //       {
      //         "name": "Change since 2000",
      //         "count": 268
      //       },
      //       {
      //         "name": "Demographic",
      //         "count": 783
      //       },
      //       {
      //         "name": "Economic",
      //         "count": 1001
      //       },
      //       {
      //         "name": "Housing",
      //         "count": 582
      //       },
      //       {
      //         "name": "Social",
      //         "count": 930
      //       },
      //       {
      //         "name": "Change since 2010",
      //         "count": 404
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       },
      //       {
      //         "name": "Health",
      //         "count": 13
      //       }
      //     ]
      //   },
      //   "geoFieldManifest": {
      //     "GEOID": {
      //       "field": "GEOID",
      //       "type": "string",
      //       "alias": "GEOID"
      //     },
      //     "NAME": {
      //       "field": "NAME",
      //       "type": "string",
      //       "alias": "NAME"
      //     },
      //     "PlanningRegion": {
      //       "field": "PlanningRegion",
      //       "type": "string",
      //       "alias": "Planning Region"
      //     }
      //   }
      // },
      // "gahouse": {
      //   "style": {
      //     "opacity": 0.8,
      //     "borderColor": "teal",
      //     "borderWidth": 3,
      //     "borderType": "solid",
      //     "fillColor": "teal",
      //     "data": {
      //       "colormapReverse": false,
      //       "numOfBins": 72,
      //       "colormap": "portland"
      //     }
      //   },
      //   "label": "Georgia House Districts",
      //   "shortlabel": "State House",
      //   "boundingGEO": "state",
      //   "visible": true,
      //   "selected": false,
      //   "priority": 3,
      //   "stats": {
      //     "count": 4113,
      //     "sources": [
      //       {
      //         "name": "Decennial",
      //         "count": 173
      //       },
      //       {
      //         "name": "Decennial/ACS",
      //         "count": 95
      //       },
      //       {
      //         "name": "ACS",
      //         "count": 3339
      //       },
      //       {
      //         "name": "TIGER",
      //         "count": 3
      //       },
      //       {
      //         "name": "ACS, TIGER",
      //         "count": 7
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       },
      //       {
      //         "name": "LEHD, Origin-Destination Data",
      //         "count": 66
      //       },
      //       {
      //         "name": "Georgia Department of Public Health, OHIP (OASIS)",
      //         "count": 11
      //       },
      //       {
      //         "name": "ACS, Georgia Department of Public Health, OHIP (OASIS)",
      //         "count": 1
      //       },
      //       {
      //         "name": "Census 2020 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2010 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2000 Redistricting Summary Data File",
      //         "count": 35
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1",
      //         "count": 5
      //       },
      //       {
      //         "name": "Census 1990 Redistricting Summary Data File",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B",
      //         "count": 4
      //       },
      //       {
      //         "name": "Census 2010 and 2020 Redistricting Summary Data Files",
      //         "count": 42
      //       },
      //       {
      //         "name": "Census 2000 and 2020 Redistricting Summary Data Files",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1  and 2020 Redistricting Summary Data File",
      //         "count": 6
      //       },
      //       {
      //         "name": "Census 1990 and 2020 Redistricting Summary Data Files",
      //         "count": 37
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B  and 2020 Redistricting Summary Data File",
      //         "count": 5
      //       }
      //     ],
      //     "categories": [
      //       {
      //         "name": "Change since 2000",
      //         "count": 268
      //       },
      //       {
      //         "name": "Demographic",
      //         "count": 783
      //       },
      //       {
      //         "name": "Economic",
      //         "count": 1001
      //       },
      //       {
      //         "name": "Housing",
      //         "count": 582
      //       },
      //       {
      //         "name": "Social",
      //         "count": 930
      //       },
      //       {
      //         "name": "Change since 2010",
      //         "count": 404
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       },
      //       {
      //         "name": "Health",
      //         "count": 13
      //       }
      //     ]
      //   },
      //   "geoFieldManifest": {
      //     "GEOID": {
      //       "field": "GEOID",
      //       "type": "string",
      //       "alias": "GEOID"
      //     },
      //     "NAME": {
      //       "field": "NAME",
      //       "type": "string",
      //       "alias": "NAME"
      //     },
      //     "PlanningRegion": {
      //       "field": "PlanningRegion",
      //       "type": "string",
      //       "alias": "Planning Region"
      //     }
      //   }
      // },
      // "counties": {
      //   "style": {
      //     "opacity": 0.8,
      //     "borderColor": "black",
      //     "borderWidth": 3,
      //     "borderType": "solid",
      //     "fillColor": "grey",
      //     "data": {
      //       "colormapReverse": false,
      //       "numOfBins": 72,
      //       "colormap": "portland"
      //     }
      //   },
      //   "label": "Counties",
      //   "shortlabel": "Counties",
      //   "boundingGEO": "state",
      //   "visible": true,
      //   "selected": true,
      //   "priority": 3,
      //   "stats": {
      //     "count": 4225,
      //     "sources": [
      //       {
      //         "name": "Decennial",
      //         "count": 173
      //       },
      //       {
      //         "name": "Decennial/ACS",
      //         "count": 95
      //       },
      //       {
      //         "name": "ACS",
      //         "count": 3339
      //       },
      //       {
      //         "name": "TIGER",
      //         "count": 3
      //       },
      //       {
      //         "name": "ACS, TIGER",
      //         "count": 7
      //       },
      //       {
      //         "name": "GA CACDS",
      //         "count": 72
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       },
      //       {
      //         "name": "LEHD, Origin-Destination Data",
      //         "count": 66
      //       },
      //       {
      //         "name": "Georgia Department of Public Health, OHIP (OASIS)",
      //         "count": 11
      //       },
      //       {
      //         "name": "ACS, Georgia Department of Public Health, OHIP (OASIS)",
      //         "count": 1
      //       },
      //       {
      //         "name": "Census 2020 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2010 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2000 Redistricting Summary Data File",
      //         "count": 35
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1",
      //         "count": 5
      //       },
      //       {
      //         "name": "Census 1990 Redistricting Summary Data File",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B",
      //         "count": 4
      //       },
      //       {
      //         "name": "Census 2010 and 2020 Redistricting Summary Data Files",
      //         "count": 42
      //       },
      //       {
      //         "name": "Census 2000 and 2020 Redistricting Summary Data Files",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1  and 2020 Redistricting Summary Data File",
      //         "count": 6
      //       },
      //       {
      //         "name": "Census 1990 and 2020 Redistricting Summary Data Files",
      //         "count": 37
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B  and 2020 Redistricting Summary Data File",
      //         "count": 5
      //       },
      //       {
      //         "name": "US Decennial Census, 2020",
      //         "count": 13
      //       },
      //       {
      //         "name": "US Decennial Census, 2010 & 2020 (in 2020 Census Geographies)",
      //         "count": 14
      //       },
      //       {
      //         "name": "US Decennial Census, 2010 (in 2020 Census Geographies)",
      //         "count": 13
      //       }
      //     ],
      //     "categories": [
      //       {
      //         "name": "Change since 2000",
      //         "count": 268
      //       },
      //       {
      //         "name": "Demographic",
      //         "count": 783
      //       },
      //       {
      //         "name": "Economic",
      //         "count": 1001
      //       },
      //       {
      //         "name": "Housing",
      //         "count": 582
      //       },
      //       {
      //         "name": "Social",
      //         "count": 930
      //       },
      //       {
      //         "name": "Change since 2010",
      //         "count": 404
      //       },
      //       {
      //         "name": "Early Childhood",
      //         "count": 72
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       },
      //       {
      //         "name": "Health",
      //         "count": 13
      //       },
      //       {
      //         "name": "Demographics",
      //         "count": 40
      //       }
      //     ]
      //   },
      //   "geoFieldManifest": {
      //     "GEOID": {
      //       "field": "GEOID",
      //       "type": "string",
      //       "alias": "GEOID"
      //     },
      //     "NAME": {
      //       "field": "NAME",
      //       "type": "string",
      //       "alias": "NAME"
      //     },
      //     "PlanningRegion": {
      //       "field": "PlanningRegion",
      //       "type": "string",
      //       "alias": "Planning Region"
      //     },
      //     "ARCModelingArea": {
      //       "field": "ARCModelingArea",
      //       "type": "string",
      //       "alias": "ARC Modeling Area"
      //     }
      //   }
      // },
      // "state": {
      //   "style": {
      //     "opacity": 0.8,
      //     "borderColor": "teal",
      //     "borderWidth": 3,
      //     "borderType": "solid",
      //     "fillColor": "teal",
      //     "data": {
      //       "colormapReverse": false,
      //       "numOfBins": 72,
      //       "colormap": "portland"
      //     }
      //   },
      //   "label": "State of Georgia",
      //   "shortlabel": "Georgia",
      //   "boundingGEO": "state",
      //   "visible": true,
      //   "selected": false,
      //   "priority": 1,
      //   "stats": {
      //     "count": 4225,
      //     "sources": [
      //       {
      //         "name": "Decennial",
      //         "count": 173
      //       },
      //       {
      //         "name": "Decennial/ACS",
      //         "count": 95
      //       },
      //       {
      //         "name": "ACS",
      //         "count": 3339
      //       },
      //       {
      //         "name": "TIGER",
      //         "count": 3
      //       },
      //       {
      //         "name": "ACS, TIGER",
      //         "count": 7
      //       },
      //       {
      //         "name": "GA CACDS",
      //         "count": 72
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       },
      //       {
      //         "name": "LEHD, Origin-Destination Data",
      //         "count": 66
      //       },
      //       {
      //         "name": "Georgia Department of Public Health, OHIP (OASIS)",
      //         "count": 11
      //       },
      //       {
      //         "name": "ACS, Georgia Department of Public Health, OHIP (OASIS)",
      //         "count": 1
      //       },
      //       {
      //         "name": "Census 2020 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2010 Redistricting Summary Data File",
      //         "count": 40
      //       },
      //       {
      //         "name": "Census 2000 Redistricting Summary Data File",
      //         "count": 35
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1",
      //         "count": 5
      //       },
      //       {
      //         "name": "Census 1990 Redistricting Summary Data File",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B",
      //         "count": 4
      //       },
      //       {
      //         "name": "Census 2010 and 2020 Redistricting Summary Data Files",
      //         "count": 42
      //       },
      //       {
      //         "name": "Census 2000 and 2020 Redistricting Summary Data Files",
      //         "count": 36
      //       },
      //       {
      //         "name": "Census 2000 Summary File 1  and 2020 Redistricting Summary Data File",
      //         "count": 6
      //       },
      //       {
      //         "name": "Census 1990 and 2020 Redistricting Summary Data Files",
      //         "count": 37
      //       },
      //       {
      //         "name": "Census 1990 Summary Tape File 1B  and 2020 Redistricting Summary Data File",
      //         "count": 5
      //       },
      //       {
      //         "name": "US Decennial Census, 2020",
      //         "count": 13
      //       },
      //       {
      //         "name": "US Decennial Census, 2010 & 2020 (in 2020 Census Geographies)",
      //         "count": 14
      //       },
      //       {
      //         "name": "US Decennial Census, 2010 (in 2020 Census Geographies)",
      //         "count": 13
      //       }
      //     ],
      //     "categories": [
      //       {
      //         "name": "Change since 2000",
      //         "count": 268
      //       },
      //       {
      //         "name": "Demographic",
      //         "count": 783
      //       },
      //       {
      //         "name": "Economic",
      //         "count": 1001
      //       },
      //       {
      //         "name": "Housing",
      //         "count": 582
      //       },
      //       {
      //         "name": "Social",
      //         "count": 930
      //       },
      //       {
      //         "name": "Change since 2010",
      //         "count": 404
      //       },
      //       {
      //         "name": "Early Childhood",
      //         "count": 72
      //       },
      //       {
      //         "name": "LEHD Origin-Destination Data",
      //         "count": 132
      //       },
      //       {
      //         "name": "Health",
      //         "count": 13
      //       },
      //       {
      //         "name": "Demographics",
      //         "count": 40
      //       }
      //     ]
      //   }
      // },
      "cities": {
        "style": {
          "opacity": 0.7,
          "borderColor": "blue",
          "borderWidth": 1,
          "borderType": "solid",
          "fillColor": "blue",
          "data": {
            "colormapReverse": false,
            "numOfBins": 72,
            "colormap": "portland"
          }
        },
        "label": "Cities",
        "shortlabel": "Cities",
        "boundingGEO": "state",
        "visible": true,
        "selected": false,
        "priority": 4,
        "stats": {
          "count": 4140,
          "sources": [
            {
              "name": "Decennial",
              "count": 173
            },
            {
              "name": "Decennial/ACS",
              "count": 95
            },
            {
              "name": "ACS",
              "count": 3338
            },
            {
              "name": "TIGER",
              "count": 3
            },
            {
              "name": "ACS, TIGER",
              "count": 7
            },
            {
              "name": "LEHD Origin-Destination Data",
              "count": 132
            },
            {
              "name": "LEHD, Origin-Destination Data",
              "count": 66
            },
            {
              "name": "Census 2020 Redistricting Summary Data File",
              "count": 40
            },
            {
              "name": "Census 2010 Redistricting Summary Data File",
              "count": 40
            },
            {
              "name": "Census 2000 Redistricting Summary Data File",
              "count": 35
            },
            {
              "name": "Census 2000 Summary File 1",
              "count": 5
            },
            {
              "name": "Census 1990 Redistricting Summary Data File",
              "count": 36
            },
            {
              "name": "Census 1990 Summary Tape File 1B",
              "count": 4
            },
            {
              "name": "Census 2010 and 2020 Redistricting Summary Data Files",
              "count": 42
            },
            {
              "name": "Census 2000 and 2020 Redistricting Summary Data Files",
              "count": 36
            },
            {
              "name": "Census 2000 Summary File 1  and 2020 Redistricting Summary Data File",
              "count": 6
            },
            {
              "name": "Census 1990 and 2020 Redistricting Summary Data Files",
              "count": 37
            },
            {
              "name": "Census 1990 Summary Tape File 1B  and 2020 Redistricting Summary Data File",
              "count": 5
            },
            {
              "name": "US Decennial Census, 2020",
              "count": 13
            },
            {
              "name": "US Decennial Census, 2010 & 2020 (in 2020 Census Geographies)",
              "count": 14
            },
            {
              "name": "US Decennial Census, 2010 (in 2020 Census Geographies)",
              "count": 13
            }
          ],
          "categories": [
            {
              "name": "Change since 2000",
              "count": 268
            },
            {
              "name": "Demographic",
              "count": 783
            },
            {
              "name": "Economic",
              "count": 1001
            },
            {
              "name": "Housing",
              "count": 582
            },
            {
              "name": "Social",
              "count": 930
            },
            {
              "name": "Change since 2010",
              "count": 404
            },
            {
              "name": "LEHD Origin-Destination Data",
              "count": 132
            },
            {
              "name": "Demographics",
              "count": 40
            }
          ]
        },
        "geoFieldManifest": {
          "GEOID": {
            "field": "GEOID",
            "type": "string",
            "alias": "GEOID"
          },
          "NAME": {
            "field": "NAME",
            "type": "string",
            "alias": "NAME"
          },
          "PlanningRegion": {
            "field": "PlanningRegion",
            "type": "string",
            "alias": "Planning Region"
          }
        }
      },
      "ga-elem-schools-2019": {
        "style": {
          "opacity": 0.8,
          "borderColor": "black",
          "borderWidth": 1,
          "borderType": "solid",
          "fillColor": "teal",
          "pointRadius": 8,
          "data": {
            "colormapReverse": false,
            "numOfBins": 72,
            "colormap": "portland"
          }
        },
        "label": "Elementary Schools, SY2019",
        "shortlabel": "Elementary Schools SY2019",
        "boundingGEO": "state",
        "visible": true,
        "selected": false,
        "priority": 1,
        "stats": {
          "count": 98,
          "sources": [
            {
              "name": "Georgia Department of Education (DOE)",
              "count": 98
            }
          ],
          "categories": [
            {
              "name": "Georgia School Data",
              "count": 98
            }
          ]
        }
      },
      "ga-middle-schools-2019": {
        "style": {
          "opacity": 0.8,
          "borderColor": "black",
          "borderWidth": 1,
          "borderType": "solid",
          "fillColor": "teal",
          "pointRadius": 8,
          "data": {
            "colormapReverse": false,
            "numOfBins": 72,
            "colormap": "portland"
          }
        },
        "label": "Middle Schools, SY2019",
        "shortlabel": "Middle Schools SY2019",
        "boundingGEO": "state",
        "visible": true,
        "selected": false,
        "priority": 1,
        "stats": {
          "count": 70,
          "sources": [
            {
              "name": "Georgia Department of Education (DOE)",
              "count": 70
            }
          ],
          "categories": [
            {
              "name": "Georgia School Data",
              "count": 70
            }
          ]
        }
      },
      "ga-high-schools-2019": {
        "style": {
          "opacity": 0.8,
          "borderColor": "black",
          "borderWidth": 1,
          "borderType": "solid",
          "fillColor": "teal",
          "pointRadius": 8,
          "data": {
            "colormapReverse": false,
            "numOfBins": 72,
            "colormap": "portland"
          }
        },
        "label": "High Schools, SY2019",
        "shortlabel": "High Schools SY2019",
        "boundingGEO": "state",
        "visible": true,
        "selected": false,
        "priority": 1,
        "stats": {
          "count": 187,
          "sources": [
            {
              "name": "Georgia Department of Education (DOE)",
              "count": 187
            }
          ],
          "categories": [
            {
              "name": "Georgia School Data",
              "count": 187
            }
          ]
        }
      },
      "library": {
        "style": {
          "opacity": 0.8,
          "borderColor": "black",
          "borderWidth": 1,
          "borderType": "solid",
          "fillColor": "red",
          "pointRadius": 6,
          "data": {
            "colormapReverse": false,
            "numOfBins": 72,
            "colormap": "portland"
          }
        },
        "label": "Libraries (10-County)",
        "shortlabel": "Libraries",
        "boundingGEO": "state",
        "visible": true,
        "selected": false,
        "priority": 1,
        "stats": {
          "count": 0,
          "sources": [],
          "categories": []
        }
      },
      "greenspace": {
        "style": {
          "opacity": 0.8,
          "borderColor": "green",
          "borderWidth": 3,
          "borderType": "solid",
          "fillColor": "green",
          "data": {
            "colormapReverse": false,
            "numOfBins": 72,
            "colormap": "portland"
          }
        },
        "label": "Greenspace",
        "shortlabel": "Greenspace",
        "boundingGEO": "Atlanta",
        "visible": true,
        "selected": false,
        "priority": 12,
        "stats": {
          "count": 0,
          "sources": [],
          "categories": []
        }
      }
    },
    "tutorials": [
      {
        "title": "Getting Started",
        "description": "In this brief tutorial you will learn how to add layers, add data to layers, visualize that data on a map, and then share the results.",
        "url": "https://www.youtube.com/embed/tAKfUVb0F70/"
      },
      {
        "title": "Customizing Your Maps",
        "description": "In this tutorial, you will learn how to customize how your map looks.",
        "url": "https://www.youtube.com/embed/FE3YhMY6su4"
      }
    ],
    "splash": {
        "header": {
          "main": ""
      },
      // "body": [
      //   {
      //     "title": "Why are you here?",
      //     "text": [
      //       "This tool will help you change the world!",
      //       "If it doesn't there, then we're sorry."
      //     ],
      //     "image": {
      //       "url": "https://via.placeholder.com/480x300",
      //       "caption": "This an image caption"
      //     }
      //   }
      // ],
      "bodyContent": [
        {
          "type": "text-block",
          "style": {
            "fontSize": "1em",
            "width": "100%",
            "textAlign": "center"
          },
          "content": "Welcome to"
        },
        {
          "type": "text-block",
          "style": {
            "fontSize": "3em",
            "color": "#22225e",
            "fontWeight": "700",
            "width": "100%",
            "textAlign": "center"
          },
          "content": "Atlanta's"
        },
        {
          "type": "text-block",
          "style": {
            "fontSize": "2.5em",
            "color": "#22225e",
            "fontWeight": "700",
            "width": "100%",
            "textAlign": "center"
          },
          "content": "City Data Tool"
        },
        {
          "type": "text-block",
          "style": {
            "fontSize": "1.2em",
            "width": "100%",
            "lineHeight": "1.2em",
            "textAlign": "left"
          },
          "content": "Our latest, most powerful tool to find, visualize, analyze, and export community data."
        },
        {
          "type": "text-block",
          "style": {
            "fontSize": "1.2em",
            "width": "100%",
            "lineHeight": "1.2em",
            "textAlign": "left"
          },
          "content": "Hundreds of easy-to-find demographic, education, health, and economic indicators from local, state, and national sources, all in one place, as well as the ability to upload and visualize your own data!"
        },
        {
          "type": "text-block",
          "style": {
            "fontSize": "1.2em",
            "width": "100%",
            "lineHeight": "1.2em",
            "textAlign": "left"
          },
          "content": "Explore neighborhoods, census tracts, zip codes, schools, and more."
        },
        {
          "type": "text-block",
          "style": {
            "fontSize": "1.2em",
            "width": "100%",
            "lineHeight": "1.2em",
            "textAlign": "left"
          },
          "content": "Data sources currently accessible via this tool are:"
        },
        {
          "type": "text-list",
          "style": {
            "fontSize": "1em",
            "lineHeight": "1.2em",
            "borderRadius": "5px"
          },
          "content": [
            "US Census Bureau's Decennial Census (1990, 2000, 2010, & 2020)",
            "US Census Bureau's American Community Survey (ACS), 5-year estimates (2017 to 2019)",
            "US Census Bureau's Longitudinal Employer-Household Dynamics (LEHD) Origin-Destination Data (2010, 2017, 2018, & 2019)",
            "GA Department of Public Health (DPH) Maternal and Child Health Statistics (2004 to 2019)",
            "GA Department of Educution (DOE) Student- and School-level Statistics (2018-19 School Year)",
            "Georgia's Cross-Agency Child Data System (CACDS) Data (2017-2020) "
          ]
        },
        {
          "type": "text-block",
          "style": {
            "fontSize": "1em",
            "width": "100%",
            "textAlign": "center",
            "marginBottom": "0px"
          },
          "content": "Powered by"
        },
        {
          "type": "image",
          "style": {
            "width": "200px"
          },
          "content": {
            "url": "https://neighborhoodnexus.org/wp-content/uploads/2016/04/neighborhood-nexus-logo.png",
            "alt": "Neighborhood Nexus Logo"
          }
        }
      ],
      "style": {
        "backgroundImageUrl": "https://neighborhoodnexus.org/wp-content/uploads/2020/06/data-nexus-bg-6.png"
      }
    },
    "charts": {
      "scatterplot": {
        "semanticIcon": null,
        "materialIcon": "scatter_plot",
        "xaxis": true,
        "yaxis": true,
        "selected": false,
        "available": true
      }
    },
    "table": {
      "open": false
    },
    "layerlist": {
      "open": true
    },
    "sourceManifest": {
      "ACS": "US Census Bureau's American Community Survey (ACS), 5-year estimates",
      "TIGER": "US Census Bureau's TIGER/Line",
      "Decennial": " US Census Bureau's Decennial Census",
      "ACS, TIGER": "US Census Bureau's American Community Survey (ACS) & TIGER/Line",
      "Decennial/ACS": "US Census Bureau's American Community Survey (ACS), 5-year estimates & Decennial Census",
      "LEHD Origin-Destination Data": " U.S. Census Bureau's Longitudinal Employer-Household Dynamics (LEHD) Origin-Destination Data",
      "Georgia Department of Education (DOE)": "Georgia Department of Education (GA DOE)",
      "Georgia Department of Education (GA DOE)": "Georgia Department of Education (GA DOE)",
      "Georgia Department of Public Health (DPH)": "Georgia Department of Public Health (GA DPH) OASIS",
      "GA CACDS": "Georgia's Cross-Agency Child Data System (CACDS)",
      "LEHD, Origin-Destination Data": " U.S. Census Bureau's Longitudinal Employer-Household Dynamics (LEHD) Origin-Destination Data",
      "Georgia Department of Public Health, OHIP (OASIS)": "Georgia Department of Public Health (GA DPH), OASIS",
      "DOE": "Georgia Department of Education (GA DOE)",
      "DPH OASIS": "Georgia Department of Public Health (GA DPH) OASIS",
      "CACDS": "Georgia's Cross-Agency Child Data System (CACDS)",
      "USDA": "US Department of Agriculture (USDA)",
      "ACS, Georgia Department of Public Health, OHIP (OASIS)": "US Census Bureau's American Community Survey (ACS), 5-year estimates & Georgia Department of Public Health (GA DPH), OASIS",
      "CACDS, Decennial Census": "Georgia's Cross-Agency Child Data System (CACDS) & US Census Bureau's Decennial Census",
      "CDC": "Center for Disease Control (CDC)",
      "US Decennial Census, 2020": "US Census Bureau's Decennial Census",
      "US Decennial Census, 2010 & 2020 (in 2020 Census Geographies)": "US Census Bureau's Decennial Census",
      "US Decennial Census, 2010 (in 2020 Census Geographies)": "US Census Bureau's Decennial Census",
      "Census 2020 Redistricting Summary Data File": "US Census Bureau's Decennial Census",
      "Census 2010 Redistricting Summary Data File": "US Census Bureau's Decennial Census",
      "Census 2000 Redistricting Summary Data File": "US Census Bureau's Decennial Census",
      "Census 2000 Summary File 1": "US Census Bureau's Decennial Census",
      "Census 1990 Redistricting Summary Data File": "US Census Bureau's Decennial Census",
      "Census 1990 Summary Tape File 1B": "US Census Bureau's Decennial Census",
      "Census 2010 and 2020 Redistricting Summary Data Files": "US Census Bureau's Decennial Census",
      "Census 2000 and 2020 Redistricting Summary Data Files": "US Census Bureau's Decennial Census",
      "Census 2000 Summary File 1  and 2020 Redistricting Summary Data File": "US Census Bureau's Decennial Census",
      "Census 1990 and 2020 Redistricting Summary Data Files": "US Census Bureau's Decennial Census",
      "Census 1990 Summary Tape File 1B  and 2020 Redistricting Summary Data File": "US Census Bureau's Decennial Census"
    }
  }
}]