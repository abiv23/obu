(self.webpackChunkobu_interactive=self.webpackChunkobu_interactive||[]).push([[712],{"./node_modules/deepmerge/dist/cjs.js":module=>{"use strict";var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/load-script/index.js":module=>{function stdOnEnd(script,cb){script.onload=function(){this.onerror=this.onload=null,cb(null,script)},script.onerror=function(){this.onerror=this.onload=null,cb(new Error("Failed to load "+this.src),script)}}function ieOnEnd(script,cb){script.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,cb(null,script))}}module.exports=function load(src,opts,cb){var head=document.head||document.getElementsByTagName("head")[0],script=document.createElement("script");"function"==typeof opts&&(cb=opts,opts={}),opts=opts||{},cb=cb||function(){},script.type=opts.type||"text/javascript",script.charset=opts.charset||"utf8",script.async=!("async"in opts)||!!opts.async,script.src=src,opts.attrs&&function setAttributes(script,attrs){for(var attr in attrs)script.setAttribute(attr,attrs[attr])}(script,opts.attrs),opts.text&&(script.text=""+opts.text),("onload"in script?stdOnEnd:ieOnEnd)(script,cb),script.onload||stdOnEnd(script,cb),head.appendChild(script)}},"./node_modules/memoize-one/dist/memoize-one.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var safeIsNaN=Number.isNaN||function ponyfill(value){return"number"==typeof value&&value!=value};function areInputsEqual(newInputs,lastInputs){if(newInputs.length!==lastInputs.length)return!1;for(var i=0;i<newInputs.length;i++)if(first=newInputs[i],second=lastInputs[i],!(first===second||safeIsNaN(first)&&safeIsNaN(second)))return!1;var first,second;return!0}const __WEBPACK_DEFAULT_EXPORT__=function memoizeOne(resultFn,isEqual){var lastThis;void 0===isEqual&&(isEqual=areInputsEqual);var lastResult,lastArgs=[],calledOnce=!1;return function memoized(){for(var newArgs=[],_i=0;_i<arguments.length;_i++)newArgs[_i]=arguments[_i];return calledOnce&&lastThis===this&&isEqual(newArgs,lastArgs)||(lastResult=resultFn.apply(this,newArgs),calledOnce=!0,lastThis=this,lastArgs=newArgs),lastResult}}},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/react-fast-compare/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var console=__webpack_require__("./node_modules/console-browserify/index.js"),hasElementType="undefined"!=typeof Element,hasMap="function"==typeof Map,hasSet="function"==typeof Set,hasArrayBuffer="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys,it;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(hasMap&&a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(it=a.entries();!(i=it.next()).done;)if(!b.has(i.value[0]))return!1;for(it=a.entries();!(i=it.next()).done;)if(!equal(i.value[1],b.get(i.value[0])))return!1;return!0}if(hasSet&&a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(it=a.entries();!(i=it.next()).done;)if(!b.has(i.value[0]))return!1;return!0}if(hasArrayBuffer&&ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf&&"function"==typeof a.valueOf&&"function"==typeof b.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString&&"function"==typeof a.toString&&"function"==typeof b.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;if(hasElementType&&a instanceof Element)return!1;for(i=length;0!=i--;)if(("_owner"!==keys[i]&&"__v"!==keys[i]&&"__o"!==keys[i]||!a.$$typeof)&&!equal(a[keys[i]],b[keys[i]]))return!1;return!0}return a!=a&&b!=b}module.exports=function isEqual(a,b){try{return equal(a,b)}catch(error){if((error.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw error}}},"./node_modules/react-player/lib/Player.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,console=__webpack_require__("./node_modules/console-browserify/index.js"),__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value),Player_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(Player_exports,{default:()=>Player}),module.exports=(mod=Player_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_react=__toESM(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),import_react_fast_compare=__toESM(__webpack_require__("./node_modules/react-fast-compare/index.js")),import_props=__webpack_require__("./node_modules/react-player/lib/props.js"),import_utils=__webpack_require__("./node_modules/react-player/lib/utils.js");class Player extends import_react.Component{constructor(){super(...arguments),__publicField(this,"mounted",!1),__publicField(this,"isReady",!1),__publicField(this,"isPlaying",!1),__publicField(this,"isLoading",!0),__publicField(this,"loadOnReady",null),__publicField(this,"startOnPlay",!0),__publicField(this,"seekOnPlay",null),__publicField(this,"onDurationCalled",!1),__publicField(this,"handlePlayerMount",(player=>{this.player||(this.player=player,this.player.load(this.props.url)),this.progress()})),__publicField(this,"getInternalPlayer",(key=>this.player?this.player[key]:null)),__publicField(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const playedSeconds=this.getCurrentTime()||0,loadedSeconds=this.getSecondsLoaded(),duration=this.getDuration();if(duration){const progress={playedSeconds,played:playedSeconds/duration};null!==loadedSeconds&&(progress.loadedSeconds=loadedSeconds,progress.loaded=loadedSeconds/duration),progress.playedSeconds===this.prevPlayed&&progress.loadedSeconds===this.prevLoaded||this.props.onProgress(progress),this.prevPlayed=progress.playedSeconds,this.prevLoaded=progress.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),__publicField(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady,playing,volume,muted}=this.props;onReady(),muted||null===volume||this.player.setVolume(volume),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):playing&&this.player.play(),this.handleDurationCheck()})),__publicField(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart,onPlay,playbackRate}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==playbackRate&&this.player.setPlaybackRate(playbackRate),onStart(),this.startOnPlay=!1),onPlay(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),__publicField(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),__publicField(this,"handleEnded",(()=>{const{activePlayer,loop,onEnded}=this.props;activePlayer.loopOnEnded&&loop&&this.seekTo(0),loop||(this.isPlaying=!1,onEnded())})),__publicField(this,"handleError",((...args)=>{this.isLoading=!1,this.props.onError(...args)})),__publicField(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const duration=this.getDuration();duration?this.onDurationCalled||(this.props.onDuration(duration),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),__publicField(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(prevProps){if(!this.player)return;const{url,playing,volume,muted,playbackRate,pip,loop,activePlayer,disableDeferredLoading}=this.props;if(!(0,import_react_fast_compare.default)(prevProps.url,url)){if(this.isLoading&&!activePlayer.forceLoad&&!disableDeferredLoading&&!(0,import_utils.isMediaStream)(url))return console.warn(`ReactPlayer: the attempt to load ${url} is being deferred until the player has loaded`),void(this.loadOnReady=url);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(url,this.isReady)}prevProps.playing||!playing||this.isPlaying||this.player.play(),prevProps.playing&&!playing&&this.isPlaying&&this.player.pause(),!prevProps.pip&&pip&&this.player.enablePIP&&this.player.enablePIP(),prevProps.pip&&!pip&&this.player.disablePIP&&this.player.disablePIP(),prevProps.volume!==volume&&null!==volume&&this.player.setVolume(volume),prevProps.muted!==muted&&(muted?this.player.mute():(this.player.unmute(),null!==volume&&setTimeout((()=>this.player.setVolume(volume))))),prevProps.playbackRate!==playbackRate&&this.player.setPlaybackRate&&this.player.setPlaybackRate(playbackRate),prevProps.loop!==loop&&this.player.setLoop&&this.player.setLoop(loop)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(amount,type,keepPlaying){if(!this.isReady)return void(0!==amount&&(this.seekOnPlay=amount,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(type?"fraction"===type:amount>0&&amount<1){const duration=this.player.getDuration();return duration?void this.player.seekTo(duration*amount,keepPlaying):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(amount,keepPlaying)}render(){const Player2=this.props.activePlayer;return Player2?import_react.default.createElement(Player2,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}__publicField(Player,"displayName","Player"),__publicField(Player,"propTypes",import_props.propTypes),__publicField(Player,"defaultProps",import_props.defaultProps)},"./node_modules/react-player/lib/ReactPlayer.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value),ReactPlayer_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(ReactPlayer_exports,{createReactPlayer:()=>createReactPlayer}),module.exports=(mod=ReactPlayer_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_react=__toESM(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),import_deepmerge=__toESM(__webpack_require__("./node_modules/deepmerge/dist/cjs.js")),import_memoize_one=__toESM(__webpack_require__("./node_modules/memoize-one/dist/memoize-one.esm.js")),import_react_fast_compare=__toESM(__webpack_require__("./node_modules/react-fast-compare/index.js")),import_props=__webpack_require__("./node_modules/react-player/lib/props.js"),import_utils=__webpack_require__("./node_modules/react-player/lib/utils.js"),import_Player=__toESM(__webpack_require__("./node_modules/react-player/lib/Player.js"));const Preview=(0,import_utils.lazy)((()=>__webpack_require__.e(664).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/Preview.js",23)))),IS_BROWSER="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,IS_GLOBAL=void 0!==__webpack_require__.g&&__webpack_require__.g.window&&__webpack_require__.g.window.document,SUPPORTED_PROPS=Object.keys(import_props.propTypes),UniversalSuspense=IS_BROWSER||IS_GLOBAL?import_react.Suspense:()=>null,customPlayers=[],createReactPlayer=(players,fallback)=>{var _a;return _a=class extends import_react.Component{constructor(){super(...arguments),__publicField(this,"state",{showPreview:!!this.props.light}),__publicField(this,"references",{wrapper:wrapper=>{this.wrapper=wrapper},player:player=>{this.player=player}}),__publicField(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),__publicField(this,"showPreview",(()=>{this.setState({showPreview:!0})})),__publicField(this,"getDuration",(()=>this.player?this.player.getDuration():null)),__publicField(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),__publicField(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),__publicField(this,"getInternalPlayer",((key="player")=>this.player?this.player.getInternalPlayer(key):null)),__publicField(this,"seekTo",((fraction,type,keepPlaying)=>{if(!this.player)return null;this.player.seekTo(fraction,type,keepPlaying)})),__publicField(this,"handleReady",(()=>{this.props.onReady(this)})),__publicField(this,"getActivePlayer",(0,import_memoize_one.default)((url=>{for(const player of[...customPlayers,...players])if(player.canPlay(url))return player;return fallback||null}))),__publicField(this,"getConfig",(0,import_memoize_one.default)(((url,key)=>{const{config}=this.props;return import_deepmerge.default.all([import_props.defaultProps.config,import_props.defaultProps.config[key]||{},config,config[key]||{}])}))),__publicField(this,"getAttributes",(0,import_memoize_one.default)((url=>(0,import_utils.omit)(this.props,SUPPORTED_PROPS)))),__publicField(this,"renderActivePlayer",(url=>{if(!url)return null;const player=this.getActivePlayer(url);if(!player)return null;const config=this.getConfig(url,player.key);return import_react.default.createElement(import_Player.default,{...this.props,key:player.key,ref:this.references.player,config,activePlayer:player.lazyPlayer||player,onReady:this.handleReady})}))}shouldComponentUpdate(nextProps,nextState){return!(0,import_react_fast_compare.default)(this.props,nextProps)||!(0,import_react_fast_compare.default)(this.state,nextState)}componentDidUpdate(prevProps){const{light}=this.props;!prevProps.light&&light&&this.setState({showPreview:!0}),prevProps.light&&!light&&this.setState({showPreview:!1})}renderPreview(url){if(!url)return null;const{light,playIcon,previewTabIndex,oEmbedUrl,previewAriaLabel}=this.props;return import_react.default.createElement(Preview,{url,light,playIcon,previewTabIndex,previewAriaLabel,oEmbedUrl,onClick:this.handleClickPreview})}render(){const{url,style,width,height,fallback:fallback2,wrapper:Wrapper}=this.props,{showPreview}=this.state,attributes=this.getAttributes(url),wrapperRef="string"==typeof Wrapper?this.references.wrapper:void 0;return import_react.default.createElement(Wrapper,{ref:wrapperRef,style:{...style,width,height},...attributes},import_react.default.createElement(UniversalSuspense,{fallback:fallback2},showPreview?this.renderPreview(url):this.renderActivePlayer(url)))}},__publicField(_a,"displayName","ReactPlayer"),__publicField(_a,"propTypes",import_props.propTypes),__publicField(_a,"defaultProps",import_props.defaultProps),__publicField(_a,"addCustomPlayer",(player=>{customPlayers.push(player)})),__publicField(_a,"removeCustomPlayers",(()=>{customPlayers.length=0})),__publicField(_a,"canPlay",(url=>{for(const Player2 of[...customPlayers,...players])if(Player2.canPlay(url))return!0;return!1})),__publicField(_a,"canEnablePIP",(url=>{for(const Player2 of[...customPlayers,...players])if(Player2.canEnablePIP&&Player2.canEnablePIP(url))return!0;return!1})),_a}},"./node_modules/react-player/lib/patterns.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,patterns_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(patterns_exports,{AUDIO_EXTENSIONS:()=>AUDIO_EXTENSIONS,DASH_EXTENSIONS:()=>DASH_EXTENSIONS,FLV_EXTENSIONS:()=>FLV_EXTENSIONS,HLS_EXTENSIONS:()=>HLS_EXTENSIONS,MATCH_URL_DAILYMOTION:()=>MATCH_URL_DAILYMOTION,MATCH_URL_FACEBOOK:()=>MATCH_URL_FACEBOOK,MATCH_URL_FACEBOOK_WATCH:()=>MATCH_URL_FACEBOOK_WATCH,MATCH_URL_KALTURA:()=>MATCH_URL_KALTURA,MATCH_URL_MIXCLOUD:()=>MATCH_URL_MIXCLOUD,MATCH_URL_MUX:()=>MATCH_URL_MUX,MATCH_URL_SOUNDCLOUD:()=>MATCH_URL_SOUNDCLOUD,MATCH_URL_STREAMABLE:()=>MATCH_URL_STREAMABLE,MATCH_URL_TWITCH_CHANNEL:()=>MATCH_URL_TWITCH_CHANNEL,MATCH_URL_TWITCH_VIDEO:()=>MATCH_URL_TWITCH_VIDEO,MATCH_URL_VIDYARD:()=>MATCH_URL_VIDYARD,MATCH_URL_VIMEO:()=>MATCH_URL_VIMEO,MATCH_URL_WISTIA:()=>MATCH_URL_WISTIA,MATCH_URL_YOUTUBE:()=>MATCH_URL_YOUTUBE,VIDEO_EXTENSIONS:()=>VIDEO_EXTENSIONS,canPlay:()=>canPlay}),module.exports=(mod=patterns_exports,((to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to})(__defProp({},"__esModule",{value:!0}),mod));var import_utils=__webpack_require__("./node_modules/react-player/lib/utils.js");const MATCH_URL_YOUTUBE=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,MATCH_URL_SOUNDCLOUD=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,MATCH_URL_VIMEO=/vimeo\.com\/(?!progressive_redirect).+/,MATCH_URL_MUX=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,MATCH_URL_FACEBOOK=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,MATCH_URL_FACEBOOK_WATCH=/^https?:\/\/fb\.watch\/.+$/,MATCH_URL_STREAMABLE=/streamable\.com\/([a-z0-9]+)$/,MATCH_URL_WISTIA=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,MATCH_URL_TWITCH_VIDEO=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,MATCH_URL_TWITCH_CHANNEL=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,MATCH_URL_DAILYMOTION=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,MATCH_URL_MIXCLOUD=/mixcloud\.com\/([^/]+\/[^/]+)/,MATCH_URL_VIDYARD=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,MATCH_URL_KALTURA=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,AUDIO_EXTENSIONS=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,VIDEO_EXTENSIONS=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,HLS_EXTENSIONS=/\.(m3u8)($|\?)/i,DASH_EXTENSIONS=/\.(mpd)($|\?)/i,FLV_EXTENSIONS=/\.(flv)($|\?)/i,canPlayFile=url=>{if(url instanceof Array){for(const item of url){if("string"==typeof item&&canPlayFile(item))return!0;if(canPlayFile(item.src))return!0}return!1}return!(!(0,import_utils.isMediaStream)(url)&&!(0,import_utils.isBlobUrl)(url))||(AUDIO_EXTENSIONS.test(url)||VIDEO_EXTENSIONS.test(url)||HLS_EXTENSIONS.test(url)||DASH_EXTENSIONS.test(url)||FLV_EXTENSIONS.test(url))},canPlay={youtube:url=>url instanceof Array?url.every((item=>MATCH_URL_YOUTUBE.test(item))):MATCH_URL_YOUTUBE.test(url),soundcloud:url=>MATCH_URL_SOUNDCLOUD.test(url)&&!AUDIO_EXTENSIONS.test(url),vimeo:url=>MATCH_URL_VIMEO.test(url)&&!VIDEO_EXTENSIONS.test(url)&&!HLS_EXTENSIONS.test(url),mux:url=>MATCH_URL_MUX.test(url),facebook:url=>MATCH_URL_FACEBOOK.test(url)||MATCH_URL_FACEBOOK_WATCH.test(url),streamable:url=>MATCH_URL_STREAMABLE.test(url),wistia:url=>MATCH_URL_WISTIA.test(url),twitch:url=>MATCH_URL_TWITCH_VIDEO.test(url)||MATCH_URL_TWITCH_CHANNEL.test(url),dailymotion:url=>MATCH_URL_DAILYMOTION.test(url),mixcloud:url=>MATCH_URL_MIXCLOUD.test(url),vidyard:url=>MATCH_URL_VIDYARD.test(url),kaltura:url=>MATCH_URL_KALTURA.test(url),file:canPlayFile}},"./node_modules/react-player/lib/players/Vimeo.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value),Vimeo_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(Vimeo_exports,{default:()=>Vimeo}),module.exports=(mod=Vimeo_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_react=((mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)))(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),import_utils=__webpack_require__("./node_modules/react-player/lib/utils.js"),import_patterns=__webpack_require__("./node_modules/react-player/lib/patterns.js");const cleanUrl=url=>url.replace("/manage/videos","");class Vimeo extends import_react.Component{constructor(){super(...arguments),__publicField(this,"callPlayer",import_utils.callPlayer),__publicField(this,"duration",null),__publicField(this,"currentTime",null),__publicField(this,"secondsLoaded",null),__publicField(this,"mute",(()=>{this.setMuted(!0)})),__publicField(this,"unmute",(()=>{this.setMuted(!1)})),__publicField(this,"ref",(container=>{this.container=container}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(url){this.duration=null,(0,import_utils.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then((Vimeo2=>{if(!this.container)return;const{playerOptions,title}=this.props.config;this.player=new Vimeo2.Player(this.container,{url:cleanUrl(url),autoplay:this.props.playing,muted:this.props.muted,loop:this.props.loop,playsinline:this.props.playsinline,controls:this.props.controls,...playerOptions}),this.player.ready().then((()=>{const iframe=this.container.querySelector("iframe");iframe.style.width="100%",iframe.style.height="100%",title&&(iframe.title=title)})).catch(this.props.onError),this.player.on("loaded",(()=>{this.props.onReady(),this.refreshDuration()})),this.player.on("play",(()=>{this.props.onPlay(),this.refreshDuration()})),this.player.on("pause",this.props.onPause),this.player.on("seeked",(e=>this.props.onSeek(e.seconds))),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",(({seconds})=>{this.currentTime=seconds})),this.player.on("progress",(({seconds})=>{this.secondsLoaded=seconds})),this.player.on("bufferstart",this.props.onBuffer),this.player.on("bufferend",this.props.onBufferEnd),this.player.on("playbackratechange",(e=>this.props.onPlaybackRateChange(e.playbackRate)))}),this.props.onError)}refreshDuration(){this.player.getDuration().then((duration=>{this.duration=duration}))}play(){const promise=this.callPlayer("play");promise&&promise.catch(this.props.onError)}pause(){this.callPlayer("pause")}stop(){this.callPlayer("unload")}seekTo(seconds,keepPlaying=!0){this.callPlayer("setCurrentTime",seconds),keepPlaying||this.pause()}setVolume(fraction){this.callPlayer("setVolume",fraction)}setMuted(muted){this.callPlayer("setMuted",muted)}setLoop(loop){this.callPlayer("setLoop",loop)}setPlaybackRate(rate){this.callPlayer("setPlaybackRate",rate)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const{display}=this.props,style={width:"100%",height:"100%",overflow:"hidden",display};return import_react.default.createElement("div",{key:this.props.url,ref:this.ref,style})}}__publicField(Vimeo,"displayName","Vimeo"),__publicField(Vimeo,"canPlay",import_patterns.canPlay.vimeo),__publicField(Vimeo,"forceLoad",!0)},"./node_modules/react-player/lib/props.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},props_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(props_exports,{defaultProps:()=>defaultProps,propTypes:()=>propTypes}),module.exports=(mod=props_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_prop_types=((mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)))(__webpack_require__("./node_modules/prop-types/index.js"));const{string,bool,number,array,oneOfType,shape,object,func,node}=import_prop_types.default,propTypes={url:oneOfType([string,array,object]),playing:bool,loop:bool,controls:bool,volume:number,muted:bool,playbackRate:number,width:oneOfType([string,number]),height:oneOfType([string,number]),style:object,progressInterval:number,playsinline:bool,pip:bool,stopOnUnmount:bool,light:oneOfType([bool,string,object]),playIcon:node,previewTabIndex:number,previewAriaLabel:string,fallback:node,oEmbedUrl:string,wrapper:oneOfType([string,func,shape({render:func.isRequired})]),config:shape({soundcloud:shape({options:object}),youtube:shape({playerVars:object,embedOptions:object,onUnstarted:func}),facebook:shape({appId:string,version:string,playerId:string,attributes:object}),dailymotion:shape({params:object}),vimeo:shape({playerOptions:object,title:string}),mux:shape({attributes:object,version:string}),file:shape({attributes:object,tracks:array,forceVideo:bool,forceAudio:bool,forceHLS:bool,forceSafariHLS:bool,forceDisableHls:bool,forceDASH:bool,forceFLV:bool,hlsOptions:object,hlsVersion:string,dashVersion:string,flvVersion:string}),wistia:shape({options:object,playerId:string,customControls:array}),mixcloud:shape({options:object}),twitch:shape({options:object,playerId:string}),vidyard:shape({options:object})}),onReady:func,onStart:func,onPlay:func,onPause:func,onBuffer:func,onBufferEnd:func,onEnded:func,onError:func,onDuration:func,onSeek:func,onPlaybackRateChange:func,onPlaybackQualityChange:func,onProgress:func,onClickPreview:func,onEnablePIP:func,onDisablePIP:func},noop=()=>{},defaultProps={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:noop},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:noop,onStart:noop,onPlay:noop,onPause:noop,onBuffer:noop,onBufferEnd:noop,onEnded:noop,onError:noop,onDuration:noop,onSeek:noop,onPlaybackRateChange:noop,onPlaybackQualityChange:noop,onProgress:noop,onClickPreview:noop,onEnablePIP:noop,onDisablePIP:noop}},"./node_modules/react-player/lib/utils.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,console=__webpack_require__("./node_modules/console-browserify/index.js"),__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),utils_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(utils_exports,{callPlayer:()=>callPlayer,getConfig:()=>getConfig,getSDK:()=>getSDK,isBlobUrl:()=>isBlobUrl,isMediaStream:()=>isMediaStream,lazy:()=>lazy,omit:()=>omit,parseEndTime:()=>parseEndTime,parseStartTime:()=>parseStartTime,queryString:()=>queryString,randomString:()=>randomString,supportsWebKitPresentationMode:()=>supportsWebKitPresentationMode}),module.exports=(mod=utils_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_react=__toESM(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),import_load_script=__toESM(__webpack_require__("./node_modules/load-script/index.js")),import_deepmerge=__toESM(__webpack_require__("./node_modules/deepmerge/dist/cjs.js"));const lazy=componentImportFn=>import_react.default.lazy((async()=>{const obj=await componentImportFn();return"function"==typeof obj.default?obj:obj.default})),MATCH_START_QUERY=/[?&#](?:start|t)=([0-9hms]+)/,MATCH_END_QUERY=/[?&#]end=([0-9hms]+)/,MATCH_START_STAMP=/(\d+)(h|m|s)/g,MATCH_NUMERIC=/^\d+$/;function parseTimeParam(url,pattern){if(url instanceof Array)return;const match=url.match(pattern);if(match){const stamp=match[1];if(stamp.match(MATCH_START_STAMP))return function parseTimeString(stamp){let seconds=0,array=MATCH_START_STAMP.exec(stamp);for(;null!==array;){const[,count,period]=array;"h"===period&&(seconds+=60*parseInt(count,10)*60),"m"===period&&(seconds+=60*parseInt(count,10)),"s"===period&&(seconds+=parseInt(count,10)),array=MATCH_START_STAMP.exec(stamp)}return seconds}(stamp);if(MATCH_NUMERIC.test(stamp))return parseInt(stamp)}}function parseStartTime(url){return parseTimeParam(url,MATCH_START_QUERY)}function parseEndTime(url){return parseTimeParam(url,MATCH_END_QUERY)}function randomString(){return Math.random().toString(36).substr(2,5)}function queryString(object){return Object.keys(object).map((key=>`${key}=${object[key]}`)).join("&")}function getGlobal(key){return window[key]?window[key]:window.exports&&window.exports[key]?window.exports[key]:window.module&&window.module.exports&&window.module.exports[key]?window.module.exports[key]:null}const requests={},getSDK=function enableStubOn(fn){0;return fn}((function getSDK2(url,sdkGlobal,sdkReady=null,isLoaded=()=>!0,fetchScript=import_load_script.default){const existingGlobal=getGlobal(sdkGlobal);return existingGlobal&&isLoaded(existingGlobal)?Promise.resolve(existingGlobal):new Promise(((resolve,reject)=>{if(requests[url])return void requests[url].push({resolve,reject});requests[url]=[{resolve,reject}];const onLoaded=sdk=>{requests[url].forEach((request=>request.resolve(sdk)))};if(sdkReady){const previousOnReady=window[sdkReady];window[sdkReady]=function(){previousOnReady&&previousOnReady(),onLoaded(getGlobal(sdkGlobal))}}fetchScript(url,(err=>{err?(requests[url].forEach((request=>request.reject(err))),requests[url]=null):sdkReady||onLoaded(getGlobal(sdkGlobal))}))}))}));function getConfig(props,defaultProps){return(0,import_deepmerge.default)(defaultProps.config,props.config)}function omit(object,...arrays){const omitKeys=[].concat(...arrays),output={},keys=Object.keys(object);for(const key of keys)-1===omitKeys.indexOf(key)&&(output[key]=object[key]);return output}function callPlayer(method,...args){if(!this.player||!this.player[method]){let message=`ReactPlayer: ${this.constructor.displayName} player could not call %c${method}%c – `;return this.player?this.player[method]||(message+="The method was not available"):message+="The player was not available",console.warn(message,"font-weight: bold",""),null}return this.player[method](...args)}function isMediaStream(url){return"undefined"!=typeof window&&void 0!==window.MediaStream&&url instanceof window.MediaStream}function isBlobUrl(url){return/^blob:/.test(url)}function supportsWebKitPresentationMode(video=document.createElement("video")){const notMobile=!1===/iPhone|iPod/.test(navigator.userAgent);return video.webkitSupportsPresentationMode&&"function"==typeof video.webkitSetPresentationMode&&notMobile}},"./node_modules/react-player/vimeo.js":(module,__unused_webpack_exports,__webpack_require__)=>{var createReactPlayer=__webpack_require__("./node_modules/react-player/lib/ReactPlayer.js").createReactPlayer,Player=__webpack_require__("./node_modules/react-player/lib/players/Vimeo.js").default;module.exports=createReactPlayer([{key:"vimeo",canPlay:Player.canPlay,lazyPlayer:Player}])}}]);