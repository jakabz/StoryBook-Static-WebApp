"use strict";(self.webpackChunkcollabit_storybook=self.webpackChunkcollabit_storybook||[]).push([[945],{"./node_modules/@fluentui/utilities/lib/css.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function css(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];for(var classes=[],_a=0,args_1=args;_a<args_1.length;_a++){var arg=args_1[_a];if(arg)if("string"==typeof arg)classes.push(arg);else if(arg.hasOwnProperty("toString")&&"function"==typeof arg.toString)classes.push(arg.toString());else for(var key in arg)arg[key]&&classes.push(key)}return classes.join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>css})},"./node_modules/@fluentui/utilities/lib/warn/warnDeprecations.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function warnDeprecations(componentName,props,deprecationMap){}__webpack_require__.d(__webpack_exports__,{A:()=>warnDeprecations})},"./src/stories/Loading.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Visible:()=>Visible,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Loading_stories});var SpinnerSize,SpinnerType,Stack=__webpack_require__("./node_modules/@fluentui/react/lib/components/Stack/Stack.js"),styled=__webpack_require__("./node_modules/@fluentui/utilities/lib/styled.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js");!function(SpinnerSize){SpinnerSize[SpinnerSize.xSmall=0]="xSmall",SpinnerSize[SpinnerSize.small=1]="small",SpinnerSize[SpinnerSize.medium=2]="medium",SpinnerSize[SpinnerSize.large=3]="large"}(SpinnerSize||(SpinnerSize={})),function(SpinnerType){SpinnerType[SpinnerType.normal=0]="normal",SpinnerType[SpinnerType.large=1]="large"}(SpinnerType||(SpinnerType={}));var classNamesFunction=__webpack_require__("./node_modules/@fluentui/utilities/lib/classNamesFunction.js"),properties=__webpack_require__("./node_modules/@fluentui/utilities/lib/properties.js"),getWindow=__webpack_require__("./node_modules/@fluentui/utilities/lib/dom/getWindow.js"),DelayedRender=function(_super){function DelayedRender(props){var _this=_super.call(this,props)||this;return _this.state={isRendered:void 0===(0,getWindow.z)()},_this}return(0,tslib_es6.C6)(DelayedRender,_super),DelayedRender.prototype.componentDidMount=function(){var _this=this,delay=this.props.delay;this._timeoutId=window.setTimeout((function(){_this.setState({isRendered:!0})}),delay)},DelayedRender.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},DelayedRender.prototype.render=function(){return this.state.isRendered?react.Children.only(this.props.children):null},DelayedRender.defaultProps={delay:0},DelayedRender}(react.Component),getClassNames=(0,classNamesFunction.Z)(),SpinnerBase=function(_super){function SpinnerBase(){return null!==_super&&_super.apply(this,arguments)||this}return(0,tslib_es6.C6)(SpinnerBase,_super),SpinnerBase.prototype.render=function(){var _a=this.props,type=_a.type,size=_a.size,ariaLabel=_a.ariaLabel,ariaLive=_a.ariaLive,styles=_a.styles,label=_a.label,theme=_a.theme,className=_a.className,labelPosition=_a.labelPosition,statusMessage=ariaLabel,nativeProps=(0,properties.G1)(this.props,properties.JM,["size"]),styleSize=size;void 0===styleSize&&void 0!==type&&(styleSize=type===SpinnerType.large?SpinnerSize.large:SpinnerSize.medium);var classNames=getClassNames(styles,{theme,size:styleSize,className,labelPosition});return react.createElement("div",(0,tslib_es6.Cl)({},nativeProps,{className:classNames.root}),react.createElement("div",{className:classNames.circle}),label&&react.createElement("div",{className:classNames.label},label),statusMessage&&react.createElement("div",{role:"status","aria-live":ariaLive},react.createElement(DelayedRender,null,react.createElement("div",{className:classNames.screenReaderText},statusMessage))))},SpinnerBase.defaultProps={size:SpinnerSize.medium,ariaLive:"polite",labelPosition:"bottom"},SpinnerBase}(react.Component),lib=__webpack_require__("./node_modules/@fluentui/style-utilities/lib/index.js"),memoize=__webpack_require__("./node_modules/@fluentui/utilities/lib/memoize.js"),GlobalClassNames={root:"ms-Spinner",circle:"ms-Spinner-circle",label:"ms-Spinner-label"},spinAnimation=(0,memoize.J9)((function(){return(0,lib.i7)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}})})),Spinner=(0,styled.I)(SpinnerBase,(function(props){var _a,theme=props.theme,size=props.size,className=props.className,labelPosition=props.labelPosition,palette=theme.palette,classNames=(0,lib.Km)(GlobalClassNames,theme);return{root:[classNames.root,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},"top"===labelPosition&&{flexDirection:"column-reverse"},"right"===labelPosition&&{flexDirection:"row"},"left"===labelPosition&&{flexDirection:"row-reverse"},className],circle:[classNames.circle,{boxSizing:"border-box",borderRadius:"50%",border:"1.5px solid "+palette.themeLight,borderTopColor:palette.themePrimary,animationName:spinAnimation(),animationDuration:"1.3s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.53,.21,.29,.67)",selectors:(_a={},_a[lib.up]=(0,tslib_es6.Cl)({borderTopColor:"Highlight"},(0,lib.Qg)()),_a)},size===SpinnerSize.xSmall&&["ms-Spinner--xSmall",{width:12,height:12}],size===SpinnerSize.small&&["ms-Spinner--small",{width:16,height:16}],size===SpinnerSize.medium&&["ms-Spinner--medium",{width:20,height:20}],size===SpinnerSize.large&&["ms-Spinner--large",{width:28,height:28}]],label:[classNames.label,theme.fonts.small,{color:palette.themePrimary,margin:"8px 0 0",textAlign:"center"},"top"===labelPosition&&{margin:"0 0 8px"},"right"===labelPosition&&{margin:"0 0 0 8px"},"left"===labelPosition&&{margin:"0 8px 0 0"}],screenReaderText:lib.dX}}),void 0,{scope:"Spinner"}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Loading=props=>{const spinnerStyles={circle:{borderTopColor:props.spinnerColor?props.spinnerColor:"rgba(0, 0, 0, 1)",width:props.spinnerSize?"".concat(props.spinnerSize,"px"):"40px",height:props.spinnerSize?"".concat(props.spinnerSize,"px"):"40px"},label:{color:props.loadingStringColor?props.loadingStringColor:"rgba(0, 0, 0, 1)",fontSize:props.loadingStringSize?"".concat(props.loadingStringSize,"px"):"16px"}};switch(props.visible){case!0:return(0,jsx_runtime.jsx)(Stack.B,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:1e8,backgroundColor:props.bgColor?props.bgColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"150px",minWidth:"150px"},children:(0,jsx_runtime.jsx)(Spinner,{label:props.loadingString?props.loadingString:"Loading",styles:spinnerStyles})});case!1:return null}};Loading.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{visible:{required:!0,tsType:{name:"boolean"},description:""},bgColor:{required:!1,tsType:{name:"string"},description:""},loadingString:{required:!1,tsType:{name:"string"},description:""},loadingStringColor:{required:!1,tsType:{name:"string"},description:""},loadingStringSize:{required:!1,tsType:{name:"number"},description:""},spinnerSize:{required:!1,tsType:{name:"number"},description:""},spinnerColor:{required:!1,tsType:{name:"string"},description:""}}};const Loading_stories={title:"CollabIT/Loading",component:Loading,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{spinnerSize:{control:{type:"range",min:5,max:100,step:1}},loadingStringSize:{control:{type:"range",min:5,max:100,step:1}},loadingString:{control:{type:"text"}},visible:{control:{type:"boolean"}},bgColor:{control:{type:"color"}}},args:{visible:!0,spinnerSize:40,spinnerColor:"rgba(0, 0, 0, 1)",loadingString:"Please wait...",loadingStringColor:"rbba(0, 0, 0, 1)",loadingStringSize:16,bgColor:"rgba(0, 0, 0, 0.5)"}},Visible={args:{visible:!0,spinnerSize:40,spinnerColor:"rgba(0, 0, 0, 1)",loadingString:"Please wait...",loadingStringColor:"rbba(0, 0, 0, 1)",loadingStringSize:16,bgColor:"rgba(0, 0, 0, 0.5)"}};Visible.parameters={...Visible.parameters,docs:{...Visible.parameters?.docs,source:{originalSource:"{\n  args: {\n    visible: true,\n    spinnerSize: 40,\n    spinnerColor: 'rgba(0, 0, 0, 1)',\n    loadingString: 'Please wait...',\n    loadingStringColor: 'rbba(0, 0, 0, 1)',\n    loadingStringSize: 16,\n    bgColor: 'rgba(0, 0, 0, 0.5)'\n  }\n}",...Visible.parameters?.docs?.source}}};const __namedExportsOrder=["Visible"]}}]);