import parse_CLDR from '../source/cldr'
import { short as english_short, long as english_long } from '../locale/en'

describe(`CLDR`, function()
{
	it(`should parse Unicode CLDR locale data`, function()
	{
		parse_CLDR(english_CLDR).should.deep.equal(english_CLDR_converted)
	})
})

const english_CLDR_converted =
{
  "long": {
    "year": {
      "past": {
        "one": "{0} year ago",
        "other": "{0} years ago"
      },
      "future": {
        "one": "in {0} year",
        "other": "in {0} years"
      }
    },
    "month": {
      "past": {
        "one": "{0} month ago",
        "other": "{0} months ago"
      },
      "future": {
        "one": "in {0} month",
        "other": "in {0} months"
      }
    },
    "week": {
      "past": {
        "one": "{0} week ago",
        "other": "{0} weeks ago"
      },
      "future": {
        "one": "in {0} week",
        "other": "in {0} weeks"
      }
    },
    "day": {
      "past": {
        "one": "{0} day ago",
        "other": "{0} days ago"
      },
      "future": {
        "one": "in {0} day",
        "other": "in {0} days"
      }
    },
    "hour": {
      "past": {
        "one": "{0} hour ago",
        "other": "{0} hours ago"
      },
      "future": {
        "one": "in {0} hour",
        "other": "in {0} hours"
      }
    },
    "minute": {
      "past": {
        "one": "{0} minute ago",
        "other": "{0} minutes ago"
      },
      "future": {
        "one": "in {0} minute",
        "other": "in {0} minutes"
      }
    },
    "quarter": {
      "future": {
        "one": "in {0} quarter",
        "other": "in {0} quarters"
      },
      "past": {
        "one": "{0} quarter ago",
        "other": "{0} quarters ago"
      }
    },
    "second": {
      "past": {
        "one": "{0} second ago",
        "other": "{0} seconds ago"
      },
      "future": {
        "one": "in {0} second",
        "other": "in {0} seconds"
      }
    },
    "now": {
      "past": {
        "other": "now"
      },
      "future": {
        "other": "now"
      }
    }
  },
  "short": {
    "year": {
      "past": {
        "one": "{0} yr. ago",
        "other": "{0} yr. ago"
      },
      "future": {
        "one": "in {0} yr.",
        "other": "in {0} yr."
      }
    },
    "month": {
      "past": {
        "one": "{0} mo. ago",
        "other": "{0} mo. ago"
      },
      "future": {
        "one": "in {0} mo.",
        "other": "in {0} mo."
      }
    },
    "week": {
      "past": {
        "one": "{0} wk. ago",
        "other": "{0} wk. ago"
      },
      "future": {
        "one": "in {0} wk.",
        "other": "in {0} wk."
      }
    },
    "day": {
      "past": {
        "one": "{0} day ago",
        "other": "{0} days ago"
      },
      "future": {
        "one": "in {0} day",
        "other": "in {0} days"
      }
    },
    "hour": {
      "past": {
        "one": "{0} hr. ago",
        "other": "{0} hr. ago"
      },
      "future": {
        "one": "in {0} hr.",
        "other": "in {0} hr."
      }
    },
    "minute": {
      "past": {
        "one": "{0} min. ago",
        "other": "{0} min. ago"
      },
      "future": {
        "one": "in {0} min.",
        "other": "in {0} min."
      }
    },
    "quarter": {
      "future": {
        "one": "in {0} qtr.",
        "other": "in {0} qtrs."
      },
      "past": {
        "one": "{0} qtr. ago",
        "other": "{0} qtrs. ago"
      }
    },
    "second": {
      "past": {
        "one": "{0} sec. ago",
        "other": "{0} sec. ago"
      },
      "future": {
        "one": "in {0} sec.",
        "other": "in {0} sec."
      }
    },
    "now": {
      "past": {
        "other": "now"
      },
      "future": {
        "other": "now"
      }
    }
  },
  "narrow": {
    "day": {
      "future": {
        "one": "in {0} days",
        "other": "in {0} days"
      },
      "past": {
        "one": "{0} days ago",
        "other": "{0} days ago"
      }
    },
    "hour": {
      "future": {
        "one": "in {0} hr.",
        "other": "in {0} hr."
      },
      "past": {
        "one": "{0} hr. ago",
        "other": "{0} hr. ago"
      }
    },
    "minute": {
      "future": {
        "one": "in {0} min.",
        "other": "in {0} min."
      },
      "past": {
        "one": "{0} min. ago",
        "other": "{0} min. ago"
      }
    },
    "month": {
      "future": {
        "one": "in {0} mo.",
        "other": "in {0} mo."
      },
      "past": {
        "one": "{0} mo. ago",
        "other": "{0} mo. ago"
      }
    },
    "quarter": {
      "future": {
        "one": "in {0} qtrs.",
        "other": "in {0} qtrs."
      },
      "past": {
        "one": "{0} qtrs. ago",
        "other": "{0} qtrs. ago"
      }
    },
    "second": {
      "future": {
        "one": "in {0} sec.",
        "other": "in {0} sec."
      },
      "past": {
        "one": "{0} sec. ago",
        "other": "{0} sec. ago"
      }
    },
    "week": {
      "future": {
        "one": "in {0} wk.",
        "other": "in {0} wk."
      },
      "past": {
        "one": "{0} wk. ago",
        "other": "{0} wk. ago"
      }
    },
    "year": {
      "future": {
        "one": "in {0} yr.",
        "other": "in {0} yr."
      },
      "past": {
        "one": "{0} yr. ago",
        "other": "{0} yr. ago"
      }
    }
  }
}

const english_CLDR =
{
  "main": {
    "en-US-POSIX": {
      "identity": {
        "version": {
          "_number": "$Revision: 11914 $",
          "_cldrVersion": "29"
        },
        "language": "en",
        "territory": "US",
        "variant": "POSIX"
      },
      "dates": {
        "fields": {
          "era": {
            "displayName": "era"
          },
          "year": {
            "displayName": "year",
            "relative-type--1": "last year",
            "relative-type-0": "this year",
            "relative-type-1": "next year",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} year",
              "relativeTimePattern-count-other": "in {0} years"
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} year ago",
              "relativeTimePattern-count-other": "{0} years ago"
            }
          },
          "year-short": {
            "displayName": "yr.",
            "relative-type--1": "last yr.",
            "relative-type-0": "this yr.",
            "relative-type-1": "next yr.",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} yr.",
              "relativeTimePattern-count-other": "in {0} yr."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} yr. ago",
              "relativeTimePattern-count-other": "{0} yr. ago"
            }
          },
          "year-narrow": {
            "displayName": "yr.",
            "relative-type--1": "last yr.",
            "relative-type-0": "this yr.",
            "relative-type-1": "next yr.",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} yr.",
              "relativeTimePattern-count-other": "in {0} yr."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} yr. ago",
              "relativeTimePattern-count-other": "{0} yr. ago"
            }
          },
          "quarter": {
            "displayName": "quarter",
            "relative-type--1": "last quarter",
            "relative-type-0": "this quarter",
            "relative-type-1": "next quarter",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} quarter",
              "relativeTimePattern-count-other": "in {0} quarters"
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} quarter ago",
              "relativeTimePattern-count-other": "{0} quarters ago"
            }
          },
          "quarter-short": {
            "displayName": "qtr.",
            "relative-type--1": "last qtr.",
            "relative-type-0": "this qtr.",
            "relative-type-1": "next qtr.",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} qtr.",
              "relativeTimePattern-count-other": "in {0} qtrs."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} qtr. ago",
              "relativeTimePattern-count-other": "{0} qtrs. ago"
            }
          },
          "quarter-narrow": {
            "displayName": "qtr.",
            "relative-type--1": "last qtr.",
            "relative-type-0": "this qtr.",
            "relative-type-1": "next qtr.",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} qtrs.",
              "relativeTimePattern-count-other": "in {0} qtrs."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} qtrs. ago",
              "relativeTimePattern-count-other": "{0} qtrs. ago"
            }
          },
          "month": {
            "displayName": "month",
            "relative-type--1": "last month",
            "relative-type-0": "this month",
            "relative-type-1": "next month",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} month",
              "relativeTimePattern-count-other": "in {0} months"
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} month ago",
              "relativeTimePattern-count-other": "{0} months ago"
            }
          },
          "month-short": {
            "displayName": "mo.",
            "relative-type--1": "last mo.",
            "relative-type-0": "this mo.",
            "relative-type-1": "next mo.",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} mo.",
              "relativeTimePattern-count-other": "in {0} mo."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} mo. ago",
              "relativeTimePattern-count-other": "{0} mo. ago"
            }
          },
          "month-narrow": {
            "displayName": "mo.",
            "relative-type--1": "last mo.",
            "relative-type-0": "this mo.",
            "relative-type-1": "next mo.",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} mo.",
              "relativeTimePattern-count-other": "in {0} mo."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} mo. ago",
              "relativeTimePattern-count-other": "{0} mo. ago"
            }
          },
          "week": {
            "displayName": "week",
            "relative-type--1": "last week",
            "relative-type-0": "this week",
            "relative-type-1": "next week",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} week",
              "relativeTimePattern-count-other": "in {0} weeks"
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} week ago",
              "relativeTimePattern-count-other": "{0} weeks ago"
            }
          },
          "week-short": {
            "displayName": "wk.",
            "relative-type--1": "last wk.",
            "relative-type-0": "this wk.",
            "relative-type-1": "next wk.",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} wk.",
              "relativeTimePattern-count-other": "in {0} wk."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} wk. ago",
              "relativeTimePattern-count-other": "{0} wk. ago"
            }
          },
          "week-narrow": {
            "displayName": "wk.",
            "relative-type--1": "last wk.",
            "relative-type-0": "this wk.",
            "relative-type-1": "next wk.",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} wk.",
              "relativeTimePattern-count-other": "in {0} wk."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} wk. ago",
              "relativeTimePattern-count-other": "{0} wk. ago"
            }
          },
          "day": {
            "displayName": "day",
            "relative-type--1": "yesterday",
            "relative-type-0": "today",
            "relative-type-1": "tomorrow",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} day",
              "relativeTimePattern-count-other": "in {0} days"
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} day ago",
              "relativeTimePattern-count-other": "{0} days ago"
            }
          },
          "day-short": {
            "displayName": "day",
            "relative-type--1": "yesterday",
            "relative-type-0": "today",
            "relative-type-1": "tomorrow",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} day",
              "relativeTimePattern-count-other": "in {0} days"
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} day ago",
              "relativeTimePattern-count-other": "{0} days ago"
            }
          },
          "day-narrow": {
            "displayName": "day",
            "relative-type--1": "yesterday",
            "relative-type-0": "today",
            "relative-type-1": "tomorrow",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} days",
              "relativeTimePattern-count-other": "in {0} days"
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} days ago",
              "relativeTimePattern-count-other": "{0} days ago"
            }
          },
          "weekday": {
            "displayName": "day of the week"
          },
          "sun": {
            "relative-type--1": "last Sunday",
            "relative-type-0": "this Sunday",
            "relative-type-1": "next Sunday"
          },
          "sun-short": {
            "relative-type--1": "last Sun.",
            "relative-type-0": "this Sun.",
            "relative-type-1": "next Sun."
          },
          "sun-narrow": {
            "relative-type--1": "last Su",
            "relative-type-0": "this Su",
            "relative-type-1": "next Su"
          },
          "mon": {
            "relative-type--1": "last Monday",
            "relative-type-0": "this Monday",
            "relative-type-1": "next Monday"
          },
          "mon-short": {
            "relative-type--1": "last Mon.",
            "relative-type-0": "this Mon.",
            "relative-type-1": "next Mon."
          },
          "mon-narrow": {
            "relative-type--1": "last M",
            "relative-type-0": "this M",
            "relative-type-1": "next M"
          },
          "tue": {
            "relative-type--1": "last Tuesday",
            "relative-type-0": "this Tuesday",
            "relative-type-1": "next Tuesday"
          },
          "tue-short": {
            "relative-type--1": "last Tue.",
            "relative-type-0": "this Tue.",
            "relative-type-1": "next Tue."
          },
          "tue-narrow": {
            "relative-type--1": "last Tu",
            "relative-type-0": "this Tu",
            "relative-type-1": "next Tu"
          },
          "wed": {
            "relative-type--1": "last Wednesday",
            "relative-type-0": "this Wednesday",
            "relative-type-1": "next Wednesday"
          },
          "wed-short": {
            "relative-type--1": "last Wed.",
            "relative-type-0": "this Wed.",
            "relative-type-1": "next Wed."
          },
          "wed-narrow": {
            "relative-type--1": "last W",
            "relative-type-0": "this W",
            "relative-type-1": "next W"
          },
          "thu": {
            "relative-type--1": "last Thursday",
            "relative-type-0": "this Thursday",
            "relative-type-1": "next Thursday"
          },
          "thu-short": {
            "relative-type--1": "last Thu.",
            "relative-type-0": "this Thu.",
            "relative-type-1": "next Thu."
          },
          "thu-narrow": {
            "relative-type--1": "last Th",
            "relative-type-0": "this Th",
            "relative-type-1": "next Th"
          },
          "fri": {
            "relative-type--1": "last Friday",
            "relative-type-0": "this Friday",
            "relative-type-1": "next Friday"
          },
          "fri-short": {
            "relative-type--1": "last Fri.",
            "relative-type-0": "this Fri.",
            "relative-type-1": "next Fri."
          },
          "fri-narrow": {
            "relative-type--1": "last F",
            "relative-type-0": "this F",
            "relative-type-1": "next F"
          },
          "sat": {
            "relative-type--1": "last Saturday",
            "relative-type-0": "this Saturday",
            "relative-type-1": "next Saturday"
          },
          "sat-short": {
            "relative-type--1": "last Sat.",
            "relative-type-0": "this Sat.",
            "relative-type-1": "next Sat."
          },
          "sat-narrow": {
            "relative-type--1": "last Sa",
            "relative-type-0": "this Sa",
            "relative-type-1": "next Sa"
          },
          "dayperiod": {
            "displayName": "AM/PM",
            "displayName-alt-variant": "am/pm"
          },
          "hour": {
            "displayName": "hour",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} hour",
              "relativeTimePattern-count-other": "in {0} hours"
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} hour ago",
              "relativeTimePattern-count-other": "{0} hours ago"
            }
          },
          "hour-short": {
            "displayName": "hr.",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} hr.",
              "relativeTimePattern-count-other": "in {0} hr."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} hr. ago",
              "relativeTimePattern-count-other": "{0} hr. ago"
            }
          },
          "hour-narrow": {
            "displayName": "hr.",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} hr.",
              "relativeTimePattern-count-other": "in {0} hr."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} hr. ago",
              "relativeTimePattern-count-other": "{0} hr. ago"
            }
          },
          "minute": {
            "displayName": "minute",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} minute",
              "relativeTimePattern-count-other": "in {0} minutes"
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} minute ago",
              "relativeTimePattern-count-other": "{0} minutes ago"
            }
          },
          "minute-short": {
            "displayName": "min.",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} min.",
              "relativeTimePattern-count-other": "in {0} min."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} min. ago",
              "relativeTimePattern-count-other": "{0} min. ago"
            }
          },
          "minute-narrow": {
            "displayName": "min.",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} min.",
              "relativeTimePattern-count-other": "in {0} min."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} min. ago",
              "relativeTimePattern-count-other": "{0} min. ago"
            }
          },
          "second": {
            "displayName": "second",
            "relative-type-0": "now",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} second",
              "relativeTimePattern-count-other": "in {0} seconds"
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} second ago",
              "relativeTimePattern-count-other": "{0} seconds ago"
            }
          },
          "second-short": {
            "displayName": "sec.",
            "relative-type-0": "now",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} sec.",
              "relativeTimePattern-count-other": "in {0} sec."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} sec. ago",
              "relativeTimePattern-count-other": "{0} sec. ago"
            }
          },
          "second-narrow": {
            "displayName": "sec.",
            "relative-type-0": "now",
            "relativeTime-type-future": {
              "relativeTimePattern-count-one": "in {0} sec.",
              "relativeTimePattern-count-other": "in {0} sec."
            },
            "relativeTime-type-past": {
              "relativeTimePattern-count-one": "{0} sec. ago",
              "relativeTimePattern-count-other": "{0} sec. ago"
            }
          },
          "zone": {
            "displayName": "time zone"
          }
        }
      }
    }
  }
}