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

# cordova-plugin-android-env-tools

From the Command line:

    cordova plugin add cordova-plugin-android-env-tools


## From 
以下の4本をまとめています。
### cordova-plugin-android-notification-manager
https://git.scat.su/external/cordova-plugin-android-notification-manager

### cordova-plugin-env
https://github.com/adapt-it/cordova-env

### cordova-plugin-mediascanner
https://github.com/begrossi/MediaScannerPlugin

### cordova-plugin-android-permissions
https://github.com/NeoLSN/cordova-plugin-android-permissions



## 修正点　　

 - 呼ぶ時に、cordova.plugins.androidxxxに統一
 - 共通index.d.tsの追加により、typescriptの問題解消
 - permissionsのオブジェクト名を変更して、システムのコンフリクトを解消



## index.d.tsの作成について　　

新たな修正が発生また新たな機能を導入するとき、以下の手順でコマンドを実行して、
作成されたtypes/xxxx.d.tsの内容により、index.d.tsを修正

 - npm install 
 - npx tsc

