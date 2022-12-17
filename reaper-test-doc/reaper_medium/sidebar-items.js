window.SIDEBAR_ITEMS = {"enum":[["AccelMsgKind",""],["AcceleratorBehavior","Defines the behavior of an accelerator."],["AcceleratorPosition","Determines the position of the accelerator in the keyboard processing queue."],["ActionValueChange","Represents a value change targeted to a REAPER action."],["AddFxBehavior","Determines the behavior when adding an FX."],["AudioDeviceAttributeKey","Determines which info about the audio device shall be returned."],["AutoSeekBehavior","Describes whether to allow auto-seek or not."],["AutomationMode","Automation mode of a track."],["BookmarkRef","Something which refers to a certain marker or region."],["BufferingBehavior","Defines how REAPER will buffer when playing previews."],["ChunkCacheHint","A performance/caching hint which determines how REAPER internally gets or sets a chunk."],["EditMode","Defines an edit mode for changing send volume or pan."],["EnumPitchShiftModesResult",""],["EnvChunkName","Envelope chunk name which you can pass e.g. to `TrackAttributeKey::Env()`."],["FlexibleOwnedPcmSource","Either a REAPER PCM source or a custom one."],["FxChainVisibility","Information about visibility of an FX chain."],["FxPresetRef","Something which refers to a certain FX preset."],["FxShowInstruction","Determines if and how to show/hide a FX user interface."],["GangBehavior","Determines the gang behavior."],["GetFocusedFxResult",""],["GetLastTouchedFxResult",""],["GetParameterStepSizesResult",""],["GlobalAutomationModeOverride","Global override of track automation modes."],["HelpMode","Whether to display help text temporarily or permanently."],["InitialAction","Defines which action will be preselected when prompting for an action."],["InputMonitoringMode","Describes whether and how the recording input is monitored."],["InsertMediaFlag","Activates certain behaviors when inserting a media file."],["InsertMediaMode","Decides where to insert a media file."],["MasterTrackBehavior","Determines how to deal with the master track."],["MeasureAlignment","Defines whether to align with measure starts when playing previews."],["MeasureMode","Defines whether to ignore measures or from which measure to count."],["MessageBoxResult","Message box result informing about the user’s choice."],["MessageBoxType","Type of message box to be displayed."],["MidiImportBehavior","Determines whether to import MIDI as in-project MIDI events or not."],["NotificationBehavior","Determines which control surfaces will be informed."],["Pan","Track pan."],["PanMode","Track pan mode."],["ParamId","Identifies an FX parameter."],["Progress","Defines whether some adjustment is done or not."],["ProjectContext","Determines the project in which a function should be executed."],["ProjectPart","Part of a project that could have been affected by an undoable operation."],["ProjectRef","Something which refers to a certain project."],["PromptForActionResult","Possible result when prompting for an action."],["ReaperPointer","Validatable REAPER pointer."],["RecordArmMode","Defines whether a track is armed for recording."],["RecordingInput","Recording input of a track."],["RegistrationObject","A thing that you can register at REAPER."],["RequiredViewMode","Determines which MIDI editors to considers when targeting the last focused one."],["SectionContext","Determines the section in which an action is located."],["SendMidiTime","Decides when a MIDI message will be sent."],["SendTarget","Denotes the target of a send."],["SetTrackUiFlags","Defines which track grouping behaviors to prevent when using the `set_track_ui_*` functions."],["SoloMode","Track solo mode."],["StuffMidiMessageTarget","Determines where to route a MIDI message."],["TakeAttributeKey","Take attribute key which you can pass to `get_set_media_item_take_info()`."],["TimeMode","Time mode."],["TimeModeOverride","Override of time modes."],["TimeRangeType","Describes which kind of time range we are talking about in a REAPER project."],["ToggleActionResult",""],["TouchedParameterType","Type of a touched parameter."],["TrackArea","Area in the REAPER window where a track might be displayed."],["TrackAttributeKey","Track attribute key which you can pass to `get_set_media_track_info()`."],["TrackDefaultsBehavior","Determines how track defaults should be used."],["TrackFxChainType","Represents the type of a track FX chain."],["TrackFxLocation","Describes the current location of a track FX (assuming the track is already known)."],["TrackLocation","Type and location of a certain track."],["TrackMuteOperation","Defines how to adjust track mute state."],["TrackMuteState","Possible track polarity (phase) values."],["TrackPolarity","Possible track polarity (phase) values."],["TrackPolarityOperation","Defines how to adjust track polarity (phase)."],["TrackRecArmOperation","Defines how to adjust track arm mode."],["TrackSendAttributeKey","Track send attribute key which you can pass to `get_set_track_send_info()`."],["TrackSendCategory","Defines the kind of route."],["TrackSendDirection","Defines whether you are referring to a send or a receive."],["TrackSendRef","Reference to a track send, hardware output send or track receive."],["TrackSoloOperation","Defines which solo mode to set."],["TransferBehavior","Determines whether to copy or move something (e.g. an FX)."],["TranslateAccelResult","Describes what to do with the received keystroke."],["TypeSpecificPluginContext","Additional stuff available in the plug-in context specific to a certain plug-in type."],["UiRefreshBehavior","Determines whether to refresh the UI."],["UndoBehavior","Determines whether to create an undo point."],["UndoScope","When creating an undo point, this defines what parts of the project might have been affected by the undoable operation."],["ValueChange","Represents a change of a value (e.g. of a parameter)."],["VersionDependentFxLocation","Location of a track or take FX."],["VersionDependentTrackFxLocation","Location of a track FX."],["WindowContext","Allows one to pass a window handle to the action function."]],"fn":[["create_custom_owned_pcm_source","Unstable!!!"]],"macro":[["reaper_str","This creates a static `ReaperStr` string literal embedded in the binary."]],"mod":[["virt_keys","Contains predefined virtual keys."]],"struct":[["Accel",""],["AccelMsg",""],["AcceleratorKeyCode","A value that either refers to a character code or to a virtual key."],["AcceleratorRegister","A record which lets one get a place in the keyboard processing queue."],["AudioHookRegister","Pointer to an audio hook register."],["BookmarkId","A marker or region ID."],["BorrowedMidiEventList","A list of MIDI events borrowed from REAPER."],["BorrowedPcmSink","Borrowed (reference-only) PCM sink."],["BorrowedPcmSource","Borrowed (reference-only) PCM source."],["BorrowedProjectStateContext","Pointer to a project state context."],["BorrowedReaperPitchShift","Borrowed (reference-only) REAPER pitch shift instance."],["BorrowedReaperResample","Borrowed (reference-only) REAPER resample instance."],["Bpm","This represents a tempo measured in beats per minute."],["CommandId","A command ID."],["CountProjectMarkersResult",""],["CustomOwnedPcmSource","Represents an owned PCM source that is backed by a Rust `CustomPcmSource` trait implementation."],["Db","This represents a volume measured in decibel."],["DurationInBeats","This represents a duration expressed as positive amount of beats."],["DurationInSeconds","This represents a duration expressed as positive amount of seconds."],["EnumItems","MIDI event list iterator."],["EnumItemsResult",""],["EnumProjectMarkers3Result",""],["EnumProjectsResult",""],["ExtGetPooledMidiIdResult",""],["ExtResetArgs","Just a placeholder for upward compatibility reasons."],["ExtSetBpmAndPlayRateArgs",""],["ExtSetFocusedFxArgs",""],["ExtSetFxChangeArgs",""],["ExtSetFxEnabledArgs",""],["ExtSetFxOpenArgs",""],["ExtSetFxParamArgs",""],["ExtSetInputMonitorArgs",""],["ExtSetLastTouchedFxArgs",""],["ExtSetPanExArgs",""],["ExtSetProjectMarkerChangeArgs","Just a placeholder for upward compatibility reasons."],["ExtSetRecvPanArgs",""],["ExtSetRecvVolumeArgs",""],["ExtSetSendPanArgs",""],["ExtSetSendVolumeArgs",""],["ExtSupportsExtendedTouchArgs","Just a placeholder for upward compatibility reasons."],["ExtTrackFxPresetChangedArgs",""],["ExtendedArgs",""],["ExtensionPluginContext","Additional data available in the context of extension plug-ins."],["GetConfigVarResult",""],["GetFocusedFx2Result",""],["GetInputOutputLatencyResult",""],["GetLastMarkerAndCurRegionResult","The given indexes count both markers and regions."],["GetLoopTimeRange2Result","The given indexes count both markers and regions."],["GetMidiDevNameResult",""],["GetParamExResult","Each of these values can be negative! They are not normalized."],["GetPeakInfoArgs",""],["GetSamplesArgs",""],["GetSetArrangeView2Result","The arrange view start/end time for the given screen coordinates."],["GetTcpFxParmResult",""],["GetTouchStateArgs",""],["GetTrackUiPanResult",""],["Hidden","Represents a value which can neither be accessed nor created by the consumer."],["Hz","This represents a frequency measured in hertz (how often something happens per second)."],["IsKeyDownArgs",""],["KbdCmd","Borrowed action."],["KbdSectionInfo","Pointer to a section (in which actions can be registered)."],["LoadStateArgs",""],["LongMidiEvent","An owned MIDI event which can hold more than just the usual 3-byte short MIDI message."],["MainThreadScope","A usage scope which unlocks all functions that are safe to execute from the main thread."],["MidiEvent","An owned or borrowed MIDI event for or from REAPER."],["MidiFrameOffset","A MIDI frame offset."],["MidiInput","Pointer to a MIDI input device."],["MidiInputDeviceId","A MIDI input device ID."],["MidiMessage","An MIDI message borrowed from a REAPER MIDI event."],["MidiOutput","Pointer to a MIDI output device."],["MidiOutputDeviceId","A MIDI output device ID."],["NativeColor","An OS-dependent color."],["NativeColorResult",""],["NormalizedPlayRate","This represents a play rate measured as value between 0 and 1."],["OnAudioBufferArgs",""],["OnTrackSelectionArgs",""],["OwnedGaccelRegister","A kind of action descriptor."],["OwnedPcmSink","Owned PCM sink."],["OwnedPcmSource","Owned PCM source."],["OwnedPreviewRegister","An owned preview register."],["OwnedReaperPitchShift","Owned REAPER pitch shift instance."],["OwnedReaperResample","Owned REAPER resample instance."],["PcmSourcePeakTransfer","PCM source peak transfer."],["PcmSourceTransfer","PCM source transfer."],["PeaksClearArgs",""],["PitchShiftMode","A pitch shift mode, backed by a positive integer."],["PitchShiftSubMode","A pitch shift sub mode, backed by a positive integer."],["PlayState",""],["PlaybackSpeedFactor","This represents a play rate measured as factor of the normal play speed."],["PluginContext","This represents the context in which this REAPER plug-in runs."],["Point",""],["PositionInBeats","This represents a position expressed as an amount of beats."],["PositionInQuarterNotes","This represents a position expressed as an amount of quarter notes."],["PositionInSeconds","This represents a position expressed as amount of seconds."],["ProjectConfigVarGetOffsResult",""],["PropertiesWindowArgs",""],["QualifiedFxLocation","Location of a track or take FX including the parent track."],["RealTimeAudioThreadScope","A usage scope which unlocks all functions that are safe to execute from the real-time audio thread."],["Reaper","This is the main access point for most REAPER functions."],["ReaperFunctionError","An error which can occur when executing a REAPER function."],["ReaperLockError","An error which can occur when trying to lock a REAPER mutex."],["ReaperMutex","Mutex that works on native critical sections / mutexes exposed by the REAPER API."],["ReaperMutexGuard",""],["ReaperNormalizedFxParamValue","This represents a particular value of an FX parameter in “REAPER-normalized” form."],["ReaperPanLikeValue","This represents a value that could either be a pan or a width value."],["ReaperPanValue","This represents a pan measured in REAPER’s native pan unit."],["ReaperSession","This is the main hub for accessing medium-level API functions."],["ReaperStr","A borrowed string owned by REAPER."],["ReaperString","An owned string created by REAPER."],["ReaperStringArg","A string parameter."],["ReaperVersion","Represents a particular version of REAPER."],["ReaperVolumeValue","This represents a volume measured in REAPER’s native volume unit."],["ReaperWidthValue","This represents a width measured in REAPER’s native width unit."],["RegistrationHandle","Handle which is returned from some session functions that register something."],["ResampleMode","A resample mode, backed by a positive integer."],["RgbColor",""],["SaveStateArgs",""],["SectionId","A section ID."],["SetAutoModeArgs",""],["SetAvailableArgs",""],["SetEditCurPosOptions",""],["SetFileNameArgs",""],["SetPlayStateArgs",""],["SetRepeatStateArgs",""],["SetSourceArgs",""],["SetSurfaceMuteArgs",""],["SetSurfacePanArgs",""],["SetSurfaceRecArmArgs",""],["SetSurfaceSelectedArgs",""],["SetSurfaceSoloArgs",""],["SetSurfaceVolumeArgs",""],["SetTrackTitleArgs",""],["TimeMap2TimeToBeatsResult",""],["TimeMapGetMeasureInfoResult",""],["TimeMapQnToMeasuresResult",""],["TimeSignature","Time signature."],["TrackFxGetPresetIndexResult",""],["TrackFxGetPresetResult",""],["TranslateAccelArgs",""],["TryFromGreaterError","An error which can occur when converting from a type with a greater value range to one with a smaller one."],["VirtKey","Virtual key according to this list."],["VolumeAndPan",""],["VolumeSliderValue","This represents a volume measured as fader position."],["VstPluginContext","Additional data available in the context of VST plug-ins."]],"trait":[["AnyThread","Represents a privilege to execute functions which are safe to execute from any thread."],["AudioThreadOnly","Represents a privilege to execute functions which are only safe to execute from the real-time audio thread."],["ControlSurface","Consumers need to implement this trait in order to get notified about various REAPER events."],["CustomPcmSource","Consumers can implement this trait in order to provide own PCM source types."],["HookCommand","Consumers need to implement this trait in order to define what should happen when a certain action is invoked."],["HookCommand2","Consumers need to implement this trait in order to define what should happen when a certain MIDI CC/mousewheel action is invoked."],["HookPostCommand","Consumers need to implement this trait in order to get notified after a normal action of the main section has run."],["HookPostCommand2","Consumers need to implement this trait in order to get notified after a MIDI CC/mousewheel action has run."],["MainThreadOnly","Represents a privilege to execute functions which are only safe to execute from the main thread."],["OnAudioBuffer","Consumers need to implement this trait in order to be called back in the real-time audio thread."],["ToggleAction","Consumers need to implement this trait in order to let REAPER know if a toggleable action is currently on or off."],["TranslateAccel","Consumers need to implement this trait in order to be called back as part of the keyboard processing."]],"type":[["AudioAccessor","Pointer to an audio accessor on track or take."],["Hinstance","Pointer to a module/instance (module/instance handle)."],["Hwnd","Pointer to a window (window handle)."],["MediaItem","Pointer to an item on a track."],["MediaItemTake","Pointer to a take in an item."],["MediaTrack","Pointer to a track in a project."],["PcmSink","Pointer to a PCM sink."],["PcmSource","Pointer to a PCM source."],["ReaProject","Pointer to a project."],["ReaperPitchShift","Pointer to a REAPER pitch shift instance."],["ReaperResample","Pointer to a REAPER resample instance."],["TrackEnvelope","Pointer to an envelope on a track."]]};