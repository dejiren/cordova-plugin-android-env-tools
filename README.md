<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->

# cordova-plugin-env

| Download Activity | Travis CI | Snyk |
|:-:|:-:|:-:|
| [![npm](https://img.shields.io/npm/dm/cordova-plugin-env.svg)](https://www.npmjs.com/package/cordova-plugin-env) | [![Build Status](https://travis-ci.org/adapt-it/cordova-env.svg?branch=master)](https://travis-ci.org/adapt-it/cordova-env) | [![Known Vulnerabilities](https://snyk.io/test/github/adapt-it/cordova-env/badge.svg)](https://snyk.io/test/github/adapt-it/cordova-env) |

A small Cordova plugin that exposes Android's Environment object directories.

This plugin defines a global `Environment` object, which provides access to the common directories available on Android's Environment object. The `Environment` object is available from the `navigator` object after the `deviceready` event fires.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.Env);
    }

## Installation

From the Command line:

    cordova plugin add cordova-plugin-env

Config.xml for PhoneGap Build:

    <gap:plugin name="cordova-plugin-env" source="npm" />
    
These commands will install the plugin from npm. You can find this plugin up on npm [here](https://www.npmjs.com/package/cordova-plugin-env), or by searching for `ecosystem:cordova` in the npm registry like [this](https://www.npmjs.com/search?q=ecosystem%3Acordova). 


## Supported Platform

- Android

# Env

The `Env` object provides a way to access the directories exposed by the Environment object.

