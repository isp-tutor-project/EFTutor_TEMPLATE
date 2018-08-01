/// <reference types="easeljs" />
/// <reference types="createjs-lib" />
/// <reference types="tweenjs" />
declare module "util/IModuleDesc" {
    export interface IModuleDesc {
        parentFldr: string;
        name: string;
        extNameSpace: string;
        intNameSpace: string;
        type: string;
        compID: string;
        URL: string;
        instance: any;
    }
}
declare module "util/IBootLoader" {
    export namespace LoaderPackage {
        interface _account {
            EB2: string;
            EB3: string;
            EB4: string;
            _loader: string;
            _feature: string;
            roles: string;
            isValidated: boolean;
            isActive: boolean;
            Created: string;
            Modified: string;
        }
        interface IModuleDescr {
            modName: string;
        }
        interface ITutorConfig {
            dependencies: Array<string>;
        }
        interface IBootdescr {
            accountMode: string;
        }
        interface ILoaderData {
            filePath: string;
            type: string;
            fileName?: string;
            varName?: string;
            debugPath?: string;
            modName?: string;
            compID?: string;
            sourcePath?: string;
            onLoad?: Function;
        }
        interface ItutorMaps {
            [key: string]: any;
        }
        interface IPackage {
            bootLoader: IBootdescr;
            tutors: ItutorMaps;
        }
    }
}
declare module "core/IEFTutorDoc" {
    import { LoaderPackage } from "util/IBootLoader";
    export interface IEFTutorDoc {
        traceMode: boolean;
        tutorContainer: any;
        tutorNavigator: any;
        name: string;
        loaderData: Array<LoaderPackage.ILoaderData>;
        logFrameID: number;
        logStateID: number;
        ktSkills: any;
        sceneGraph: any;
        tutorGraph: any;
        tutorConfig: LoaderPackage.ITutorConfig;
        language: string;
        voice: string;
        modules: Array<LoaderPackage.IModuleDescr>;
        moduleData: any;
        state: Array<string>;
        scenedata: Array<string>;
        _tutorFeatures: string;
        _forcedPause: boolean;
        _modulePath: string;
        _pFeatures: any;
        designWidth: number;
        designHeight: number;
        STAGEWIDTH: number;
        STAGEHEIGHT: number;
        _framendx: number;
        fRemoteMode: boolean;
        fDemo: boolean;
        fDebug: boolean;
        fLog: boolean;
        fDeferDemoClick: boolean;
        fTutorPart: string;
        fFullSignIn: boolean;
        fSkipAssess: boolean;
        fEnableBack: boolean;
        fForceBackButton: boolean;
        fSkillometer: boolean;
        sessionAccount: any;
        fSessionID: string;
        fSessionTime: number;
        serverUserID: number;
        fPlaybackMode: boolean;
        _log: any;
        SceneData: string;
        _globals: any;
        _sceneData: any;
        _phaseData: any;
        TutAutomator: any;
        initializeTutor(): void;
        extAccount: any;
        extFTutorPart: string;
        extFFullSignIn: string;
        extFDemo: boolean;
        extFDebug: boolean;
        extFRemoteMode: boolean;
        extFDeferDemoClick: string;
        extFSkillometer: string;
        extTutorFeatures: string;
        extmodPath: string;
        extLogManager: any;
        extForceBackButton: any;
        extAspectRatio: string;
        incFrameNdx(): void;
        initGlobals(): void;
        incrGlobal(_id: string, _max: number, _cycle: number): number;
        assertGlobal(_id: string, _value: any): void;
        retractGlobal(_id: string): void;
        queryGlobal(_id: string): any;
        globals: Object;
        launchTutor(): void;
        resetStateFrameID(): void;
        frameID: number;
        incFrameID(): void;
        stateID: number;
        incStateID(): void;
        connectFrameCounter(fCon: boolean): void;
        doEnterFrame(evt: Event): void;
        gData: string;
        gPhase: string;
        log: any;
        resetSceneDataXML(): void;
        gForceBackButton: boolean;
        gNavigator: any;
        setButtonBehavior(behavior: string): void;
        buildBootSet(targetTutor: string): void;
        buildTutorSet(): void;
        loadFileSet(): Promise<any>[];
        onLoadJson(fileLoader: LoaderPackage.ILoaderData, filedata: string): void;
        onLoadModID(fileLoader: LoaderPackage.ILoaderData, filedata: string): void;
        onLoadSceneGraphs(fileLoader: LoaderPackage.ILoaderData, filedata: string): void;
        onLoadCode(fileLoader: LoaderPackage.ILoaderData, filedata: string): void;
        onLoadFonts(fileLoader: LoaderPackage.ILoaderData, filedata: string): void;
        onLoadData(fileLoader: LoaderPackage.ILoaderData, filedata: string): void;
        setTutorDefaults(featSet: string): void;
        setTutorFeatures(featSet: string): void;
        features: string;
        addFeature: string;
        delFeature: string;
        testFeatureSet(featSet: string): boolean;
        traceFeatures(): void;
    }
}
declare module "managers/ILogManager" {
    export interface ILogManager {
        useLocalHost(): void;
        queryTheQueue(): void;
        addEventListener(type: string, listener: Function, useCapture: boolean, priority: number, useWeakReference: boolean): void;
        removeEventListener(type: string, listener: Function, useCapture: boolean): void;
        fLogging: number;
        account: object;
        fTutorPart: string;
        setQueueStreamState(startQueue: boolean): void;
        getQueueStreamState(): string;
        getQueueState(): string;
        connectProtocol(func: Function): void;
        disConnectProtocol(func: Function): void;
        connectForInterface(): void;
        connectToAuthenticate(): void;
        connectToReattach(): void;
        isSessionActive: boolean;
        recycleConnection(fRestart: boolean): void;
        sessionStatus: string;
        connectionActive: boolean;
        getConnectionState(): string;
        connectionActiveOrPending: boolean;
        sessionID: string;
        sessionHost: string;
        sessionPort: number;
        useQueue(useQ: boolean): void;
        abandonSession(abandonData: boolean, newStatus: string): void;
        abandonSocket(abandonData: boolean): void;
        submitAuthentication(xMsg: any): void;
        submitJSONQuery(jMsg: any): void;
        activateSession(sessionID: string): void;
        failSession(): void;
        sendPacket(packet: any): boolean;
        logTerminateEvent(): void;
        logSessionIDEvent(): void;
        logLiveEvent(logData: object): void;
        logActionEvent(logData: object): void;
        logStateEvent(logData: object): void;
        logNavEvent(logData: object): void;
        flushGlobalStateLocally(name: string): void;
        logProgressEvent(logData: any): void;
        logDurationEvent(logData: any): void;
        logErrorEvent(logData: object): void;
        isDataStreaming: boolean;
        isQueueStreaming: boolean;
        queueLength: number;
        queuePosition: number;
        isSending: boolean;
        isConnected: boolean;
        sendDebugPacket(logData: object): void;
        startDebugDataStream(): void;
        stopDebugDataStream(): void;
        startQueueing(): void;
        stopQueueing(): void;
        setPlayBackSource(logSource: Array<String>): void;
        unWrapLog(): Array<String>;
        normalizePlayBackTime(): void;
        normalizePlayBack(): void;
        getNextEventState(): number;
        getNextEvent(stateID: number, frameID: number): string;
        playBackDone(): boolean;
        getActionEvent(frameTime: Number): string;
        setPlayBackDone(val: boolean): void;
        getMoveEvent(frameTime: Number): string;
    }
}
declare module "managers/CLogManagerType" {
    export class CLogManagerType {
    }
}
declare module "util/CUtil" {
    import DisplayObject = createjs.DisplayObject;
    export class CUtil extends Object {
        static w: any;
        static now: Function;
        static getDefinitionByNameCache: any;
        private static SHOW;
        private static HIDE;
        constructor();
        static trace(message: string | string[], ...alt: any[]): void;
        static getTimer(): number;
        static getQualifiedClassName(value: any): string;
        static mixinCodeSuppliments(recObj: any, donorObj: any, mixinSig: string): void;
        static mixinDataObject(recObj: any, donorObj: any): void;
        static getDefinitionByName2(name: string): any;
        static preLoader(show: boolean): void;
        static strMap2Obj(strMap: Map<string, Object>): any;
        static obj2StrMap(obj: any): Map<string, Object>;
        static instantiateThermiteObject(_module: string, _className: string): DisplayObject;
        static getConstructorByName(moduleName: string, className: string): any;
    }
}
declare module "events/CEFEvent" {
    import Event = createjs.Event;
    export class CEFEvent extends Event {
        static readonly ENTER_FRAME: string;
        static readonly EXIT_FRAME: string;
        static readonly ADDED_TO_STAGE: string;
        static readonly REMOVED_FROM_STAGE: string;
        static readonly MOTION_FINISH: string;
        static readonly CHANGE: string;
        static readonly COMPLETE: string;
        tarObjID: string;
        constructor(TarObjID: string, type: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
        captureLogState(obj?: any): Object;
        captureXMLState(): string;
        restoreXMLState(xmlState: string): void;
        compareXMLState(xmlState: string): boolean;
        trace(message: string | string[]): void;
    }
}
declare module "util/CONST" {
    export class CONST {
        static readonly TUTORCONTAINER: string;
        static readonly ACTION_PFX: string;
        static readonly SCENE_CHOICESET: string;
        static readonly SCENE_TRACK: string;
        static readonly SCENE_ACTION: string;
        static readonly TEMPLATE_VAR: string;
        static readonly NOVAR: string;
        static readonly SCENE_DATA: string;
        static readonly TRACK_DATA: string;
        static readonly START_CUEPOINT: string;
        static readonly END_CUEPOINT: string;
        static readonly EFTEXT_TYPE: string;
        static readonly EFINPUT_TYPE: string;
        static readonly EFLISTBOX_TYPE: string;
        static readonly EFTABLE_TYPE: string;
        static readonly GLOBAL_MODULE: string;
        static readonly GLOBAL_CODE: string;
        static readonly COMMON_CODE: string;
        static readonly EXT_SIG: string;
        static readonly ACCOUNT_LOADER: string;
        static readonly MODID_FILEPATH: string;
        static readonly GRAPH_FILEPATH: string;
        static readonly EXTS_FILEPATH: string;
        static readonly MIXINS_FILEPATH: string;
        static readonly DATA_FILEPATH: string;
        static readonly LIBR_FILEPATH: string;
        static readonly FONTFACE_FILEPATH: string;
        static readonly TRACKDATA_FILEPATH: string;
        static readonly TRACKASSETS_FILEPATH: string;
        static readonly GLOBALS_FILEPATH: string;
        static readonly SEGMENT_PREFIX: string;
        static readonly VOICE_PREFIX: string;
        static readonly ANMODULE_FILEPATH: string;
        static readonly TYPE_MP3: string;
        static readonly TYPE_WAV: string;
        static readonly LOCAL: string;
        static readonly WAIT: number;
        static readonly DONT_LAUNCH: boolean;
        static readonly LAUNCH: boolean;
        static readonly EFMODULE_PREFIX: string;
        static readonly THERMITE_PREFIX: string;
        static readonly MODULE_PREFIX: string;
        static readonly MODLINK_PREFIX: string;
        static readonly SCENE_EXT: string;
        static readonly TUTOR_EXT: string;
        static readonly TUTOR_VARIABLE: string[];
        static readonly TUTOR_FACTORIES: string[];
        static readonly STATE_UP: string;
        static readonly STATE_OVER: string;
        static readonly STATE_DOWN: string;
        static readonly STATE_DISABLED: string;
        static readonly STATE_HIT: string;
        static readonly STATE_OUT: string;
        static readonly NEXTSCENE: string;
        static readonly PREVSCENE: string;
        static readonly MOUSE_MOVE: string;
        static readonly MOUSE_DOWN: string;
        static readonly MOUSE_UP: string;
        static readonly MOUSE_CLICK: string;
        static readonly DOUBLE_CLICK: string;
        static readonly CLICK: string;
        static readonly CANCELNAV: string;
        static readonly OKNAV: string;
        static readonly ENDMODAL: string;
        static readonly DLGSTAY: string;
        static readonly DLGNEXT: string;
        static readonly EF_REPLAY: string;
        static readonly EF_CANCEL: string;
        static readonly EF_PAUSING: string;
        static readonly EF_PLAYING: string;
        static readonly LUMA_R: number;
        static readonly LUMA_G: number;
        static readonly LUMA_B: number;
        static readonly SESSION_START: string;
        static readonly SESSION_RUNNING: string;
        static readonly SESSION_INTERRUPTED: string;
        static readonly SESSION_COMPLETE: string;
        static readonly xmlUSER_AUTH: string;
        static readonly xmlUPDATE_PROGRESS: string;
        static readonly xmlLOG_STATE: string;
        static readonly xmlQUERY_STATE: string;
        static readonly xmlACKAUTH: string;
        static readonly xmlNAKAUTH: string;
        static readonly xmlACKPROGLOG: string;
        static readonly xmlNAKPROGLOG: string;
        static readonly xmlACKSTATEQUERY: string;
        static readonly xmlNAKSTATEQUERY: string;
        static readonly xmlACKLATESTSTATEQUERY: string;
        static readonly xmlNAKLATESTSTATEQUERY: string;
        static readonly xmlACKSTATELOG: string;
        static readonly xmlNAKSTATELOG: string;
        static readonly xmlERROR: string;
        static readonly xmlMESSAGE: string;
        static readonly xmlSQLERROR: string;
        static readonly INVALID_USER: string;
        static readonly PORT_NTP: number;
        static readonly PORT_ARBITER: number;
        static readonly PORT_SERVER: number;
        static readonly PORT_LOGGER: number;
        static readonly RECLOGNONE: number;
        static readonly RECORDEVENTS: number;
        static readonly LOGEVENTS: number;
        static readonly RECLOGEVENTS: number;
        static readonly MODE_JSON: string;
        static readonly JSON_ACKLOG: string;
        static readonly JSON_ACKTERM: string;
        static readonly FIND: string;
        static readonly INSERT: string;
        static readonly CREATEACCT: string;
        static readonly UPSERT: string;
        static readonly UPDATE: string;
        static readonly UNSET: string;
        static readonly REMOVE: string;
        static readonly RECYCLE: string;
        static readonly RECOVER: string;
        static readonly DBCOMMAND: string;
        static readonly DBRUN_DBCOMMAND: string;
        static readonly DBRUN_LISTDBS: string;
        static readonly DBRUN_LISTCOLS: string;
        static readonly DBRUN_DROPCOLLECTION: string;
        static readonly DBRUN_UPDATEDOCUMENT: string;
        static readonly ACK_FIND: string;
        static readonly ACK_INSERT: string;
        static readonly ACK_CREATEACCT: string;
        static readonly ACK_UPSERT: string;
        static readonly ACK_UPDATE: string;
        static readonly ACK_UNSET: string;
        static readonly ACK_REMOVE: string;
        static readonly ACK_RECYCLE: string;
        static readonly ACK_RECOVER: string;
        static readonly ACK_DBCOMMAND: string;
        static readonly QUERY_ALL: string;
        static readonly LOG_PACKET: string;
        static readonly LOG_TERMINATE: string;
        static readonly LOG_PROGRESS: string;
        static readonly ACKLOG_PACKET: string;
        static readonly ACKLOG_TERMINATE: string;
        static readonly ACKLOG_PROGRESS: string;
        static readonly ACKLOG_NAK: string;
        static readonly _READY: string;
        static readonly _INPROGRESS: string;
        static readonly _COMPLETE: string;
        static readonly GOTONEXTSCENE: string;
        static readonly GOTONEXTANIMATION: string;
        static readonly TIMER: string;
        static readonly TIMER_COMPLETE: string;
    }
}
declare module "core/CEFTimer" {
    import EventDispatcher = createjs.EventDispatcher;
    export class CEFTimer extends EventDispatcher {
        private traceMode;
        private _handler;
        private _scope;
        private _event;
        private _time;
        private _repeatCount;
        private count;
        private repeats;
        private paused;
        frameRate: number;
        frame_ms: number;
        private _tickHandler;
        private static activeTimers;
        private static tutorDoc;
        constructor(time: number, repeatCount?: number);
        private tick(evt);
        timerAddThis(): void;
        timerRemoveThis(): void;
        connectToTutor(): void;
        disConnectFromTutor(): void;
        static startTimer(duration: number, callback: Function, scope: Object, event: Object): CEFTimer;
        start(): void;
        stop(): void;
        reset(): void;
        cancelTimers(evt: Event): void;
        pauseTimers(evt: Event): void;
        playTimers(evt: Event): void;
    }
}
declare module "events/CEFNavEvent" {
    import Event = createjs.Event;
    export class CEFNavEvent extends Event {
        static readonly WOZNAVNEXT: string;
        static readonly WOZNAVBACK: string;
        static readonly WOZNAVTO: string;
        static readonly WOZNAVINC: string;
        static readonly WOZNAVREPLAY: string;
        wozNavTarget: string;
        wozFeatures: string;
        constructor(type: string, _target?: string, _featureSet?: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "scenegraph/IAudioTypes" {
    export interface InputType {
        ssml: string;
        text: string;
    }
    export interface VoiceType {
        name: string;
        languageCode: string;
        ssmlGender: string;
    }
    export interface AudioType {
        audioEncoding: string;
    }
    export interface requestType {
        input: InputType;
        voice: VoiceType;
        audioConfig: AudioType;
    }
    export interface template {
        [key: string]: templVar;
    }
    export interface templVar {
        values: templValue;
        volume: number;
        notes: string;
    }
    export interface templValue {
        [key: string]: string;
    }
    export interface segment {
        templateVar: string;
        [key: string]: segmentVal | string;
    }
    export interface segmentVal {
        id: string;
        SSML: string;
        cues: Array<cuePoint>;
        duration: number;
        trim: number;
        volume: number;
    }
    export interface cuePoint {
        name: string;
        offset: number;
        relTime: number;
    }
    export interface timedEvents {
        [key: string]: string;
        start: string;
        end: string;
    }
    export interface scriptInstance {
        html: string;
        text: string;
        cueSet: string;
        segments: Array<segment>;
        trim: Array<number>;
        timedSet: Array<timedEvents>;
        templates: any;
        volume: number;
    }
    export interface findArray extends Array<string> {
        index: number;
        endIndex?: number;
    }
}
declare module "scenegraph/CSceneEdge" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CSceneGraph } from "scenegraph/CSceneGraph";
    import { CSceneNode } from "scenegraph/CSceneNode";
    export class CSceneEdge {
        protected tutorDoc: IEFTutorDoc;
        protected _parent: CSceneGraph;
        private _edgeConst;
        private _edgeNode;
        constructor(_tutorDoc: IEFTutorDoc);
        static factory(_tutorDoc: IEFTutorDoc, parent: CSceneGraph, factory: any): CSceneEdge;
        testConstraint(): boolean;
        followEdge(): CSceneNode;
    }
}
declare module "scenegraph/CSceneNode" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CSceneGraph } from "scenegraph/CSceneGraph";
    import { CSceneTrack } from "scenegraph/CSceneTrack";
    import EventDispatcher = createjs.EventDispatcher;
    export class CSceneNode extends EventDispatcher {
        protected tutorDoc: IEFTutorDoc;
        protected _parent: CSceneGraph;
        protected _id: string;
        protected _name: string;
        protected _type: string;
        protected _edges: Array<any>;
        constructor(_tutorDoc: IEFTutorDoc, target?: EventDispatcher);
        protected nodeFactory(parent: CSceneGraph, id: string, nodefactory: any): void;
        gotoNextTrack(): CSceneTrack;
        nextNode(): CSceneNode;
        seekToTrack(seek: string): string;
        applyNode(): boolean;
        resetNode(): void;
    }
}
declare module "scenegraph/CSceneModule" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CSceneNode } from "scenegraph/CSceneNode";
    import { CSceneGraph } from "scenegraph/CSceneGraph";
    import { CSceneTrack } from "scenegraph/CSceneTrack";
    import EventDispatcher = createjs.EventDispatcher;
    export class CSceneModule extends CSceneNode {
        private _tracks;
        private _ndx;
        private _reuse;
        constructor(_tutorDoc: IEFTutorDoc, target?: EventDispatcher);
        static factory(_tutorDoc: IEFTutorDoc, parent: CSceneGraph, nodeName: string, moduleFactory: any): CSceneModule;
        gotoNextTrack(): CSceneTrack;
        seekToTrack(seek: string): string;
        applyNode(): boolean;
        resetNode(): void;
    }
}
declare module "scenegraph/CSceneGraph" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CSceneNode } from "scenegraph/CSceneNode";
    import { CSceneTrack } from "scenegraph/CSceneTrack";
    import { TScene } from "thermite/TScene";
    export class CSceneGraph extends CSceneNode {
        private _nodes;
        private _currNode;
        private _currTrack;
        private _prevTrack;
        private _parentScene;
        _graphFactory: any;
        constructor(_tutorDoc: IEFTutorDoc);
        static factory(_tutorDoc: IEFTutorDoc, parent: TScene, hostModule: string, sceneName: string): CSceneGraph;
        seekRoot(): void;
        sceneInstance: TScene;
        queryPFeature(pid: string, size: number, cycle: number): number;
        gotoNextTrack(): CSceneTrack;
        private parseNodes();
        findNodeByName(name: string): CSceneNode;
        node: CSceneNode;
    }
}
declare module "scenegraph/CSceneChoiceSet" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CSceneNode } from "scenegraph/CSceneNode";
    import { CSceneGraph } from "scenegraph/CSceneGraph";
    import { CSceneTrack } from "scenegraph/CSceneTrack";
    import EventDispatcher = createjs.EventDispatcher;
    export class CSceneChoiceSet extends CSceneNode {
        private _choices;
        private _iter;
        private _cycle;
        private _count;
        private _replace;
        constructor(_tutorDoc: IEFTutorDoc, target?: EventDispatcher);
        static factory(_tutorDoc: IEFTutorDoc, parent: CSceneGraph, nodeName: string, moduleFactory: any): CSceneChoiceSet;
        choose(): CSceneTrack;
    }
}
declare module "events/CEFSceneCueEvent" {
    import Event = createjs.Event;
    export class CEFSceneCueEvent extends Event {
        static readonly CUEPOINT: string;
        cueID: string;
        constructor(type: string, CueID: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "scenegraph/CSceneTrack" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CSceneGraph } from "scenegraph/CSceneGraph";
    import { TTutorContainer } from "thermite/TTutorContainer";
    import EventDispatcher = createjs.EventDispatcher;
    export class CSceneTrack extends EventDispatcher {
        protected tutorDoc: IEFTutorDoc;
        private _parent;
        private _name;
        private hostScene;
        private sceneName;
        private hostModule;
        private voice;
        private language;
        private _type;
        private _autostep;
        private _odds;
        private _chosen;
        private _choiceset;
        private _trackname;
        private _actionname;
        private _features;
        private _pid;
        private _cycle;
        private _prob;
        private segSequence;
        private segNdx;
        private trackLoaded;
        private hasAudio;
        private isPlaying;
        private isPaused;
        private trackAudio;
        private html;
        private baseName;
        private text;
        private cueSet;
        private segments;
        private timedSet;
        private templates;
        private _asyncPlayTimer;
        private _playHandler;
        private _asyncCueTimer;
        private _cueTimers;
        constructor(_tutorDoc: IEFTutorDoc, factory: any, parent: CSceneGraph);
        resolve(): CSceneTrack;
        registerTrack(): void;
        onTrackLoaded(event: any): void;
        playTrack(): void;
        private setCuePoints(segment);
        private cueHandler(evt, _timer);
        private segmentComplete(event);
        play(): void;
        pause(): void;
        stop(): void;
        gotoAndStop(time: number): void;
        bindPlay(container: TTutorContainer): void;
        readonly trackID: string;
        testPFeature(): boolean;
        readonly hasPFeature: boolean;
        readonly type: string;
        features: string;
        readonly trackName: string;
        readonly actionName: string;
        getOdds(ndx: number): number;
        readonly count: number;
        replace(): void;
        choose(): void;
    }
}
declare module "thermite/TScene" {
    import { TSceneBase } from "thermite/TSceneBase";
    import { CEFTimer } from "core/CEFTimer";
    import { CEFNavEvent } from "events/CEFNavEvent";
    import { CSceneTrack } from "scenegraph/CSceneTrack";
    export class TScene extends TSceneBase {
        private STrack;
        private _asyncGraphTimer;
        private _asyncPlayTimer;
        private _trackHandler;
        private _playHandler;
        private _deferPlay;
        static readonly DEFAULT_MONITOR_INTERVAL: Number;
        protected _timer: CEFTimer;
        protected _interval: Number;
        private cueListener;
        protected ktUpdated: boolean;
        private sceneGraph;
        constructor();
        TSceneInitialize(): void;
        initialize(): void;
        private init4();
        Destructor(): void;
        trackPlay(): void;
        private _asyncPlayTrack(evt);
        connectTrack(track: CSceneTrack): void;
        disConnectTrack(track: CSceneTrack): void;
        nextScene(event: CEFNavEvent): void;
        doSceneCue(evt: CustomEvent): void;
        connectSceneGraph(hostModule: string, sceneName: string): void;
        nextTrack(): void;
        private _asyncNextTrack(evt);
        traceGraphEdge(bNavigating?: boolean): CSceneTrack;
        preEnterScene(lTutor: Object, sceneLabel: string, sceneTitle: string, scenePage: string, Direction: string): string;
        onEnterScene(Direction: string): void;
        preExitScene(Direction: string, sceneCurr: number): string;
        onExitScene(): void;
        enQueueTerminateEvent(): void;
        private _asyncTerminate(e);
        updateKT(): void;
    }
}
declare module "thermite/events/TMouseEvent" {
    import MouseEvent = createjs.MouseEvent;
    export class TMouseEvent extends MouseEvent {
        tarObjID: string;
        localX: number;
        localY: number;
        static readonly MOUSE_OVER: string;
        static readonly MOUSE_OUT: string;
        static readonly MOUSE_DOWN: string;
        static readonly MOUSE_CLICK: string;
        static readonly MOUSE_MOVE: string;
        static readonly MOUSE_UP: string;
        static readonly DOUBLE_CLICK: string;
        static readonly CLICK: string;
        static readonly WOZCLICK: string;
        static readonly WOZCLICKED: string;
        static readonly WOZDBLCLICK: string;
        static readonly WOZMOVE: string;
        static readonly WOZDOWN: string;
        static readonly WOZUP: string;
        static readonly WOZOVER: string;
        static readonly WOZOUT: string;
        static readonly WOZKEYDOWN: string;
        static readonly WOZKEYUP: string;
        static readonly WOZNULL: string;
        constructor(TarObjID: string, type: string, bubbles?: boolean, cancelable?: boolean, stageX?: number, stageY?: number, nativeEvent?: NativeMouseEvent, pointerID?: number, primary?: boolean, rawX?: number, rawY?: number);
        clone(): TMouseEvent;
        captureLogState(obj?: any): any;
        captureXMLState(): any;
        restoreXMLState(xmlState: any): void;
        compareXMLState(xmlState: any): Boolean;
    }
}
declare module "thermite/events/TTextEvent" {
    import { CEFEvent } from "events/CEFEvent";
    import Event = createjs.Event;
    export class TTextEvent extends CEFEvent {
        static readonly WOZSETSELECTION: string;
        static readonly WOZSETSCROLL: string;
        static readonly WOZINPUTTEXT: string;
        static readonly WOZCAPTUREFOCUS: string;
        static readonly WOZRELEASEFOCUS: string;
        textdata: string;
        index1: number;
        index2: number;
        constructor(TarObjID: string, Type: string, Index1?: number, Index2?: number, TextData?: string, Bubbles?: boolean, Cancelable?: boolean);
        clone(): Event;
    }
}
declare module "thermite/TCursorProxy" {
    import { TRoot } from "thermite/TRoot";
    import { TObject } from "thermite/TObject";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import MovieClip = createjs.MovieClip;
    import Point = createjs.Point;
    import Tween = createjs.Tween;
    export class TCursorProxy extends TRoot {
        Sstandard: MovieClip;
        Ssmallhand: MovieClip;
        Shand: MovieClip;
        Sautomate: MovieClip;
        Ssparkle: MovieClip;
        curObject: TObject;
        actObject: TObject;
        cLocation: Point;
        sAuto: string;
        tween: Tween;
        lastFrameTime: number;
        fSparkler: boolean;
        fSparklerTest: boolean;
        fSparklerDrag: boolean;
        fLiveLog: boolean;
        static readonly WOZLIVE: string;
        static readonly WOZREPLAY: string;
        constructor();
        TCursorProxyInitialize(): void;
        initialize(): void;
        private init1();
        setCursorStyle(style: string): void;
        initWOZCursor(sMode: string): void;
        decodeTarget(baseObj: any, objArray: Array<any>): TObject;
        initPlayBack(): void;
        playBackAction(wozEvt: any): void;
        playBackMove(nextMove: any, frameTime: number): void;
        replayEvent(xEvt: any): void;
        replayEventB(xEvt: any): void;
        replayEventAndMove(xEvt: any, laEvt: any, l2Evt: any): Array<any>;
        replayMove(oldTime: number, laEvt: any): Array<Tween>;
        liveMouseMove(evt: TMouseEvent): void;
        liveMouseDown(evt: TMouseEvent): void;
        liveMouseUp(evt: TMouseEvent): void;
        liveMouseDblClick(evt: TMouseEvent): void;
        stateHelper(tarObj: TObject): boolean;
        hitTestCoord(locX: number, locY: number): TObject;
        hitTestMouse(evt: TMouseEvent): void;
        show(bFlag: boolean): void;
        private updateCurrentObject(evt, hitObj);
        isWOZObject(tObj: any): TObject;
    }
}
declare module "core/CEFTimeStamp" {
    import { TObject } from "thermite/TObject";
    export class CEFTimeStamp extends TObject {
        static _baseTime: number;
        constructor();
        getStartTime(objprop: string): string;
        createLogAttr(objprop: string, restart?: boolean): string;
    }
}
declare module "events/CEFKeyboardEvent" {
    import Event = createjs.Event;
    export class CEFKeyboardEvent extends Event {
        static readonly KEY_PRESS: string;
        static readonly KEY_DOWN: string;
        static readonly KEY_UP: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
    }
}
declare module "thermite/TTutorContainer" {
    import { TRoot } from "thermite/TRoot";
    import { TSceneBase } from "thermite/TSceneBase";
    import { TCursorProxy } from "thermite/TCursorProxy";
    import { CEFTimeStamp } from "core/CEFTimeStamp";
    import { CEFNavEvent } from "events/CEFNavEvent";
    import DisplayObject = createjs.DisplayObject;
    import DisplayObjectContainer = createjs.Container;
    import Tween = createjs.Tween;
    import Rectangle = createjs.Rectangle;
    import Shape = createjs.Shape;
    export class TTutorContainer extends TRoot {
        fIntroVideo: boolean;
        fCVSIntro: boolean;
        fRampsIntro: boolean;
        fRampPreTest: boolean;
        fFreeResponse: number;
        fStepByStep0: boolean;
        fStepByStep1: boolean;
        fEIA: boolean;
        fEIB: boolean;
        fEIC: boolean;
        fSummaryVideo: boolean;
        fRampPostTest: boolean;
        timeStamp: CEFTimeStamp;
        playing: Array<DisplayObject>;
        isPaused: boolean;
        scenePtr: Array<TSceneBase>;
        stateStack: Array<any>;
        cCursor: TCursorProxy;
        sceneCnt: number;
        replayIndex: Array<number>;
        replayTime: number;
        Running: Array<Tween>;
        runCount: number;
        baseTime: number;
        private sceneGraph;
        containerBounds: Shape;
        nominalBounds: Rectangle;
        [key: string]: any;
        constructor();
        TTutorContainerInitialize(): void;
        initialize(): void;
        private init1();
        Destructor(): void;
        captureLOGState(): string;
        loadXML(stringSrc: any): void;
        saveXML(): string;
        captureSceneGraph(): void;
        instantiateScenePath(sceneName: string, classPath: string, sceneVisible?: boolean): any;
        instantiateScene(sceneName: string, hostModule: string, classPath: string, sceneVisible?: boolean): any;
        private initSceneTick(tarScene);
        destroyScene(sceneName: string): void;
        automateScene(sceneName: string, sceneObj: any, nameObj?: boolean): void;
        wozReplay(): void;
        wozStopPlay(): void;
        wozPause(): void;
        wozPlay(): void;
        playRemoveThis(wozObj: TRoot): void;
        playAddThis(wozObj: TRoot): void;
        showPPlay(fShow: boolean): void;
        showReplay(fShow: boolean): void;
        setCursor(sMode: string): void;
        replaceCursor(): void;
        initAutomation(): void;
        captureDefState(Tutor: any): void;
        restoreDefState(Tutor: any): void;
        doPlayBack(pbSource: any): void;
        replayStream(evt: CEFNavEvent): void;
        replayLiveStream(): void;
        private abortPlayBack(evt);
        private abortPlayBack2(evt);
        playBackByFrame(evt: Event): void;
        playBackByTime(evt: Event): void;
        dumpScenes(Tutor: any): void;
        enumScenes(): void;
        enumChildren(scene: DisplayObjectContainer, indentCnt: number): void;
        showNext(fshow: boolean): void;
        enableNext(fEnable: boolean): void;
        enableBack(fEnable: boolean): void;
        questionStart(evt: Event): void;
        questionComplete(evt: Event): void;
        goBackScene(evt: CEFNavEvent): void;
        goNextScene(evt: CEFNavEvent): void;
        goToScene(evt: CEFNavEvent): void;
        protected dumpTutors(): void;
    }
}
declare module "events/CEFActionEvent" {
    import Event = createjs.Event;
    export class CEFActionEvent extends Event {
        static readonly CHKCMD: string;
        static readonly STCCMD: string;
        static readonly INDCMD: string;
        static readonly RMPCMD: string;
        static readonly PMTCMD: string;
        static readonly NAVCMD: string;
        static readonly EFFECT: string;
        prop1: string;
        prop2: string;
        prop3: string;
        prop4: string;
        prop5: string;
        constructor(type: string, Prop1: string, Prop2?: string, Prop3?: string, Prop4?: string, Prop5?: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CEFScriptEvent" {
    import Event = createjs.Event;
    export class CEFScriptEvent extends Event {
        static readonly SCRIPT: string;
        script: any;
        constructor(type: string, _script: any, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CEFSeekEvent" {
    import Event = createjs.Event;
    export class CEFSeekEvent extends Event {
        static readonly SEEKFORWARD: string;
        static readonly SEEKBACKWARD: string;
        wozSeekSeq: string;
        constructor(type: string, SeekSeq: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "thermite/TSceneBase" {
    import { TObject } from "thermite/TObject";
    import { TTutorContainer } from "thermite/TTutorContainer";
    import { CEFActionEvent } from "events/CEFActionEvent";
    import { CEFScriptEvent } from "events/CEFScriptEvent";
    import { CEFSeekEvent } from "events/CEFSeekEvent";
    import { ILogManager } from "managers/ILogManager";
    export class TSceneBase extends TObject {
        [key: string]: any;
        fComplete: boolean;
        seekForeFunc: Array<any>;
        seekBackFunc: Array<any>;
        sceneAttempt: number;
        sceneTag: string;
        classPath: string;
        hostModule: string;
        moduleData: any;
        sceneData: any;
        protected _section: string;
        protected _nextButton: any;
        protected _prevButton: any;
        constructor();
        TSceneBaseInitialize(): void;
        initialize(): void;
        private init3();
        onCreate(): void;
        protected initUI(): void;
        connectNavButton(type: string, butComp: string, _once?: boolean): void;
        disConnectNavButton(type: string, butComp: string): void;
        effectHandler(evt: CEFActionEvent): void;
        scriptHandler(evt: CEFScriptEvent): void;
        logSceneTag(): Object;
        initAutomation(_parentScene: TSceneBase, sceneAutoObj: any, ObjIdRef: string, lLogger: ILogManager, lTutor: TTutorContainer): void;
        captureDefState(TutScene: any): void;
        restoreDefState(TutScene: any): void;
        setObjMode(TutScene: any, sMode: string): void;
        dumpSceneObjs(TutScene: any): void;
        updateNav(): void;
        questionFinished(evt: Event): void;
        questionComplete(): boolean;
        sceneReplay(evt: Event): void;
        trackPlay(): void;
        rewindScene(): void;
        preEnterScene(lTutor: any, sceneLabel: string, sceneTitle: string, scenePage: string, Direction: string): string;
        onEnterScene(Direction: string): void;
        preExitScene(Direction: string, sceneCurr: number): string;
        onExitScene(): void;
        demoBehavior(): void;
        initSeekArrays(): void;
        doSeekForward(evt: CEFSeekEvent): void;
        doSeekBackward(evt: CEFSeekEvent): void;
    }
}
declare module "thermite/TRoot" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { TSceneBase } from "thermite/TSceneBase";
    import { TTutorContainer } from "thermite/TTutorContainer";
    import MovieClip = createjs.MovieClip;
    import DisplayObjectContainer = createjs.Container;
    export class TRoot extends MovieClip {
        traceMode: boolean;
        xname: string;
        static xInstID: number;
        tutorDoc: IEFTutorDoc;
        tutorAutoObj: any;
        protected _listenerArr: Array<Function | Object>;
        parentScene: TSceneBase;
        [key: string]: any;
        constructor();
        TRootInitialize(): void;
        initialize(): void;
        private init0();
        nextXname(): string;
        Destructor(): void;
        captureXMLStructure(parentXML: string, iDepth: number): void;
        resetXML(): void;
        deSerializeObj(objData: any): void;
        saveXML(): string;
        getSymbolClone(_cloneOf: string, _named: string): string;
        logState(): string;
        IsUserDefined(): number;
        readonly captureLOGString: string;
        captureLOGState(): string;
        isDefined(prop: string): boolean;
        superPlay(): void;
        superStop(): void;
        gotoAndStop(frame: string | number): void;
        stop(): void;
        gotoAndPlay(frame: Object, scene?: string): void;
        play(): void;
        bindPlay(tutor: TTutorContainer): void;
        setTopMost(): void;
        startSession(): void;
        readonly sessionTime: string;
        dumpStage(_obj: DisplayObjectContainer, _path: string): void;
    }
}
declare module "thermite/TObjectDyno" {
    import { TRoot } from "thermite/TRoot";
    import { TSceneBase } from "thermite/TSceneBase";
    import { TTutorContainer } from "thermite/TTutorContainer";
    import { ILogManager } from "managers/ILogManager";
    export class TObjectDyno extends TRoot {
        objID: string;
        constructor();
        TObjectDynoInitialize(): void;
        initialize(): void;
        private init1();
        initAutomation(_parentScene: TSceneBase, sceneObj: Object, ObjIdRef: string, lLogger: ILogManager, lTutor: TTutorContainer): void;
    }
}
declare module "thermite/TObjectMask" {
    import { TObject } from "thermite/TObject";
    export class TObjectMask extends TObject {
        constructor();
    }
}
declare module "core/CEFTimeLine" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CEFEvent } from "events/CEFEvent";
    import Tween = createjs.Tween;
    import Timeline = createjs.Timeline;
    export class CEFTimeLine extends Timeline {
        traceMode: boolean;
        tutorDoc: IEFTutorDoc;
        tutorContainer: any;
        tutorAutoObj: any;
        targets: Array<any>;
        xnFinalize: Function;
        constructor(tweens: Tween[], labels: Object, props: Object, _tutorDoc: IEFTutorDoc);
        addTween(tween: Tween): void;
        startTransition(xnF?: Function): void;
        stopTransitions(): void;
        xnChanged(evt: CEFEvent): void;
        xnFinished(): void;
    }
}
declare module "core/CEFTransitions" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { TTutorContainer } from "thermite/TTutorContainer";
    import { CEFTimeLine } from "core/CEFTimeLine";
    import DisplayObject = createjs.DisplayObject;
    export class CEFTransitions extends CEFTimeLine {
        currScene: string;
        newScene: string;
        rTime: number;
        tTime: number;
        fSingleStep: boolean;
        private activeObjs;
        private persistObjs;
        private currentObjs;
        private fSwapObjects;
        constructor(_tutorDoc: IEFTutorDoc);
        connectToTutor(parentTutor: TTutorContainer, autoTutor: Object): void;
        resetTransitions(): void;
        walkTweens(): void;
        gotoScene(scn: string): void;
        setTransitionOUT(): void;
        setTransitionIN(objectList: any, sceneName: string): void;
        changeScene(): void;
        shallowStateCopy(tar: DisplayObject, src: DisplayObject): void;
        outFinished(): void;
        inFinished(): void;
    }
}
declare module "core/CEFNavigator" {
    import { CEFTutorDoc } from "core/CEFTutorDoc";
    import { CEFTransitions } from "core/CEFTransitions";
    import { TScene } from "thermite/TScene";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import Event = createjs.Event;
    import EventDispatcher = createjs.EventDispatcher;
    export class CEFNavigator extends EventDispatcher {
        traceMode: boolean;
        tutorDoc: CEFTutorDoc;
        tutorAutoObj: any;
        sceneCnt: number;
        xitions: CEFTransitions;
        protected _inNavigation: boolean;
        constructor(_tutorDoc: any);
        readonly iteration: string;
        readonly sceneObj: TScene;
        addScene(SceneTitle: string, ScenePage: string, SceneName: string, SceneClass: string, ScenePersist: boolean, SceneFeatures?: string): void;
        connectToTutor(parentTutor: any, autoTutor: any): void;
        protected scenePrev: number;
        protected sceneCurr: number;
        protected readonly sceneCurrINC: number;
        protected readonly sceneCurrDEC: number;
        protected sceneTitle: Array<string>;
        protected sceneSeq: Array<string>;
        protected scenePage: Array<string>;
        protected sceneName: Array<string>;
        protected sceneClass: Array<string>;
        protected scenePersist: Array<string>;
        private findSceneOrd(tarScene);
        goToScene(tarScene: string): void;
        onButtonNext(evt: TMouseEvent): void;
        recoverState(): void;
        gotoNextScene(): void;
        onButtonPrev(evt: TMouseEvent): void;
        private gotoPrevScene();
        protected doEnterNext(evt: Event): void;
        protected doEnterBack(evt: Event): void;
        protected doEnterScene(evt: Event): void;
    }
}
declare module "thermite/TObject" {
    import { TRoot } from "thermite/TRoot";
    import { TSceneBase } from "thermite/TSceneBase";
    import { TTutorContainer } from "thermite/TTutorContainer";
    import { CEFNavigator } from "core/CEFNavigator";
    import { CEFEvent } from "events/CEFEvent";
    import { ILogManager } from "managers/ILogManager";
    import Shape = createjs.Shape;
    import ColorMatrixFilter = createjs.ColorMatrixFilter;
    import DisplayObject = createjs.DisplayObject;
    export class TObject extends TRoot {
        SclickMask: Shape;
        sAuto: string;
        objID: string;
        tweenID: number;
        bTweenable: boolean;
        bSubTweenable: boolean;
        bPersist: boolean;
        private defRot;
        private defX;
        private defY;
        private defWidth;
        private defHeight;
        private defAlpha;
        private newSaturation;
        private satFrames;
        private satIncrement;
        private curSat;
        private newSat;
        private curBlur;
        private newBlur;
        private blurFrames;
        private blurIncrement;
        private blurTarget;
        private curGlow;
        private newGlow;
        private glowColor;
        private glowStage;
        private glowAlpha;
        private glowStrength;
        private glowFrames;
        private glowIncrement;
        private glowTarget;
        private _tarObj;
        protected _InitData: string;
        protected _DataSnapShot: string;
        protected _isvalid: string;
        protected _ischecked: string;
        protected _activeFeature: string;
        protected _validFeature: string;
        protected _invalidFeature: string;
        _features: string;
        _hasClickMask: boolean;
        _maskColor: string;
        _maskAlpha: string;
        private _hidden;
        navigator: CEFNavigator;
        protected onCreateScript: string;
        protected onExitScript: string;
        constructor();
        TObjectInitialize(): void;
        initialize(): void;
        private init2();
        hidden: boolean;
        features: string;
        setANDFeature(newFTR: string): void;
        setORFeature(newFTR: string): void;
        unSetFeature(ftr: string): void;
        buildObject(hostModule: string, objectClass: string, objectName: string): TObject;
        buildMask(): void;
        activeFeature: string;
        clearAllEffects(fHide?: boolean): void;
        moveChild(tarObj: string, moveX: string, moveY: string, duration?: string): void;
        moveOriginChild(tarObj: string, regx: string, regy: string, duration?: string): void;
        scaleChild(tarObj: string, scalex: string, scaley: string, duration?: string): void;
        saturateChild(tarObj: string, newState: string, duration?: string): void;
        saturateChildTo(tarObj: string, newSat: number, duration?: string): void;
        saturateObj(newState: string, duration?: string): void;
        saturateObjTo(_newSat: number, duration?: string): void;
        private saturationTimer(evt);
        adjustSaturation(s?: number): ColorMatrixFilter;
        blurChild(tarObj: string, duration?: string): void;
        blurObj(duration?: string): void;
        private blurTimer(evt);
        flashChild(tarObj: string, _glowColor: number, duration?: string): void;
        flashObj(_glowColor: number, duration?: string): void;
        private flashTimer(evt);
        showChild(tarObj: string, alphaTo?: number, autoStart?: boolean): void;
        hideChild(tarObj: string): void;
        fadeChildOff(tarObj: string, autoStart?: boolean, duration?: string): void;
        private hideDone();
        fadeChild(tarObj: string, alphaTo: string, autoStart?: boolean, duration?: string): void;
        fadeChildTo(tarObj: string, alphaTo: number, autoStart?: boolean, duration?: string): void;
        twnDone(): void;
        startTween(xnF?: () => void): void;
        deepStateCopy(src: TObject): void;
        shallowStateCopy(tar: DisplayObject, src: DisplayObject): void;
        captureDefState(tutObject: any): void;
        restoreDefState(tutObject: any): void;
        isTweenable(): boolean;
        isSubTweenable(): boolean;
        captureLogState(obj?: Object): Object;
        captureXMLState(): string;
        restoreXMLState(xmlState: string): void;
        compareXMLState(xmlState: string): boolean;
        createLogAttr(objprop: string, restart?: boolean): string;
        measure(): void;
        initAutomation(_parentScene: TSceneBase, sceneObj: any, ObjIdRef: string, lLogger: ILogManager, lTutor: TTutorContainer): void;
        setAutomationMode(sceneObj: any, sMode: string): void;
        dumpSubObjs(sceneObj: any, Indent: string): void;
        isChecked: string;
        checked: boolean;
        isValid: string;
        assertFeatures(): string;
        retractFeatures(): void;
        readonly tallyValid: string;
        assertFeature(_feature: string): void;
        retractFeature(_feature: string): void;
        valid: boolean;
        wozMouseClick(evt: CEFEvent): void;
        wozMouseMove(evt: CEFEvent): void;
        wozMouseDown(evt: CEFEvent): void;
        wozMouseUp(evt: CEFEvent): void;
        wozMouseOver(evt: CEFEvent): void;
        wozMouseOut(evt: CEFEvent): void;
        wozKeyDown(evt: CEFEvent): void;
        wozKeyUp(evt: CEFEvent): void;
        protected decodeTarget(baseObj: DisplayObject, objArray: Array<any>): DisplayObject;
        private parseOBJLog(tarObj, element);
        private constructLogName(attr);
        private setXMLProperty(tarObj, tarXML);
        private runXMLFunction(tarObj, tarXML);
        parseOBJ(tarObj: DisplayObject, factoryOBJ: any, factoryType: string): void;
        deSerializeObj(objData: any): void;
    }
}
declare module "mongo/MObject" {
    export class MObject extends Object {
        constructor();
    }
}
declare module "mongo/CObject" {
    import { MObject } from "mongo/MObject";
    export class CObject extends MObject {
        constructor();
        getValue(tarObj: Object, path: string): any;
        setValue(tarObj: Object, objPath: Array<string>, value: any): void;
    }
}
declare module "mongo/CMongo" {
    export class CMongo {
        constructor();
        static commandPacket(_source: string, _command: string, _collection: string, _query: any, _database?: string): string;
        static queryPacket(_source: string, _command: string, _collection: string, _query: any, _limit?: any, _database?: string): string;
        static recyclePacket(_source: string, _command: string, _collection: string, _query: any, recover: string): string;
        static insertPacket(_source: string, _command: string, _collection: string, _objectDoc: Object): string;
        static updatePacket(_source: string, _command: string, _collection: string, _query: any, _updateObj: Object): string;
        static unsetFieldPacket(_source: string, _command: string, _collection: string, _query: any, _updateObj: Object): string;
        private static parseUpdateFields(node, objPath?);
        static encodeAsJSON(_fields: Object, parent: Object): string;
        static encodeAsObject(host: Object, _fields: any, parent: any): Object;
        static objectBuilder(leafObj: any, pathArray: Array<string>): Object;
        static setValue(tarObj: Object, path: string, value: any): void;
    }
}
declare module "events/CDataEvent" {
    import Event = createjs.Event;
    export class CDataEvent extends Event {
        static readonly DATA: string;
        static readonly UPLOAD_COMPLETE_DATA: string;
        private traceMode;
        constructor(type?: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CIOErrorEvent" {
    import Event = createjs.Event;
    export class CIOErrorEvent extends Event {
        static readonly IO_ERROR: string;
        static readonly STANDARD_ERROR_IO_ERROR: string;
        static readonly STANDARD_INPUT_IO_ERROR: string;
        static readonly STANDARD_OUTPUT_IO_ERROR: string;
        error: string;
        constructor(type?: string, _error?: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CTextEvent" {
    import Event = createjs.Event;
    export class CTextEvent extends Event {
        static readonly COMPLETE: string;
        static readonly FAILED: string;
        text: string;
        constructor(type?: string, _text?: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CErrorEvent" {
    import { CTextEvent } from "events/CTextEvent";
    import Event = createjs.Event;
    export class CErrorEvent extends CTextEvent {
        static readonly ERROR: string;
        errorID: number;
        constructor(type?: string, _text?: string, _errorID?: number, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CSecurityErrorEvent" {
    import { CErrorEvent } from "events/CErrorEvent";
    import Event = createjs.Event;
    export class CSecurityErrorEvent extends CErrorEvent {
        static readonly SECURITY_ERROR: string;
        constructor(type?: string, _text?: string, _errorID?: number, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "network/CSocket" {
    import { CDataEvent } from "events/CDataEvent";
    import { CIOErrorEvent } from "events/CIOErrorEvent";
    import { CSecurityErrorEvent } from "events/CSecurityErrorEvent";
    export class CSocket {
        static PORT_NTP: number;
        static PORT_ARBITER: number;
        static PORT_SERVER: number;
        static PORT_LOGGER: number;
        static xmlTYPE_UNKNOWN: number;
        static xmlCLIENT_ARB: number;
        static xmlCLIENT_TED: number;
        static xmlCLIENT_SES: number;
        static xmlCLIENT_LGR: number;
        static xmlCLIENT_TUT: number;
        static xmlCLIENT_WOZ: number;
        static xmlCLIENT_NTP: number;
        static xmlSERVER_ARB: number;
        static xmlSERVER_TED: number;
        static xmlSERVER_SES: number;
        static xmlSERVER_LGR: number;
        static xmlSERVER_NTP: number;
        static xmlCLIENT_MESSAGE: string;
        static xmlSERVER_MESSAGE: string;
        static xmlADVERTISE: string;
        static xmlPUBLISH: string;
        static xmlTYPE: string;
        static xmlNAME: string;
        static xmlPRIVATE_IP: string;
        static xmlPUBLIC_IP: string;
        static xmlCONNECT_IP: string;
        static xmlNOOP: string;
        static xmlPROTOCOL_ERROR: string;
        static xmlERROR_ID: string;
        static xmlQUERY: string;
        static xmlUNKNOWN: string;
        static xmlNTP_MESSAGE: string;
        static xmlNTPT1: string;
        static xmlNTPT2: string;
        static xmlDOM_REQUEST: string;
        static xmlACK: string;
        static xmlACKSESSION: string;
        static xmlACKTERM: string;
        static xmlACKLOG: string;
        static xmlNAKLOG: string;
        static xmlACKAUTH: string;
        static xmlNAKAUTH: string;
        static xmlACKATTACH: string;
        static xmlSQLERROR: string;
        static xmlInvalidUsername: string;
        static xmlInvalidPassword: string;
        private _host;
        private _port;
        connecting: boolean;
        constructor(host?: string, port?: number);
        openSocket(hostName: string, port: number): void;
        closeSocket(): void;
        sendData(data: Object): boolean;
        private configureListeners(connect?);
        protected connectHandler(event: Event): void;
        protected closeHandler(event: Event): void;
        protected dataHandler(event: CDataEvent): void;
        protected ioErrorHandler(event: CIOErrorEvent): void;
        protected progressHandler(event: ProgressEvent): void;
        protected securityErrorHandler(event: CSecurityErrorEvent): void;
        private configureAbandonListeners(connect?);
        private abandonConnectHandler(event);
        private abandonCloseHandler(event);
        private abandonDataHandler(event);
        private abandonIoErrorHandler(event);
        private abandonProgressHandler(event);
        private abandonSecurityErrorHandler(event);
    }
}
declare module "events/CLogEvent" {
    import Event = createjs.Event;
    export class CLogEvent extends Event {
        static readonly COMPLETE: string;
        static readonly PACKET_FORWARD: string;
        static readonly SESSION_STATUS: string;
        static readonly CONNECT_STATUS: string;
        static readonly DATASTREAM_STATUS: string;
        static readonly STREAM_STATUS: string;
        static readonly QUEUE_STATUS: string;
        static readonly SEND_STATUS: string;
        static readonly STATE_MSG: string;
        static readonly PROG_MSG: string;
        static readonly STATUS_MSG: string;
        static readonly SERVER_FAILED: string;
        static readonly AUTH_SUCCESS: string;
        static readonly AUTH_FAILED: string;
        static readonly DDNS_IN_PROGRESS: string;
        static readonly DDNS_RESOLVED: string;
        static readonly DDNS_FAILED: string;
        static readonly CONNECTION_OPEN: string;
        static readonly CONNECTION_CLOSED: string;
        static readonly CONNECTION_RECYCLING: string;
        static readonly CONNECT_FAILED: string;
        static readonly CONNECTION_TERMINATED: string;
        static readonly SESSION_ABANDONED: string;
        static readonly SESSION_RESTARTED: string;
        static readonly SESSION_FLUSHED: string;
        static readonly SESSION_TERMINATED: string;
        static readonly SOCKET_OPENED: string;
        static readonly SOCKET_CLOSED: string;
        static readonly SOCKET_IOERR: string;
        static readonly SOCKET_SECERR: string;
        static readonly QUEUE_OPENED: string;
        static readonly QUEUE_CLOSED: string;
        static readonly QUEUE_CHANGED: string;
        static readonly QUEUE_WAITING: string;
        static readonly QUEUE_SENDING: string;
        static readonly QUEUE_RESET: string;
        static readonly STREAM_OPENED: string;
        static readonly STREAM_CLOSED: string;
        static readonly QUERY_SUCCESS: string;
        static readonly QUERY_FAILED: string;
        static readonly PACKET_DATA: string;
        private traceMode;
        subType: string;
        logNdx: number;
        logTtl: number;
        dataPacket: Object;
        constructor(type?: string, _subType?: string, _logNdx?: number, _logTtl?: number, _dataPacket?: Object, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CProgressEvent" {
    import Event = createjs.Event;
    export class CProgressEvent extends Event {
        private traceMode;
        static readonly PROGRESS: string;
        static readonly STANDARD_ERROR_DATA: string;
        static readonly STANDARD_INPUT_PROGRESS: string;
        static readonly STANDARD_OUTPUT_DATA: string;
        loaded: number;
        total: number;
        constructor(type?: string, _loaded?: number, _total?: number, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "network/CLogSocket" {
    import { CDataEvent } from "events/CDataEvent";
    import { CIOErrorEvent } from "events/CIOErrorEvent";
    import EventDispatcher = createjs.EventDispatcher;
    import { CProgressEvent } from "events/CProgressEvent";
    import { CSecurityErrorEvent } from "events/CSecurityErrorEvent";
    export class CLogSocket extends EventDispatcher {
        tracer: Object;
        _connected: boolean;
        constructor(host?: String, port?: number, _tracer?: Object);
        openSocket(host?: String, port?: number, _tracer?: Object): void;
        closeSocket(): void;
        sendData(dataPacket: string): void;
        readonly connected: boolean;
        protected connectHandler(event: Event): void;
        protected closeHandler(event: Event): void;
        protected dataHandler(event: CDataEvent): void;
        protected ioErrorHandler(event: CIOErrorEvent): void;
        protected progressHandler(event: CProgressEvent): void;
        protected securityErrorHandler(event: CSecurityErrorEvent): void;
    }
}
declare module "network/CLogQueue" {
    import EventDispatcher = createjs.EventDispatcher;
    export class CLogQueue extends EventDispatcher {
        protected traceMode: boolean;
        protected logTrace: boolean;
        private logEvtIndex;
        private logAckIndex;
        private logEvents;
        private jsonEvents;
        private LogSource;
        private xmlEvents;
        private lastAction;
        private lastMove;
        private fPlayBackDone;
        private playBackNdx;
        private playBackSiz;
        private _queueOpen;
        private _queueStreaming;
        private _queueMode;
        CLogQueue(): void;
        readonly queueMode: string;
        readonly isStreaming: boolean;
        readonly length: number;
        readonly Position: number;
        openQueue(): void;
        closeQueue(): void;
        startQueueStream(): void;
        stopQueueStream(): void;
        resetQueue(): void;
        restartQueue(): void;
        isQueueEmpty(): boolean;
        nextPacket(): any;
        readonly nextNdx: number;
        logEvent(dataEvt: any): void;
        ackPacket(seqID: number, reSend?: boolean): boolean;
        emitProgress(): void;
        setPlayBackSource(LogSource: any): void;
        unWrapLog(): any;
        normalizePlayBackTime(): void;
        normalizePlayBack(): void;
        getNextEventState(): number;
        getNextEvent(stateID: number, frameID: number): any;
        playBackDone(): boolean;
        getActionEvent(frameTime: number): any;
        setPlayBackDone(val: boolean): void;
        getMoveEvent(frameTime: number): any;
    }
}
declare module "network/CURLRequest" {
    export class CURLRequest {
        url: string;
        type: string;
        timeout: number;
        static readonly MIME_TEXT: string;
        static readonly MIME_HTML: string;
        static readonly MIME_JPEG: string;
        static readonly MIME_PNG: string;
        static readonly MIME_MPEG: string;
        static readonly MIME_OGG: string;
        static readonly MIME_AUDIO: string;
        static readonly MIME_MP4: string;
        static readonly MIME_APP: string;
        static readonly MIME_JSON: string;
        static readonly MIME_JS: string;
        static readonly MIME_ES: string;
        static readonly MIME_OCTET: string;
        constructor(_url: string, _type?: string, _timeout?: number);
    }
}
declare module "network/CURLLoader" {
    import { CURLRequest } from "network/CURLRequest";
    import EventDispatcher = createjs.EventDispatcher;
    export class CURLLoader extends EventDispatcher {
        request: CURLRequest;
        error: string;
        data: string;
        constructor(_request?: CURLRequest);
        loadJSON(pathToFile: string, scope: any, callback: Function): void;
        load(_request: CURLRequest, progressFn?: Function): Promise<any>;
        loadAsyncModule(progressFn: Function): Promise<any>;
    }
}
declare module "events/CDnsEvent" {
    import Event = createjs.Event;
    export class CDnsEvent extends Event {
        static readonly COMPLETE: string;
        static readonly FAILED: string;
        dnsData: string;
        constructor(type?: string, _dnsData?: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "network/CDDnsLoader" {
    import { CURLLoader } from "network/CURLLoader";
    import { CURLRequest } from "network/CURLRequest";
    export class CDDnsLoader extends CURLLoader {
        private source;
        private ddnsJSON;
        private tracer;
        constructor(request?: CURLRequest, _StextArea?: Object);
        resolveArbiter(): void;
        configureDDNSListeners(fAdd: boolean): void;
        private completeHandlerDDNS(evt);
        private progressHandlerDDNS(evt);
        private securityErrorHandlerDDNS(evt);
        private ioErrorHandlerDDNS(evt);
    }
}
declare module "events/CTimerEvent" {
    import Event = createjs.Event;
    export class CTimerEvent extends Event {
        static readonly TIMER: string;
        static readonly TIMER_COMPLETE: string;
        private traceMode;
        constructor(type?: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "managers/CLogManager" {
    import { ILogManager } from "managers/ILogManager";
    import EventDispatcher = createjs.EventDispatcher;
    export class CLogManager extends EventDispatcher implements ILogManager {
        private traceMode;
        private fdebugMode;
        private dnsLoader;
        private logSocket;
        private JSONEvents;
        private _logHostAddress;
        private _logHostPort;
        private _forcedAddress;
        private _DataStreaming;
        private _QueStreaming;
        private _logWaiting;
        private _sending;
        private _authenticating;
        private _fReconnect;
        private _isConnecting;
        private _isConnected;
        private _sessionActive;
        private _sessionID;
        private _sessionTime;
        private _sessionStatus;
        private _sessionAccount;
        private logEventTimer;
        private logTimeout;
        private _useQueue;
        _fTutorPart: string;
        tracer: object;
        private _fLogging;
        private LogSource;
        private lastAction;
        private lastMove;
        private fPlayBackDone;
        private playBackNdx;
        private playBackSiz;
        private static _instance;
        private static _logQueue;
        constructor(enforcer: SingletonObj);
        static getInstance(): ILogManager;
        useLocalHost(): void;
        private progressListener(e);
        queryTheQueue(): void;
        fLogging: number;
        account: object;
        fTutorPart: string;
        setQueueStreamState(startQueue: boolean): void;
        getQueueStreamState(): string;
        getQueueState(): string;
        connectProtocol(func: Function): void;
        disConnectProtocol(func: Function): void;
        attachTracer(_StextArea: object): void;
        connectForInterface(): void;
        connectToAuthenticate(): void;
        connectToReattach(): void;
        private indirectConnectSocket();
        private directConnectSocket();
        readonly connectionActive: boolean;
        getConnectionState(): string;
        readonly connectionActiveOrPending: boolean;
        readonly sessionID: string;
        sessionHost: string;
        sessionPort: number;
        useQueue(useQ: boolean): void;
        readonly isSessionActive: boolean;
        readonly sessionStatus: string;
        abandonSession(abandonData?: boolean, newStatus?: string): void;
        abandonSocket(abandonData?: boolean): void;
        private timeStampSession();
        private readonly sessionTime;
        submitAuthentication(logData: any): void;
        submitJSONQuery(logData: any): void;
        flushGlobalStateLocally(name: string): void;
        private generateEvent(logData, type);
        logSessionIDEvent(): void;
        logLiveEvent(logData: object): void;
        logActionEvent(logData: object): void;
        logStateEvent(logData: object): void;
        logNavEvent(logData: object): void;
        logDurationEvent(logData: any): void;
        logProgressEvent(logData: any): void;
        logTerminateEvent(): void;
        logDebugEvent(logData: any): void;
        logErrorEvent(logData: object): void;
        sendPacket(packet: any): boolean;
        private sendXMLPacket(packet);
        private sendJSONPacket(packet);
        private resetSendTimer();
        private socketTimeout(e);
        sendDebugPacket(logData: object): void;
        private ackPacket(evt);
        startDebugDataStream(): void;
        stopDebugDataStream(): void;
        private ackStream(evt);
        private startQueuedStream();
        private stopQueuedStream();
        private queueChanged(evt);
        startQueueing(): void;
        stopQueueing(): void;
        private queueCallBack(evt);
        readonly isDataStreaming: boolean;
        readonly isQueueStreaming: boolean;
        readonly queueLength: number;
        readonly queuePosition: number;
        readonly isSending: boolean;
        readonly isConnected: boolean;
        private socketConnectionHdlr(evt);
        private createSocket();
        private cleanupSocket();
        recycleConnection(fRestart: boolean): void;
        private cleanupDNSLoader();
        private DNSresolved(evt);
        private DNSfailed(evt);
        private protocolHandlerLGR(evt);
        activateSession(sessionID?: string): void;
        failSession(): void;
        setPlayBackSource(logSource: any): void;
        unWrapLog(): any;
        normalizePlayBackTime(): void;
        normalizePlayBack(): void;
        getNextEventState(): number;
        getNextEvent(stateID: number, frameID: number): any;
        playBackDone(): boolean;
        getActionEvent(frameTime: Number): any;
        setPlayBackDone(val: boolean): void;
        getMoveEvent(frameTime: Number): any;
    }
    export class SingletonObj {
    }
}
declare module "tutorgraph/CTutorConstraint" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CTutorGraph } from "tutorgraph/CTutorGraph";
    export class CTutorConstraint extends Object {
        protected tutorDoc: IEFTutorDoc;
        protected _parent: CTutorGraph;
        private _cmd;
        private _code;
        constructor(_tutorDoc: IEFTutorDoc);
        static factory(_tutorDoc: IEFTutorDoc, parent: CTutorGraph, factory: any): CTutorConstraint;
        execute(): boolean;
    }
}
declare module "tutorgraph/CTutorEdge" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CTutorGraph } from "tutorgraph/CTutorGraph";
    import { CTutorNode } from "tutorgraph/CTutorNode";
    export class CTutorEdge extends Object {
        protected tutorDoc: IEFTutorDoc;
        protected _parent: CTutorGraph;
        private _edgeConst;
        private _edgeNode;
        private _pid;
        private _cycle;
        private _prob;
        constructor(_tutorDoc: IEFTutorDoc);
        static factory(_tutorDoc: IEFTutorDoc, parent: CTutorGraph, factory: any): CTutorEdge;
        testPConstraint(): boolean;
        testConstraint(): boolean;
        followEdge(): CTutorNode;
    }
}
declare module "tutorgraph/CTutorScene" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CTutorGraph } from "tutorgraph/CTutorGraph";
    import { TTutorContainer } from "thermite/TTutorContainer";
    export class CTutorScene {
        protected tutorDoc: IEFTutorDoc;
        protected tutorContainer: TTutorContainer;
        private _parent;
        private _scene;
        _name: string;
        private _title;
        private _page;
        private _classPath;
        private _hostModule;
        private _className;
        private _features;
        private _enqueue;
        private _create;
        private _visible;
        private _persist;
        private _checkpnt;
        private _pid;
        private _cycle;
        private _prob;
        private _iteration;
        constructor(_tutorDoc: IEFTutorDoc, factory: any, parent: CTutorGraph);
        instantiateScene(): any;
        destroyScene(): void;
        features: string;
        readonly hasPFeature: boolean;
        testPFeature(): boolean;
        readonly scenename: string;
        readonly classname: string;
        readonly title: string;
        readonly isCheckPoint: boolean;
        readonly page: string;
        readonly persist: boolean;
        readonly iteration: number;
        incIteration(): number;
        enumDisplayList(): void;
    }
}
declare module "tutorgraph/CTutorNode" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CTutorGraph } from "tutorgraph/CTutorGraph";
    import { CTutorScene } from "tutorgraph/CTutorScene";
    import EventDispatcher = createjs.EventDispatcher;
    export class CTutorNode extends EventDispatcher {
        protected tutorDoc: IEFTutorDoc;
        protected _parent: CTutorGraph;
        protected _id: string;
        protected _name: string;
        protected _type: string;
        protected _edges: Array<any>;
        protected _preEnter: string;
        protected _preExit: string;
        constructor(_tutorDoc: IEFTutorDoc);
        protected nodeFactory(parent: CTutorGraph, id: string, nodefactory: any): void;
        readonly id: string;
        captureGraph(obj: Object): Object;
        restoreGraph(obj: Object): any;
        nextScene(): CTutorScene;
        nextNode(): CTutorNode;
        applyNode(): boolean;
        seekToScene(seekScene: CTutorScene): CTutorScene;
        seekToSceneByName(seekScene: string): CTutorScene;
        resetNode(): void;
    }
}
declare module "tutorgraph/CTutorAction" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CTutorNode } from "tutorgraph/CTutorNode";
    import { CTutorGraph } from "tutorgraph/CTutorGraph";
    import { CTutorScene } from "tutorgraph/CTutorScene";
    export class CTutorAction extends CTutorNode {
        private _cmnd;
        private _parms;
        constructor(_tutorDoc: IEFTutorDoc);
        static factory(_tutorDoc: IEFTutorDoc, parent: CTutorGraph, id: string, factory: any): CTutorAction;
        captureGraph(obj: Object): Object;
        restoreGraph(obj: Object): any;
        nextScene(): CTutorScene;
        applyNode(): boolean;
    }
}
declare module "tutorgraph/CTutorModule" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CTutorNode } from "tutorgraph/CTutorNode";
    import { CTutorGraph } from "tutorgraph/CTutorGraph";
    import { CTutorScene } from "tutorgraph/CTutorScene";
    export class CTutorModule extends CTutorNode {
        private _scenes;
        private _ndx;
        private _reuse;
        constructor(_tutorDoc: IEFTutorDoc);
        static factory(_tutorDoc: any, parent: CTutorGraph, id: string, moduleFactory: any, factory: any): CTutorModule;
        captureGraph(obj: any): Object;
        restoreGraph(obj: any): any;
        nextScene(): CTutorScene;
        applyNode(): boolean;
        seekToScene(seekScene: CTutorScene): CTutorScene;
        resetNode(): void;
    }
}
declare module "tutorgraph/CTutorModuleGroup" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CTutorNode } from "tutorgraph/CTutorNode";
    import { CTutorGraph } from "tutorgraph/CTutorGraph";
    import { CTutorScene } from "tutorgraph/CTutorScene";
    export class CTutorModuleGroup extends CTutorNode {
        private _modules;
        private _ndx;
        private _moduleShown;
        private _shownCount;
        private instanceNode;
        private type;
        private start;
        private show;
        private reuse;
        private onempty;
        private static SEQUENTIAL;
        private static STOCHASTIC;
        constructor(_tutorDoc: IEFTutorDoc);
        static factory(_tutorDoc: any, parent: CTutorGraph, id: string, groupFactory: any, factory: any): CTutorModuleGroup;
        captureGraph(obj: any): Object;
        restoreGraph(obj: any): any;
        initialize(): void;
        nextScene(): CTutorScene;
        applyNode(): boolean;
        seekToScene(seekScene: CTutorScene): CTutorScene;
        resetNode(): void;
    }
}
declare module "bkt/CBKTSkill" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    export class CBKTSkill {
        protected tutorDoc: IEFTutorDoc;
        Bel: number;
        pL: number;
        pT: number;
        pG: number;
        pS: number;
        constructor(_tutorDoc: IEFTutorDoc);
        static factory(_tutorDoc: IEFTutorDoc, factory: any): CBKTSkill;
        updateBelief(ans: boolean): void;
        private calcTRUE();
        private calcFALSE();
        private updatePrior(Bel);
        queryBelief(): number;
    }
}
declare module "tutorgraph/CTutorGraph" {
    import { CTutorNode } from "tutorgraph/CTutorNode";
    import { CTutorScene } from "tutorgraph/CTutorScene";
    import { CTutorConstraint } from "tutorgraph/CTutorConstraint";
    import { TObject } from "thermite/TObject";
    export class CTutorGraph extends CTutorNode {
        private _nodes;
        private _modules;
        private _actions;
        private _graphs;
        private _constraints;
        private _skillSet;
        private _currNode;
        private _currScene;
        private _prevScene;
        private _factory;
        private _pFeatures;
        private _pConstraints;
        constructor(_tutorDoc: any, factory: any);
        static factory(_tutorDoc: any, parent: CTutorGraph, id: string, factory: any): CTutorGraph;
        captureGraph(obj: any): Object;
        restoreGraph(obj: any): any;
        sceneInstance(): TObject;
        queryPFeature(pid: string, size: number, cycle: number): number;
        queryPConstraint(pid: string, size: number, cycle: number): number;
        seekTo(nxtScene: string): CTutorScene;
        seekEnd(): CTutorScene;
        applyNode(): boolean;
        seekBack(): CTutorScene;
        seekRoot(): void;
        nextScene(): CTutorScene;
        private parseNodes();
        private parseConstraints();
        recoverSkills(recoveredSkills: any): boolean;
        parseSkills(): boolean;
        findNodeByName(name: string): CTutorNode;
        findConstraintByName(name: string): CTutorConstraint;
        node: CTutorNode;
        scene: CTutorScene;
    }
}
declare module "tutorgraph/CTutorHistoryNode" {
    import { CTutorNode } from "tutorgraph/CTutorNode";
    import { CTutorScene } from "tutorgraph/CTutorScene";
    export class CTutorHistoryNode extends Object {
        node: CTutorNode;
        scene: CTutorScene;
        constructor(_node: CTutorNode, _scene: CTutorScene);
    }
}
declare module "tutorgraph/CTutorHistory" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CTutorNode } from "tutorgraph/CTutorNode";
    import { CTutorScene } from "tutorgraph/CTutorScene";
    import { CTutorHistoryNode } from "tutorgraph/CTutorHistoryNode";
    export class CTutorHistory extends Object {
        protected tutorDoc: IEFTutorDoc;
        private _history;
        private _volatile;
        private _ndx;
        constructor(_tutorDoc: IEFTutorDoc);
        push(node: CTutorNode, scene: CTutorScene): void;
        next(): CTutorHistoryNode;
        back(): CTutorHistoryNode;
        volatile: boolean;
        readonly isVolatile: boolean;
    }
}
declare module "tutorgraph/CTutorGraphNavigator" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CEFNavigator } from "core/CEFNavigator";
    import { TScene } from "thermite/TScene";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import Event = createjs.Event;
    export class CTutorGraphNavigator extends CEFNavigator {
        private _history;
        private _rootGraph;
        private _asyncTimer;
        private _tickHandler;
        private _fTutorGraph;
        private _currScene;
        private _nextScene;
        private _prevScene;
        private _xType;
        private _iterations;
        constructor(_tutorDoc: IEFTutorDoc);
        readonly sceneObj: TScene;
        readonly iteration: string;
        private updateSceneIteration();
        static rootFactory(_tutorDoc: IEFTutorDoc, factory: any): CTutorGraphNavigator;
        buttonBehavior: String;
        private enQueueTerminateEvent();
        private _asyncTerminate(e);
        onButtonNext(evt: TMouseEvent): void;
        recoverState(): void;
        gotoNextScene(): void;
        private _asyncNextScene(evt);
        private traceGraphEdge();
        onButtonPrev(evt: TMouseEvent): void;
        private seekToScene(nextScene);
        protected doEnterScene(evt: Event): void;
    }
}
declare module "core/CEFTutorDoc" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { CLogManager } from "managers/CLogManager";
    import { TTutorContainer } from "thermite/TTutorContainer";
    import { CTutorGraphNavigator } from "tutorgraph/CTutorGraphNavigator";
    import { LoaderPackage } from "util/IBootLoader";
    import EventDispatcher = createjs.EventDispatcher;
    export class CEFTutorDoc extends EventDispatcher implements IEFTutorDoc {
        traceMode: boolean;
        private isDebug;
        [key: string]: any;
        tutorContainer: TTutorContainer;
        tutorNavigator: CTutorGraphNavigator;
        name: string;
        loaderData: Array<LoaderPackage.ILoaderData>;
        logFrameID: number;
        logStateID: number;
        ktSkills: any;
        sceneGraph: any;
        tutorGraph: any;
        tutorConfig: LoaderPackage.ITutorConfig;
        language: string;
        voice: string;
        modules: Array<LoaderPackage.IModuleDescr>;
        moduleData: any;
        state: Array<string>;
        scenedata: Array<string>;
        _tutorFeatures: string;
        _modulePath: string;
        _forcedPause: boolean;
        _pFeatures: any;
        designWidth: number;
        designHeight: number;
        STAGEWIDTH: number;
        STAGEHEIGHT: number;
        _framendx: number;
        fRemoteMode: boolean;
        fDemo: boolean;
        fDebug: boolean;
        fLog: boolean;
        fDeferDemoClick: boolean;
        fTutorPart: string;
        fFullSignIn: boolean;
        fSkipAssess: boolean;
        fEnableBack: boolean;
        fForceBackButton: boolean;
        fSkillometer: boolean;
        sessionAccount: any;
        fSessionID: string;
        fSessionTime: number;
        serverUserID: number;
        fPlaybackMode: boolean;
        _log: any;
        SceneData: string;
        TutAutomator: any;
        _globals: any;
        _sceneData: any;
        _phaseData: any;
        private fFeatures;
        private fDefaults;
        constructor();
        initializeTutor(): void;
        extAccount: any;
        extFTutorPart: string;
        extFFullSignIn: string;
        extFDemo: boolean;
        extFDebug: boolean;
        extFRemoteMode: boolean;
        extFDeferDemoClick: string;
        extFSkillometer: string;
        extTutorFeatures: string;
        extmodPath: string;
        extLogManager: CLogManager;
        extForceBackButton: any;
        readonly extAspectRatio: string;
        incFrameNdx(): void;
        initGlobals(): void;
        incrGlobal(_id: string, _max?: number, _cycle?: number): number;
        assertGlobal(_id: string, _value: any): void;
        retractGlobal(_id: string): void;
        queryGlobal(_id: string): any;
        globals: Object;
        launchTutor(): void;
        resetStateFrameID(): void;
        frameID: number;
        incFrameID(): void;
        stateID: number;
        incStateID(): void;
        connectFrameCounter(fCon: boolean): void;
        doEnterFrame(evt: Event): void;
        gData: string;
        gPhase: string;
        log: any;
        resetSceneDataXML(): void;
        gForceBackButton: boolean;
        readonly gNavigator: any;
        setButtonBehavior(behavior: string): void;
        buildBootSet(targetTutor: string): void;
        buildTutorSet(): void;
        loadFileSet(): Promise<any>[];
        onLoadJson(fileLoader: LoaderPackage.ILoaderData, filedata: string): void;
        onLoadModID(fileLoader: LoaderPackage.ILoaderData, filedata: string): void;
        onLoadSceneGraphs(fileLoader: LoaderPackage.ILoaderData, filedata: string): void;
        onLoadCode(fileLoader: LoaderPackage.ILoaderData, filedata: string): void;
        onLoadFonts(fileLoader: LoaderPackage.ILoaderData, filedata: string): void;
        onLoadData(fileLoader: LoaderPackage.ILoaderData, filedata: string): void;
        setTutorDefaults(featSet: string): void;
        setTutorFeatures(featSet: string): void;
        features: string;
        addFeature: string;
        delFeature: string;
        private testFeature(element, index, arr);
        testFeatureSet(featSet: string): boolean;
        traceFeatures(): void;
    }
}
declare module "TutorEngineOne" {
    import { IEFTutorDoc } from "core/IEFTutorDoc";
    import { LoaderPackage } from "util/IBootLoader";
    import { CURLLoader } from "network/CURLLoader";
    export class CEngine {
        loader: CURLLoader;
        bootTutor: string;
        tutorDescr: LoaderPackage.IPackage;
        tutorDoc: IEFTutorDoc;
        timerID: number;
        sourcePath: string[];
        [key: string]: any;
        constructor();
        start(_bootTutorID: string): void;
        private loadBootImage();
        private loadTutorImage();
        private loadCreateJSResources();
        handleComplete(evt: any, comp: any, resolve: Function, reject: Function): void;
        handleError(evt: any, comp: any, reject: Function): void;
        mapThermiteClasses(AnLib: any, resolve: Function, reject: Function): void;
        importAndMap(AnModuleName: string, AnObject: any, classPath: string, className: string, variant: string): Promise<void>;
        private mapForeignClasses();
        startTutor(): void;
        constructTutor(): void;
    }
}
declare module "thermite/TButton" {
    import { TObject } from "thermite/TObject";
    import { CEFEvent } from "events/CEFEvent";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import MovieClip = createjs.MovieClip;
    export class TButton extends TObject {
        shape: MovieClip;
        shape_1: MovieClip;
        shape_2: MovieClip;
        shape_3: MovieClip;
        curState: string;
        fPressed: boolean;
        fEnabled: boolean;
        fOver: boolean;
        private onClickScript;
        constructor();
        TButtonInitialize(): void;
        initialize(): void;
        private init3();
        Destructor(): void;
        onAddedToStage(evt: CEFEvent): void;
        captureDefState(TutScene: TObject): void;
        restoreDefState(TutScene: TObject): void;
        captureLogState(obj?: any): TObject;
        capturestringState(): string;
        resetState(): void;
        gotoState(sState: string): void;
        muteButton(bMute: boolean): void;
        enableButton(bFlag: boolean): void;
        doMouseClicked(evt: TMouseEvent): void;
        protected doClickAction(evt: TMouseEvent): void;
        doMouseOver(evt: TMouseEvent): void;
        doMouseOut(evt: TMouseEvent): void;
        doMouseDown(evt: TMouseEvent): void;
        doMouseUp(evt: TMouseEvent): void;
        showButton(fShow: boolean): void;
        loadXML(stringSrc: any): void;
        saveXML(): string;
    }
}
declare module "controls/CEFLabelButton" {
    import { TButton } from "thermite/TButton";
    import MovieClip = createjs.MovieClip;
    export class CEFLabelButton extends TButton {
        SLabel: MovieClip;
        CEFLabelButton(): void;
        setLabel(newLabel: string): void;
    }
}
declare module "controls/CEFLabelControl" {
    import { TObject } from "thermite/TObject";
    import TextField = createjs.Text;
    export class CEFLabelControl extends TObject {
        Slabel: TextField;
        constructor();
        setLabel(newLabel: String, colour?: number): void;
    }
}
declare module "controls/CEFSkillBar" {
    import { TObject } from "thermite/TObject";
    import MovieClip = createjs.MovieClip;
    import TextField = createjs.Text;
    export class CEFSkillBar extends TObject {
        Smask: MovieClip;
        Stext: TextField;
        SprogBar: MovieClip;
        private _name;
        private _level;
        private _invlevel;
        private _position;
        constructor();
        skillName: string;
        level: number;
    }
}
declare module "events/CEFMouseEvent" {
    import MouseEvent = createjs.MouseEvent;
    export class TMouseEvent extends MouseEvent {
        tarObjID: string;
        localX: number;
        localY: number;
        static readonly MOUSE_MOVE: string;
        static readonly MOUSE_DOWN: string;
        static readonly MOUSE_UP: string;
        static readonly MOUSE_CLICK: string;
        static readonly DOUBLE_CLICK: string;
        static readonly CLICK: string;
        static readonly WOZCLICK: string;
        static readonly WOZCLICKED: string;
        static readonly WOZDBLCLICK: string;
        static readonly WOZMOVE: string;
        static readonly WOZDOWN: string;
        static readonly WOZUP: string;
        static readonly WOZOVER: string;
        static readonly WOZOUT: string;
        static readonly WOZKEYDOWN: string;
        static readonly WOZKEYUP: string;
        static readonly WOZNULL: string;
        constructor(TarObjID: string, type: string, bubbles: boolean, cancelable: boolean, stageX: number, stageY: number, nativeEvent: NativeMouseEvent, pointerID: number, primary: boolean, rawX: number, rawY: number);
        clone(): TMouseEvent;
        captureLogState(obj?: any): any;
        captureXMLState(): any;
        restoreXMLState(xmlState: any): void;
        compareXMLState(xmlState: any): Boolean;
    }
}
declare module "controls/CEFSkilloMeter" {
    import { TObject } from "thermite/TObject";
    import { CEFSkillBar } from "controls/CEFSkillBar";
    import TextField = createjs.Text;
    export class CEFSkilloMeter extends TObject {
        Stitle: TextField;
        Sskill1: CEFSkillBar;
        Sskill2: CEFSkillBar;
        Sskill3: CEFSkillBar;
        Sskill4: CEFSkillBar;
        Sskill5: CEFSkillBar;
        Sskill6: CEFSkillBar;
        private tfValue;
        constructor();
        Destructor(): void;
        updateSkill(index: number, newValue: number, tfVal: string): void;
        updateName(index: number, newName: string): void;
        title: string;
        private skillClick(evt);
    }
}
declare module "thermite/TMouseMask" {
    import { TObject } from "thermite/TObject";
    import { TMouseEvent } from "events/CEFMouseEvent";
    export class TMouseMask extends TObject {
        constructor();
        discardEvent(evt: TMouseEvent): void;
        setObjMode(dlgPanel: any, sMode: String): void;
        dumpSceneObjs(dlgPanel: any): void;
    }
}
declare module "events/CEFDialogEvent" {
    import Event = createjs.Event;
    export class CEFDialogEvent extends Event {
        result: string;
        static readonly ENDMODAL: string;
        static readonly DLGOK: string;
        static readonly DLGCANCEL: string;
        constructor(Result: string, type: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "dialogs/CEFDialogBox" {
    import { TObject } from "thermite/TObject";
    import { TMouseMask } from "thermite/TMouseMask";
    import MovieClip = createjs.MovieClip;
    import TextField = createjs.Text;
    export class CEFDialogBox extends TObject {
        Sframe: MovieClip;
        Stitle: TextField;
        sMask: TMouseMask;
        fAddDlg: boolean;
        CEFDialogBox(): void;
        setTitle(txt: string): void;
        moveDialog(X: number, Y: number): void;
        centerDialog(): void;
        doModal(accounts?: any, Alpha?: number, fAdd?: boolean): void;
        endModal(result: string): void;
        setObjMode(dlgPanel: any, sMode: string): void;
        dumpSceneObjs(dlgPanel: any): void;
    }
}
declare module "dialogs/CDialogDesignPrompt1" {
    import { CEFDialogBox } from "dialogs/CEFDialogBox";
    import { CEFLabelButton } from "controls/CEFLabelButton";
    import { TMouseEvent } from "events/CEFMouseEvent";
    import TextField = createjs.Text;
    export class CDialogDesignPrompt1 extends CEFDialogBox {
        Sbody: TextField;
        Scancel: CEFLabelButton;
        Smoveon: CEFLabelButton;
        CDialogDesignPrompt1(): void;
        Destructor(): void;
        doCancel(evt: TMouseEvent): void;
        doModal(accounts?: any, Alpha?: number, fAdd?: boolean): void;
        endModal(Result: string): void;
    }
}
declare module "events/CAuthEvent" {
    import Event = createjs.Event;
    export class CAuthEvent extends Event {
        static readonly AUTH_STATUS: string;
        static readonly AUTH_ADMIN: string;
        static readonly AUTH_USER: string;
        static readonly BOOTLDR_SUCCESS: string;
        static readonly BOOTLDR_FAILED: string;
        static readonly BOOTLDR_CANCELLED: string;
        static readonly GROUPID_SUCCESS: string;
        static readonly GROUPID_FAILED: string;
        static readonly GROUPID_CANCELLED: string;
        static readonly AUTH_SUCCESS: string;
        static readonly AUTH_FAILED: string;
        static readonly AUTH_CANCELLED: string;
        static readonly LOADER_SUCCESS: string;
        static readonly LOADER_FAILED: string;
        static readonly LOADER_CANCELLED: string;
        static readonly SUCCESS: string;
        static readonly VALIDATE: string;
        static readonly FAIL: string;
        private traceMode;
        subType: string;
        dataPacket: Object;
        constructor(type?: string, _subType?: string, _dataPacket?: Object, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CCacheEvent" {
    import Event = createjs.Event;
    export class CCacheEvent extends Event {
        static readonly READY: string;
        static readonly ERROR: string;
        collection: Array<any>;
        query_id: string;
        constructor(type: string, _target: Array<any>, _id: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CEFAutomationEvent" {
    import Event = createjs.Event;
    export class CEFAutomationEvent extends Event {
        _result: string;
        static readonly ENDPROMPT: string;
        constructor(type: string, Result: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CEFButtonEvent" {
    import Event = createjs.Event;
    export class CEFButtonEvent extends Event {
        static readonly WOZCHECKED: string;
        static readonly WOZUNCHECKED: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
    }
}
declare module "events/CEFCaptionEvent" {
    import Event = createjs.Event;
    export class CEFCaptionEvent extends Event {
        static readonly WOZCAP: string;
        _CapIndex: string;
        constructor(CapIndex: string, type?: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CEFCommandEvent" {
    import Event = createjs.Event;
    export class CEFCommandEvent extends Event {
        static readonly OBJCMD: string;
        objCmd: any;
        constructor(type: string, _objCmd: any, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CEFPropertyChangeEventKind" {
    export class CEFPropertyChangeEventKind {
        static readonly UPDATE: string;
        static readonly DELETE: string;
    }
}
declare module "events/CEFPropertyChangeEvent" {
    import Event = createjs.Event;
    export class CEFPropertyChangeEvent extends Event {
        static readonly PROPERTY_CHANGE: string;
        static createUpdateEvent(source: Object, property: Object, oldValue: Object, newValue: Object): CEFPropertyChangeEvent;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, kind?: string, property?: Object, oldValue?: Object, newValue?: Object, source?: Object);
        kind: string;
        newValue: Object;
        oldValue: Object;
        property: Object;
        source: Object;
        clone(): Event;
    }
}
declare module "events/CEFSelectEvent" {
    import Event = createjs.Event;
    export class CEFSelectEvent extends Event {
        static readonly WOZTABSELECT: string;
        static readonly WOZIMGSELECT: string;
        wozSelection: string;
        constructor(target: string, type: string, bubbles?: boolean, cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CEFTextEvent" {
    import { CEFEvent } from "events/CEFEvent";
    import Event = createjs.Event;
    export class CEFTextEvent extends CEFEvent {
        static readonly WOZSETSELECTION: string;
        static readonly WOZSETSCROLL: string;
        static readonly WOZINPUTTEXT: string;
        static readonly WOZCAPTUREFOCUS: string;
        static readonly WOZRELEASEFOCUS: string;
        textdata: string;
        index1: number;
        index2: number;
        constructor(TarObjID: string, Type: string, Index1?: number, Index2?: number, TextData?: string, Bubbles?: boolean, Cancelable?: boolean);
        clone(): Event;
    }
}
declare module "events/CEFTimerEvent" {
    import Event = createjs.Event;
    export class CEFTimerEvent extends Event {
        static readonly TIMER_COMPLETE: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
    }
}
declare module "kt/CEFBNode" {
    export class CEFBNode {
        _name: string;
        _arity: number;
        private _aritytags;
        private _vector;
        constructor();
        getValue(row: number, col: number): number;
        setValue(row: number, col: number, newVal: number): void;
        normalize(): void;
        tagToNdx(tag: string): number;
        loadXML(xmlSrc: any): void;
        saveXML(): any;
    }
}
declare module "kt/CEFKTNode" {
    import EventDispatcher = createjs.EventDispatcher;
    export class CEFKTNode extends EventDispatcher {
        private _name;
        private _pT;
        private _hypoNode;
        private _evidNode;
        private _arity;
        CEFKTNode(): void;
        newEvid: string;
        readonly predValue: number;
        private dispatchBeliefChangedEvent(oldValue);
        readonly BeliefName: string;
        readonly BeliefValue: number;
        loadXML(xmlSrc: any): void;
        saveXML(): any;
    }
}
declare module "kt/CEFProdSys" {
    export class CEFProdSys {
        wm: any;
        constructor();
        resetWorkMem(): void;
        setWorkMem(prop: string, value: string): void;
        prop(_prop: string): String;
        value(_prop: string): Boolean;
        execRules(): void;
    }
}
declare module "thermite/TCheckButton" {
    import { TButton } from "thermite/TButton";
    import { TObject } from "thermite/TObject";
    import { TMouseEvent } from "events/CEFMouseEvent";
    import MovieClip = createjs.MovieClip;
    import Text = createjs.Text;
    export class TCheckButton extends TButton {
        Schecked: MovieClip;
        Slabel: Text;
        protected fChecked: boolean;
        private _ftrChecked;
        private _ftrUnchecked;
        CheckButton(): void;
        Destructor(): void;
        highLight(color: number): void;
        label: string;
        setLabel(newLabel: string): void;
        getLabel(): string;
        showLabel: boolean;
        captureDefState(TutScene: TObject): void;
        restoreDefState(TutScene: TObject): void;
        deepStateCopy(src: any): void;
        captureLogState(obj?: any): TObject;
        captureXMLState(): any;
        resetState(): void;
        gotoState(sState: string): void;
        doMouseClick(evt: TMouseEvent): void;
        setCheck(bCheck: boolean): void;
        getChecked(): boolean;
        assertFeatures(): string;
        retractFeatures(): void;
        loadXML(xmlSrc: any): void;
        saveXML(): any;
    }
}
declare module "thermite/events/TButtonEvent" {
    import Event = createjs.Event;
    export class TButtonEvent extends Event {
        static readonly WOZCHECKED: string;
        static readonly WOZUNCHECKED: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
    }
}
declare module "thermite/TButtonGroup" {
    import { TObject } from "thermite/TObject";
    import { TButton } from "thermite/TButton";
    export class TButtonGroup extends TObject {
        buttons: Array<any>;
        buttonType: Array<string>;
        _fRadioGroup: boolean;
        private _inited;
        private onChangeScript;
        static readonly CHECKED: string;
        constructor();
        addButton(newButton: any, bType?: string): void;
        removeButton(newButton: TButton): void;
        updateGroupChk(evt: Event): void;
        updateGroupUnChk(evt: Event): void;
        protected doChangeAction(evt: Event): void;
        radioType: boolean;
        readonly isComplete: string;
        querySelectedValid(): string;
        resetAll(): void;
        highLightRightOnly(): void;
        highLightRightLabel(hColor: number): void;
        highLightWrong(): void;
        readonly isValid: string;
        assertFeatures(): string;
        retractFeatures(): void;
        readonly tallyValid: string;
        readonly tallySelected: string;
        readonly ansText: string;
        readonly inUse: boolean;
        logState(): any;
        querylogGroup(): string;
        loadXML(xmlSrc: any): void;
        saveXML(): any;
    }
}
declare module "thermite/TRadioButton" {
    import { TButtonGroup } from "thermite/TButtonGroup";
    import { TCheckButton } from "thermite/TCheckButton";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    export class TRadioButton extends TCheckButton {
        constructor();
        attachGroup(butGroup: TButtonGroup): void;
        doMouseClick(evt: TMouseEvent): void;
        setCheck(bCheck: boolean): void;
        toString(): string;
    }
}
declare module "thermite/TCheckBox" {
    import { TRadioButton } from "thermite/TRadioButton";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import MovieClip = createjs.MovieClip;
    export class TCheckBox extends TRadioButton {
        Scheck2: MovieClip;
        Scheck3: MovieClip;
        constructor();
        doMouseClick(evt: TMouseEvent): void;
        setCheck(bCheck: boolean): void;
        setCheck2(bCheck: boolean): void;
        setCheck3(bCheck: boolean): void;
        resetState(): void;
        deepStateCopy(src: any): void;
    }
}
declare module "thermite/THtmlBase" {
    import { TObject } from "thermite/TObject";
    import { CEFEvent } from "events/CEFEvent";
    export class THtmlBase extends TObject {
        protected outerContainer: HTMLElement;
        protected dimContainer: TObject;
        protected fAdded: boolean;
        protected isHTMLControl: boolean;
        protected HTMLmute: boolean;
        protected startText: string;
        protected styleElement: HTMLStyleElement;
        protected styleSheet: StyleSheet;
        protected cssSheet: any;
        protected cssDirty: any;
        protected fontSize: number;
        protected _updateVisibilityCbk: any;
        protected _updateComponentCbk: any;
        protected _lastFrame: number;
        constructor();
        THtmlBaseInitialize(): void;
        initialize(): void;
        private init3();
        Destructor(): void;
        onAddedToStage(evt: CEFEvent): void;
        addCSSRules(styleElement: HTMLStyleElement, cssStyles: any): void;
        buildRuleSet(cssRules: any): string;
        setProperty(key: string, value: string | number, force?: boolean): void;
        updateStyle(force: boolean): void;
        muteHTMLControl(mute: boolean): void;
        _handleDrawStart(evt: CEFEvent): void;
        _handleDrawEnd(evt: CEFEvent): void;
        private addCustomStyles(srcStyle, tarStyle);
        deSerializeObj(objData: any): void;
    }
}
declare module "thermite/THtmlInput" {
    import { TObject } from "thermite/TObject";
    import { THtmlBase } from "thermite/THtmlBase";
    import { CEFEvent } from "events/CEFEvent";
    import Text = createjs.Text;
    export class THtmlInput extends THtmlBase {
        SControlContainer: Text;
        SfocusBox: TObject;
        constructor();
        THtmlInputInitialize(): void;
        initialize(): void;
        private init4();
        Destructor(): void;
        onAddedToStage(evt: CEFEvent): void;
        setFocus(focus: boolean): void;
        setEnabled(enabled: boolean): void;
        fontContainsElement(attr: string, candidates: Array<string> | Array<RegExp>): any;
        decomposeFont(fontSpec: any, fontStr: string): any;
        createFont(size?: number, attributes?: Array<string>, formatting?: string, style?: string, link?: string): any;
        setOnKeyPress(): void;
        setOnKeyDown(): void;
        setOnCut(): void;
        setOnCopy(): void;
        setOnPaste(): void;
        _handleDrawEnd(evt: CEFEvent): void;
        deSerializeObj(objData: any): void;
    }
}
declare module "thermite/THtmlList" {
    import { TObject } from "thermite/TObject";
    import { THtmlBase } from "thermite/THtmlBase";
    import { CEFEvent } from "events/CEFEvent";
    export class THtmlList extends THtmlBase {
        SControlContainer: TObject;
        controlContainer: HTMLDivElement;
        constructor();
        THtmlListInitialize(): void;
        initialize(): void;
        private init4();
        Destructor(): void;
        onAddedToStage(evt: CEFEvent): void;
        deSerializeObj(objData: any): void;
    }
}
declare module "thermite/THtmlTable" {
    import { TObject } from "thermite/TObject";
    import { THtmlBase } from "thermite/THtmlBase";
    import { CEFEvent } from "events/CEFEvent";
    export class THtmlTable extends THtmlBase {
        SControlContainer: TObject;
        controlContainer: HTMLElement;
        constructor();
        THtmlTableInitialize(): void;
        initialize(): void;
        private init4();
        Destructor(): void;
        onAddedToStage(evt: CEFEvent): void;
        deSerializeObj(objData: any): void;
    }
}
declare module "thermite/THtmlText" {
    import { TObject } from "thermite/TObject";
    import { THtmlBase } from "thermite/THtmlBase";
    import { CEFEvent } from "events/CEFEvent";
    export class THtmlText extends THtmlBase {
        SControlContainer: TObject;
        STextArea: HTMLDivElement;
        controlContainer: HTMLDivElement;
        constructor();
        THtmlTextInitialize(): void;
        initialize(): void;
        private init4();
        Destructor(): void;
        onAddedToStage(evt: CEFEvent): void;
        deSerializeObj(objData: any): void;
    }
}
declare module "thermite/TTitleBar" {
    import { TObject } from "thermite/TObject";
    import { TSceneBase } from "thermite/TSceneBase";
    import { TButton } from "thermite/TButton";
    import { TTutorContainer } from "thermite/TTutorContainer";
    import { TMouseEvent } from "events/CEFMouseEvent";
    import { CEFSkilloMeter } from "controls/CEFSkilloMeter";
    import TextField = createjs.Text;
    export class TTitleBar extends TSceneBase {
        Stitle: TextField;
        Spage: TextField;
        Spause: TButton;
        Splay: TButton;
        Sreplay: TButton;
        Sskill: CEFSkilloMeter;
        Sprediction: CEFSkilloMeter;
        SdemoButton: TObject;
        static prntTutor: Object;
        private _demoInhibit;
        private _demoClicked;
        CEFTitleBar(): void;
        configDemoButton(_Tutor: TTutorContainer): void;
        doTitleClick(evt: TMouseEvent): void;
        private doDemoClick(evt);
        private doDeferedDemoClick(evt);
        onTutorPlay(evt: TMouseEvent): void;
        onTutorPause(evt: TMouseEvent): void;
        onTutorReplay(evt: TMouseEvent): void;
        setObjMode(TutScene: any, sMode: string): void;
        dumpSceneObjs(TutScene: any): void;
    }
}
declare module "thermite/scenes/CEFEndCloak" {
    import { TScene } from "thermite/TScene";
    import MovieClip = createjs.MovieClip;
    export class CEFEndCloak extends TScene {
        SbackGround: MovieClip;
        constructor();
        captureDefState(TutScene: Object): void;
        restoreDefState(TutScene: Object): void;
        preEnterScene(lTutor: Object, sceneLabel: string, sceneTitle: string, scenePage: string, Direction: string): string;
    }
}
declare module "thermite/scenes/CEFEndScene" {
    import { TScene } from "thermite/TScene";
    import { CEFEvent } from "events/CEFEvent";
    import { CEFLabelButton } from "controls/CEFLabelButton";
    import MovieClip = createjs.MovieClip;
    import TextField = createjs.Text;
    export class CEFEndScene extends TScene {
        SpostTest: MovieClip;
        SdoneButton: CEFLabelButton;
        SuploadButton: CEFLabelButton;
        Send: TextField;
        CEFEndScene(): void;
        onDoneClick(evt: CEFEvent): void;
        onPostTest(evt: CEFEvent): void;
        onUploadClick(evt: CEFEvent): void;
        captureDefState(TutScene: Object): void;
        restoreDefState(TutScene: Object): void;
    }
}
declare module "thermite/scenes/CEFNavDemo" {
    import { TScene } from "thermite/TScene";
    export class CEFNavDemo extends TScene {
        private _demoPanel;
        private _scenesShown;
        constructor();
        private gotoScene(evt);
    }
}
declare module "thermite/scenes/CEFScene0" {
    import { TScene } from "thermite/TScene";
    import MovieClip = createjs.MovieClip;
    export class CEFScene0 extends TScene {
        SbackGround: MovieClip;
        constructor();
        captureDefState(TutScene: Object): void;
        restoreDefState(TutScene: Object): void;
    }
}
declare module "thermite/scenes/CEFSceneN" {
    import { TButton } from "thermite/TButton";
    import { TScene } from "thermite/TScene";
    import { CEFEvent } from "events/CEFEvent";
    import MovieClip = createjs.MovieClip;
    export class CEFSceneN extends TScene {
        SreplaySession: TButton;
        SbackGround: MovieClip;
        CEFSceneN(): void;
        doReplay(evt: CEFEvent): void;
        captureDefState(TutScene: Object): void;
        restoreDefState(TutScene: Object): void;
    }
}
declare module "thermite/scenes/CEFStartScene" {
    import { TScene } from "thermite/TScene";
    import MovieClip = createjs.MovieClip;
    import TextField = createjs.Text;
    export class CEFStartScene extends TScene {
        Sstart: TextField;
        Sicon: MovieClip;
        CEFStartScene(): void;
        captureDefState(TutScene: Object): void;
        restoreDefState(TutScene: Object): void;
        preEnterScene(lTutor: Object, sceneLabel: string, sceneTitle: string, scenePage: string, Direction: string): string;
        onEnterScene(Direction: string): void;
        preExitScene(Direction: string, sceneCurr: number): string;
    }
}
