# node-base
<div align=center>

[![Build Status](https://travis-ci.com/knoteHOW/node-base.svg?branch=main)](https://travis-ci.com/knoteHOW/node-base)

</div>

## Getting Started

### Docker
```
$ docker build -t knotehow/node-base .
$ docker run knotehow/node-base
```

### Local
```
$ npm install
$ npm run test
$ npm run start
```

## Directory
```
react-base
├── .env
├── README.md     
├── test
│   └── test.js       // test 코드
└── src
    ├── config        // dev, prod 별 세팅값
    ├── controllers   // route 별 controller
    ├── middlewares   // route 별 middleware
    ├── models        // DB 스키마
    ├── routes        // routing
    ├── services      // 특정 기능 (passport, ...)
    └── index.js      // Entry point
```