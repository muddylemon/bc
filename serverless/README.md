Bitcap API
==========================
An api of cryptocurrency information

URL: https://api.bitcap.com/v1/

Methods
----

### price/
GET list of current prices for all coins

#### price/{COIN_NAME}
Get the current price of that coin

#### price/{COIN_NAME}/history
Get the price each day for this coin, by default the last 30 days

- from={DATE}
- to={DATE}
- granularity={hourly,daily,weekly,monthly}

### headlines/
News feed of bitcoin related news and events

BETA
----


### exchange/
Info about exchange

### coin/{COIN_NAME}
Info about coin
