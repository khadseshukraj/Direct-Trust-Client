function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-emrpage-emrpage-module"], {
  /***/
  "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js":
  /*!******************************************************************!*\
    !*** ./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js ***!
    \******************************************************************/

  /*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */

  /***/
  function node_modulesNg2FileUploadFesm2015Ng2FileUploadJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileDropDirective", function () {
      return FileDropDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileItem", function () {
      return FileItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileLikeObject", function () {
      return FileLikeObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function () {
      return FileSelectDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
      return FileUploadModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploader", function () {
      return FileUploader;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} node
     * @return {?}
     */


    function isElement(node) {
      return !!(node && (node.nodeName || node.prop && node.attr && node.find));
    }

    var FileLikeObject =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} fileOrInput
       */
      function FileLikeObject(fileOrInput) {
        _classCallCheck(this, FileLikeObject);

        this.rawFile = fileOrInput;
        /** @type {?} */

        var isInput = isElement(fileOrInput);
        /** @type {?} */

        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */

        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */

        var method = '_createFrom' + postfix;

        /** @type {?} */
        this[method](fakePathOrObject);
      }
      /**
       * @param {?} path
       * @return {?}
       */


      _createClass(FileLikeObject, [{
        key: "_createFromFakePath",
        value: function _createFromFakePath(path) {
          this.lastModifiedDate = void 0;
          this.size = void 0;
          this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
          this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
        }
        /**
         * @param {?} object
         * @return {?}
         */

      }, {
        key: "_createFromObject",
        value: function _createFromObject(object) {
          this.size = object.size;
          this.type = object.type;
          this.name = object.name;
        }
      }]);

      return FileLikeObject;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileItem =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} uploader
       * @param {?} some
       * @param {?} options
       */
      function FileItem(uploader, some, options) {
        _classCallCheck(this, FileItem);

        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;

        if (uploader.options) {
          this.method = uploader.options.method || 'POST';
          this.alias = uploader.options.itemAlias || 'file';
        }

        this.url = uploader.options.url;
      }
      /**
       * @return {?}
       */


      _createClass(FileItem, [{
        key: "upload",
        value: function upload() {
          try {
            this.uploader.uploadItem(this);
          } catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});

            this.uploader._onErrorItem(this, '', 0, {});
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "cancel",
        value: function cancel() {
          this.uploader.cancelItem(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          this.uploader.removeFromQueue(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "onBeforeUpload",
        value: function onBeforeUpload() {
          return void 0;
        }
        /**
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "onBuildForm",
        value: function onBuildForm(form) {
          return {
            form: form
          };
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "onProgress",
        value: function onProgress(progress) {
          return {
            progress: progress
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onSuccess",
        value: function onSuccess(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onError",
        value: function onError(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onCancel",
        value: function onCancel(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onComplete",
        value: function onComplete(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onBeforeUpload",
        value: function _onBeforeUpload() {
          this.isReady = true;
          this.isUploading = true;
          this.isUploaded = false;
          this.isSuccess = false;
          this.isCancel = false;
          this.isError = false;
          this.progress = 0;
          this.onBeforeUpload();
        }
        /**
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "_onBuildForm",
        value: function _onBuildForm(form) {
          this.onBuildForm(form);
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "_onProgress",
        value: function _onProgress(progress) {
          this.progress = progress;
          this.onProgress(progress);
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onSuccess",
        value: function _onSuccess(response, status, headers) {
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = true;
          this.isSuccess = true;
          this.isCancel = false;
          this.isError = false;
          this.progress = 100;
          this.index = void 0;
          this.onSuccess(response, status, headers);
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onError",
        value: function _onError(response, status, headers) {
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = true;
          this.isSuccess = false;
          this.isCancel = false;
          this.isError = true;
          this.progress = 0;
          this.index = void 0;
          this.onError(response, status, headers);
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onCancel",
        value: function _onCancel(response, status, headers) {
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = false;
          this.isSuccess = false;
          this.isCancel = true;
          this.isError = false;
          this.progress = 0;
          this.index = void 0;
          this.onCancel(response, status, headers);
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onComplete",
        value: function _onComplete(response, status, headers) {
          this.onComplete(response, status, headers);

          if (this.uploader.options.removeAfterUpload) {
            this.remove();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_prepareToUploading",
        value: function _prepareToUploading() {
          this.index = this.index || ++this.uploader._nextIndex;
          this.isReady = true;
        }
      }]);

      return FileItem;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileType =
    /*#__PURE__*/
    function () {
      function FileType() {
        _classCallCheck(this, FileType);
      }

      _createClass(FileType, null, [{
        key: "getMimeClass",

        /**
         * @param {?} file
         * @return {?}
         */
        value: function getMimeClass(file) {
          /** @type {?} */
          var mimeClass = 'application';

          if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
          } else if (file.type.match('image.*')) {
            mimeClass = 'image';
          } else if (file.type.match('video.*')) {
            mimeClass = 'video';
          } else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
          } else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
          } else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
          } else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
          } else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
          } else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
          }

          if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
          }

          return mimeClass;
        }
        /**
         * @param {?} inputFilename
         * @return {?}
         */

      }, {
        key: "fileTypeDetection",
        value: function fileTypeDetection(inputFilename) {
          /** @type {?} */
          var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'bz2': 'compress',
            'gz': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
          };
          /** @type {?} */

          var chunks = inputFilename.split('.');

          if (chunks.length < 2) {
            return 'application';
          }
          /** @type {?} */


          var extension = chunks[chunks.length - 1].toLowerCase();

          if (types[extension] === undefined) {
            return 'application';
          } else {
            return types[extension];
          }
        }
      }]);

      return FileType;
    }();
    /*  MS office  */


    FileType.mime_doc = ['application/msword', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'application/vnd.ms-word.document.macroEnabled.12', 'application/vnd.ms-word.template.macroEnabled.12'];
    FileType.mime_xsl = ['application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'];
    FileType.mime_ppt = ['application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml.template', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'];
    /* PSD */

    FileType.mime_psd = ['image/photoshop', 'image/x-photoshop', 'image/psd', 'application/photoshop', 'application/psd', 'zz-application/zz-winassoc-psd'];
    /* Compressed files */

    FileType.mime_compress = ['application/x-gtar', 'application/x-gcompress', 'application/compress', 'application/x-tar', 'application/x-rar-compressed', 'application/octet-stream', 'application/x-zip-compressed', 'application/zip-compressed', 'application/x-7z-compressed', 'application/gzip', 'application/x-bzip2'];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @return {?}
     */


    function _isFile(value) {
      return File && value instanceof File;
    }
    /**
     * @record
     */


    function Headers() {}

    if (false) {}
    /**
     * @record
     */


    function FileUploaderOptions() {}

    if (false) {}

    var FileUploader =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} options
       */
      function FileUploader(options) {
        _classCallCheck(this, FileUploader);

        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
          autoUpload: false,
          isHTML5: true,
          filters: [],
          removeAfterUpload: false,
          disableMultipart: false,
          formatDataFunction:
          /**
          * @param {?} item
          * @return {?}
          */
          function formatDataFunction(item) {
            return item._file;
          },
          formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} options
       * @return {?}
       */


      _createClass(FileUploader, [{
        key: "setOptions",
        value: function setOptions(options) {
          this.options = Object.assign(this.options, options);
          this.authToken = this.options.authToken;
          this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
          this.autoUpload = this.options.autoUpload;
          this.options.filters.unshift({
            name: 'queueLimit',
            fn: this._queueLimitFilter
          });

          if (this.options.maxFileSize) {
            this.options.filters.unshift({
              name: 'fileSize',
              fn: this._fileSizeFilter
            });
          }

          if (this.options.allowedFileType) {
            this.options.filters.unshift({
              name: 'fileType',
              fn: this._fileTypeFilter
            });
          }

          if (this.options.allowedMimeType) {
            this.options.filters.unshift({
              name: 'mimeType',
              fn: this._mimeTypeFilter
            });
          }

          for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
          }
        }
        /**
         * @param {?} files
         * @param {?=} options
         * @param {?=} filters
         * @return {?}
         */

      }, {
        key: "addToQueue",
        value: function addToQueue(files, options, filters) {
          var _this = this;

          /** @type {?} */
          var list = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var file = _step.value;
              list.push(file);
            }
            /** @type {?} */

          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          var arrayOfFilters = this._getFilters(filters);
          /** @type {?} */


          var count = this.queue.length;
          /** @type {?} */

          var addedFileItems = [];
          list.map(
          /**
          * @param {?} some
          * @return {?}
          */
          function (some) {
            if (!options) {
              options = _this.options;
            }
            /** @type {?} */


            var temp = new FileLikeObject(some);

            if (_this._isValidFile(temp, arrayOfFilters, options)) {
              /** @type {?} */
              var fileItem = new FileItem(_this, some, options);
              addedFileItems.push(fileItem);

              _this.queue.push(fileItem);

              _this._onAfterAddingFile(fileItem);
            } else {
              /** @type {?} */
              var filter = arrayOfFilters[_this._failFilterIndex];

              _this._onWhenAddingFileFailed(temp, filter, options);
            }
          });

          if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);

            this.progress = this._getTotalProgress();
          }

          this._render();

          if (this.options.autoUpload) {
            this.uploadAll();
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "removeFromQueue",
        value: function removeFromQueue(value) {
          /** @type {?} */
          var index = this.getIndexOfItem(value);
          /** @type {?} */

          var item = this.queue[index];

          if (item.isUploading) {
            item.cancel();
          }

          this.queue.splice(index, 1);
          this.progress = this._getTotalProgress();
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearQueue",
        value: function clearQueue() {
          while (this.queue.length) {
            this.queue[0].remove();
          }

          this.progress = 0;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "uploadItem",
        value: function uploadItem(value) {
          /** @type {?} */
          var index = this.getIndexOfItem(value);
          /** @type {?} */

          var item = this.queue[index];
          /** @type {?} */

          var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';

          item._prepareToUploading();

          if (this.isUploading) {
            return;
          }

          this.isUploading = true;

          /** @type {?} */
          this[transport](item);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "cancelItem",
        value: function cancelItem(value) {
          /** @type {?} */
          var index = this.getIndexOfItem(value);
          /** @type {?} */

          var item = this.queue[index];
          /** @type {?} */

          var prop = this.options.isHTML5 ? item._xhr : item._form;

          if (item && item.isUploading) {
            prop.abort();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "uploadAll",
        value: function uploadAll() {
          /** @type {?} */
          var items = this.getNotUploadedItems().filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item.isUploading;
          });

          if (!items.length) {
            return;
          }

          items.map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item._prepareToUploading();
          });
          items[0].upload();
        }
        /**
         * @return {?}
         */

      }, {
        key: "cancelAll",
        value: function cancelAll() {
          /** @type {?} */
          var items = this.getNotUploadedItems();
          items.map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.cancel();
          });
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isFile",
        value: function isFile(value) {
          return _isFile(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isFileLikeObject",
        value: function isFileLikeObject(value) {
          return value instanceof FileLikeObject;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "getIndexOfItem",
        value: function getIndexOfItem(value) {
          return typeof value === 'number' ? value : this.queue.indexOf(value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getNotUploadedItems",
        value: function getNotUploadedItems() {
          return this.queue.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item.isUploaded;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getReadyItems",
        value: function getReadyItems() {
          return this.queue.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.isReady && !item.isUploading;
          }).sort(
          /**
          * @param {?} item1
          * @param {?} item2
          * @return {?}
          */
          function (item1, item2) {
            return item1.index - item2.index;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy() {
          return void 0;
        }
        /**
         * @param {?} fileItems
         * @return {?}
         */

      }, {
        key: "onAfterAddingAll",
        value: function onAfterAddingAll(fileItems) {
          return {
            fileItems: fileItems
          };
        }
        /**
         * @param {?} fileItem
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "onBuildItemForm",
        value: function onBuildItemForm(fileItem, form) {
          return {
            fileItem: fileItem,
            form: form
          };
        }
        /**
         * @param {?} fileItem
         * @return {?}
         */

      }, {
        key: "onAfterAddingFile",
        value: function onAfterAddingFile(fileItem) {
          return {
            fileItem: fileItem
          };
        }
        /**
         * @param {?} item
         * @param {?} filter
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "onWhenAddingFileFailed",
        value: function onWhenAddingFileFailed(item, filter, options) {
          return {
            item: item,
            filter: filter,
            options: options
          };
        }
        /**
         * @param {?} fileItem
         * @return {?}
         */

      }, {
        key: "onBeforeUploadItem",
        value: function onBeforeUploadItem(fileItem) {
          return {
            fileItem: fileItem
          };
        }
        /**
         * @param {?} fileItem
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "onProgressItem",
        value: function onProgressItem(fileItem, progress) {
          return {
            fileItem: fileItem,
            progress: progress
          };
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "onProgressAll",
        value: function onProgressAll(progress) {
          return {
            progress: progress
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onSuccessItem",
        value: function onSuccessItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onErrorItem",
        value: function onErrorItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onCancelItem",
        value: function onCancelItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onCompleteItem",
        value: function onCompleteItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "onCompleteAll",
        value: function onCompleteAll() {
          return void 0;
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_mimeTypeFilter",
        value: function _mimeTypeFilter(item) {
          return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_fileSizeFilter",
        value: function _fileSizeFilter(item) {
          return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_fileTypeFilter",
        value: function _fileTypeFilter(item) {
          return !(this.options.allowedFileType && this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onErrorItem",
        value: function _onErrorItem(item, response, status, headers) {
          item._onError(response, status, headers);

          this.onErrorItem(item, response, status, headers);
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onCompleteItem",
        value: function _onCompleteItem(item, response, status, headers) {
          item._onComplete(response, status, headers);

          this.onCompleteItem(item, response, status, headers);
          /** @type {?} */

          var nextItem = this.getReadyItems()[0];
          this.isUploading = false;

          if (nextItem) {
            nextItem.upload();
            return;
          }

          this.onCompleteAll();
          this.progress = this._getTotalProgress();

          this._render();
        }
        /**
         * @protected
         * @param {?} parsedHeaders
         * @return {?}
         */

      }, {
        key: "_headersGetter",
        value: function _headersGetter(parsedHeaders) {
          return (
            /**
            * @param {?} name
            * @return {?}
            */
            function (name) {
              if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
              }

              return parsedHeaders;
            }
          );
        }
        /**
         * @protected
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_xhrTransport",
        value: function _xhrTransport(item) {
          var _this2 = this;

          /** @type {?} */
          var that = this;
          /** @type {?} */

          var xhr = item._xhr = new XMLHttpRequest();
          /** @type {?} */

          var sendable;

          this._onBeforeUploadItem(item);

          if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
          }

          if (!this.options.disableMultipart) {
            sendable = new FormData();

            this._onBuildItemForm(item, sendable);
            /** @type {?} */


            var appendFile =
            /**
            * @return {?}
            */
            function appendFile() {
              return sendable.append(item.alias, item._file, item.file.name);
            };

            if (!this.options.parametersBeforeFiles) {
              appendFile();
            } // For AWS, Additional Parameters must come BEFORE Files


            if (this.options.additionalParameter !== undefined) {
              Object.keys(this.options.additionalParameter).forEach(
              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                /** @type {?} */
                var paramVal = _this2.options.additionalParameter[key]; // Allow an additional parameter to include the filename

                if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                  paramVal = paramVal.replace('{{file_name}}', item.file.name);
                }

                sendable.append(key, paramVal);
              });
            }

            if (this.options.parametersBeforeFiles) {
              appendFile();
            }
          } else {
            sendable = this.options.formatDataFunction(item);
          }

          xhr.upload.onprogress =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);

            _this2._onProgressItem(item, progress);
          };

          xhr.onload =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */


            var response = _this2._transformResponse(xhr.response, headers);
            /** @type {?} */


            var gist = _this2._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */

            var method = '_on' + gist + 'Item';

            /** @type {?} */
            _this2[method](item, response, xhr.status, headers);

            _this2._onCompleteItem(item, response, xhr.status, headers);
          };

          xhr.onerror =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */


            var response = _this2._transformResponse(xhr.response, headers);

            _this2._onErrorItem(item, response, xhr.status, headers);

            _this2._onCompleteItem(item, response, xhr.status, headers);
          };

          xhr.onabort =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */


            var response = _this2._transformResponse(xhr.response, headers);

            _this2._onCancelItem(item, response, xhr.status, headers);

            _this2._onCompleteItem(item, response, xhr.status, headers);
          };

          xhr.open(item.method, item.url, true);
          xhr.withCredentials = item.withCredentials;

          if (this.options.headers) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.options.headers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var header = _step2.value;
                xhr.setRequestHeader(header.name, header.value);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }

          if (item.headers.length) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = item.headers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _header = _step3.value;
                xhr.setRequestHeader(_header.name, _header.value);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }

          if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
          }

          xhr.onreadystatechange =
          /**
          * @return {?}
          */
          function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
              that.response.emit(xhr.responseText);
            }
          };

          if (this.options.formatDataFunctionIsAsync) {
            sendable.then(
            /**
            * @param {?} result
            * @return {?}
            */
            function (result) {
              return xhr.send(JSON.stringify(result));
            });
          } else {
            xhr.send(sendable);
          }

          this._render();
        }
        /**
         * @protected
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "_getTotalProgress",
        value: function _getTotalProgress() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          if (this.options.removeAfterUpload) {
            return value;
          }
          /** @type {?} */


          var notUploaded = this.getNotUploadedItems().length;
          /** @type {?} */

          var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
          /** @type {?} */

          var ratio = 100 / this.queue.length;
          /** @type {?} */

          var current = value * ratio / 100;
          return Math.round(uploaded * ratio + current);
        }
        /**
         * @protected
         * @param {?} filters
         * @return {?}
         */

      }, {
        key: "_getFilters",
        value: function _getFilters(filters) {
          if (!filters) {
            return this.options.filters;
          }

          if (Array.isArray(filters)) {
            return filters;
          }

          if (typeof filters === 'string') {
            /** @type {?} */
            var names = filters.match(/[^\s,]+/g);
            return this.options.filters.filter(
            /**
            * @param {?} filter
            * @return {?}
            */
            function (filter) {
              return names.indexOf(filter.name) !== -1;
            });
          }

          return this.options.filters;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_render",
        value: function _render() {
          return void 0;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_queueLimitFilter",
        value: function _queueLimitFilter() {
          return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
        }
        /**
         * @protected
         * @param {?} file
         * @param {?} filters
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_isValidFile",
        value: function _isValidFile(file, filters, options) {
          var _this3 = this;

          this._failFilterIndex = -1;
          return !filters.length ? true : filters.every(
          /**
          * @param {?} filter
          * @return {?}
          */
          function (filter) {
            _this3._failFilterIndex++;
            return filter.fn.call(_this3, file, options);
          });
        }
        /**
         * @protected
         * @param {?} status
         * @return {?}
         */

      }, {
        key: "_isSuccessCode",
        value: function _isSuccessCode(status) {
          return status >= 200 && status < 300 || status === 304;
        }
        /**
         * @protected
         * @param {?} response
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_transformResponse",
        value: function _transformResponse(response, headers) {
          return response;
        }
        /**
         * @protected
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_parseHeaders",
        value: function _parseHeaders(headers) {
          /** @type {?} */
          var parsed = {};
          /** @type {?} */

          var key;
          /** @type {?} */

          var val;
          /** @type {?} */

          var i;

          if (!headers) {
            return parsed;
          }

          headers.split('\n').map(
          /**
          * @param {?} line
          * @return {?}
          */
          function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();

            if (key) {
              parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
          });
          return parsed;
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} filter
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_onWhenAddingFileFailed",
        value: function _onWhenAddingFileFailed(item, filter, options) {
          this.onWhenAddingFileFailed(item, filter, options);
        }
        /**
         * @protected
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_onAfterAddingFile",
        value: function _onAfterAddingFile(item) {
          this.onAfterAddingFile(item);
        }
        /**
         * @protected
         * @param {?} items
         * @return {?}
         */

      }, {
        key: "_onAfterAddingAll",
        value: function _onAfterAddingAll(items) {
          this.onAfterAddingAll(items);
        }
        /**
         * @protected
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_onBeforeUploadItem",
        value: function _onBeforeUploadItem(item) {
          item._onBeforeUpload();

          this.onBeforeUploadItem(item);
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "_onBuildItemForm",
        value: function _onBuildItemForm(item, form) {
          item._onBuildForm(form);

          this.onBuildItemForm(item, form);
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "_onProgressItem",
        value: function _onProgressItem(item, progress) {
          /** @type {?} */
          var total = this._getTotalProgress(progress);

          this.progress = total;

          item._onProgress(progress);

          this.onProgressItem(item, progress);
          this.onProgressAll(total);

          this._render();
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onSuccessItem",
        value: function _onSuccessItem(item, response, status, headers) {
          item._onSuccess(response, status, headers);

          this.onSuccessItem(item, response, status, headers);
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onCancelItem",
        value: function _onCancelItem(item, response, status, headers) {
          item._onCancel(response, status, headers);

          this.onCancelItem(item, response, status, headers);
        }
      }]);

      return FileUploader;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileSelectDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       */
      function FileSelectDirective(element) {
        _classCallCheck(this, FileSelectDirective);

        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
      }
      /**
       * @return {?}
       */


      _createClass(FileSelectDirective, [{
        key: "getOptions",
        value: function getOptions() {
          return this.uploader.options;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFilters",
        value: function getFilters() {
          return {};
        }
        /**
         * @return {?}
         */

      }, {
        key: "isEmptyAfterSelection",
        value: function isEmptyAfterSelection() {
          return !!this.element.nativeElement.attributes.multiple;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onChange",
        value: function onChange() {
          /** @type {?} */
          var files = this.element.nativeElement.files;
          /** @type {?} */

          var options = this.getOptions();
          /** @type {?} */

          var filters = this.getFilters();
          this.uploader.addToQueue(files, options, filters);
          this.onFileSelected.emit(files);

          if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
          }
        }
      }]);

      return FileSelectDirective;
    }();

    FileSelectDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng2FileSelect]'
      }]
    }];
    /** @nocollapse */

    FileSelectDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FileSelectDirective.propDecorators = {
      uploader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onFileSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['change']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileDropDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       */
      function FileDropDirective(element) {
        _classCallCheck(this, FileDropDirective);

        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
      }
      /**
       * @return {?}
       */


      _createClass(FileDropDirective, [{
        key: "getOptions",
        value: function getOptions() {
          return this.uploader.options;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFilters",
        value: function getFilters() {
          return {};
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onDrop",
        value: function onDrop(event) {
          /** @type {?} */
          var transfer = this._getTransfer(event);

          if (!transfer) {
            return;
          }
          /** @type {?} */


          var options = this.getOptions();
          /** @type {?} */

          var filters = this.getFilters();

          this._preventAndStop(event);

          this.uploader.addToQueue(transfer.files, options, filters);
          this.fileOver.emit(false);
          this.onFileDrop.emit(transfer.files);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          /** @type {?} */
          var transfer = this._getTransfer(event);

          if (!this._haveFiles(transfer.types)) {
            return;
          }

          transfer.dropEffect = 'copy';

          this._preventAndStop(event);

          this.fileOver.emit(true);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          if (
          /** @type {?} */
          this.element) {
            if (event.currentTarget ===
            /** @type {?} */
            this.element[0]) {
              return;
            }
          }

          this._preventAndStop(event);

          this.fileOver.emit(false);
        }
        /**
         * @protected
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getTransfer",
        value: function _getTransfer(event) {
          return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
        }
        /**
         * @protected
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_preventAndStop",
        value: function _preventAndStop(event) {
          event.preventDefault();
          event.stopPropagation();
        }
        /**
         * @protected
         * @param {?} types
         * @return {?}
         */

      }, {
        key: "_haveFiles",
        value: function _haveFiles(types) {
          if (!types) {
            return false;
          }

          if (types.indexOf) {
            return types.indexOf('Files') !== -1;
          } else if (types.contains) {
            return types.contains('Files');
          } else {
            return false;
          }
        }
      }]);

      return FileDropDirective;
    }();

    FileDropDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng2FileDrop]'
      }]
    }];
    /** @nocollapse */

    FileDropDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FileDropDirective.propDecorators = {
      uploader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fileOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onFileDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['drop', ['$event']]
      }],
      onDragOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['dragover', ['$event']]
      }],
      onDragLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['dragleave', ['$event']]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileUploadModule = function FileUploadModule() {
      _classCallCheck(this, FileUploadModule);
    };

    FileUploadModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [FileDropDirective, FileSelectDirective],
        exports: [FileDropDirective, FileSelectDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng2-file-upload.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-clinic-user-mapping/dt-clinic-user-mapping.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-clinic-user-mapping/dt-clinic-user-mapping.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmrpageComponentDtClinicUserMappingDtClinicUserMappingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-wrapper\">\r\n    <!--<div class=\"page-header\" style=\"margin-left: 10px;\">\r\n        <span>Referral Page</span>\r\n    </div>-->\r\n    <div class=\"row action-card-row\" style=\"overflow:auto;\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"page-header\">\r\n                <span>Clinic Mapping</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <!--<div class=\"float-right createreferrer\">\r\n                <button mat-button class=\"primary-button-2\" (click)=\"OpenCreateReferrerModal()\">Create Referrer</button>\r\n\r\n            </div>-->\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row action-card-row\">\r\n        <!--style=\"overflow:auto;max-height:calc(100vh - 105px);\"-->\r\n        <div class=\"pagewidth\">\r\n\r\n            <mat-tab-group class=\"personalization-tab-group\" [@.disabled]=\"true\">\r\n                <mat-tab label=\"Mapped Clinic\" #spendPoolHigh class=\"spend-pool-high-tab\">\r\n                    <div class=\"referrercontainer\">\r\n                        <div class=\"col-sm-12\">\r\n                            <form #clinicForm=\"ngForm\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-4\">\r\n                                        <mat-form-field class=\"fullwidth\">\r\n                                            <mat-label>Clinics</mat-label>\r\n                                            <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\" required [(ngModel)]=\"selectClinicName\" />\r\n\r\n                                            <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n                                                <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                                                    {{option.ClinicName}}\r\n                                                </mat-option>\r\n                                            </mat-autocomplete>\r\n                                            <!--<mat-error *ngIf=\"clinicname.hasError('required')\">\r\n                clinic name is required.\r\n            </mat-error>-->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <mat-form-field class=\"fullwidth\">\r\n                                            <input matInput placeholder=\"Email\" required name=\"UserEmailInput\" [(ngModel)]=\"dtclinicmappingsselect.EmailId\"\r\n                                                   #UserEmailInput=\"ngModel\" email maxlength=\"60\">\r\n                                            <mat-error *ngIf=\"UserEmailInput.hasError('required') || UserEmailInput.errors?.email\">\r\n                                                Invalid Email Address.\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <!--<div class=\"col-sm-3\">\r\n                                       \r\n                                        <mat-form-field><input matInput placeholder=\"UserPassword\" name=\"UserPasswordInput\" #UserPasswordInput=\"ngModel\" maxlength=\"10\"\r\n                                                               [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"dtclinicmappingsselect.ClinicUserPassword\" required>\r\n                                        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                        <mat-error *ngIf=\"UserPasswordInput.hasError('required')\">Enter your password</mat-error></mat-form-field>\r\n                                    </div>-->\r\n                                    <div class=\"col-sm-4\" style=\"margin-top: 8px;\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"SaveMapping()\">\r\n                                            Save\r\n                                        </button>\r\n                                        &nbsp;\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"clearControls()\">\r\n                                            Reset\r\n                                        </button>\r\n                                    </div>\r\n                                    <!--<div class=\"col-sm-2\" style=\"margin-top: 8px;\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-ion-icon btn-circle mx-3\" (click)=\"clearControls()\">\r\n            <ion-icon name=\"arrow-forward\">Reset</ion-icon>\r\n        </button>\r\n    </div>-->\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"referrercontainer\">\r\n                        <table mat-table [dataSource]=\"angularDataSourcefound\">\r\n                            <!-- Position Column -->\r\n                            <ng-container matColumnDef=\"ClinicNo\">\r\n                                <th mat-header-cell *matHeaderCellDef>\r\n                                    Clinic No\r\n\r\n                                </th>\r\n                                <td mat-cell *matCellDef=\"let element\" [title]=\"element.ClinicNo\" class=\"width-20-percent\"> {{element.ClinicNo | limitCharacters : 60}} </td>\r\n                            </ng-container>\r\n\r\n                            <!-- Name Column -->\r\n                            <ng-container matColumnDef=\"ClinicName\">\r\n                                <th mat-header-cell *matHeaderCellDef> Clinic Name </th>\r\n                                <td mat-cell *matCellDef=\"let element\" [title]=\"element.ClinicName\" class=\"width-30-percent\"> {{element.ClinicName | limitCharacters : 60}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"EmailId\">\r\n                                <th mat-header-cell *matHeaderCellDef> Email </th>\r\n                                <td mat-cell *matCellDef=\"let element\" [title]=\"element.EmailId\" class=\"width-30-percent\"> {{element.EmailId | limitCharacters : 60}} </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"Actions\" sticky>\r\n                                <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                                <td mat-cell *matCellDef=\"let element;let i = index;\" class=\"width-20-percent\">\r\n                                    <!-- <a fxFlexFill href=\"\" class=\"mat-row-link\" (click)=\"!!getPersonalizationDetails()\">EDIT</a> -->\r\n                                    <!--<button mat-button [matMenuTriggerFor]=\"menu\">\r\n        <span fxFlexFill href=\"\" matTooltip=\"Setting\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n              class=\"mat-row-link icon-copy table-action-icons\">\r\n        </span>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n\r\n\r\n        <span style=\"display:block\">\r\n            <a fxFlexFill href=\"\" matTooltip=\"Remove Mapping\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n               class=\"mat-row-link icon-delete table-action-icons\"\r\n               (click)=\"!!RemoveMapping(element.ClinicNo)\">\r\n                Remove\r\n            </a>\r\n        </span>\r\n\r\n    </mat-menu>-->\r\n                                    <span style=\"display:block\">\r\n                                        <a fxFlexFill href=\"\" title=\"Edit Mapping\"\r\n                                           class=\"mat-row-link table-action-icons\"\r\n                                           (click)=\"!!EditMapping(element.ClinicNo)\">\r\n                                            <ion-icon name=\"create-outline\" class=\"iconsize-medium handcursor\"></ion-icon>\r\n                                        </a>\r\n                                    \r\n                                        <a fxFlexFill href=\"\" title=\"Remove Mapping\"\r\n                                           class=\"mat-row-link table-action-icons\"\r\n                                           (click)=\"!!RemoveMapping(element.ClinicNo)\">\r\n                                            <ion-icon name=\"trash-outline\" class=\"iconsize-medium handcursor\"></ion-icon>\r\n                                        </a>\r\n                                    </span>\r\n\r\n                                </td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                        </table>\r\n                        <mat-toolbar *ngIf=\"noRecordsMessage1 != ''\" class=\"no-records-message\"> {{ noRecordsMessage1 }} </mat-toolbar>\r\n                    </div>\r\n                    <mat-paginator *ngIf=\"dtclinicmappingsFound?.TotalRecords > 0\"\r\n                                   [length]=\"dtclinicmappingsFound?.TotalRecords\"\r\n                                   [pageIndex]=\"dtclinicmappingsFound?.CurrentPage\"\r\n                                   [pageSize]=\"dtclinicmappingsFound?.PageSize\"\r\n                                   [pageSizeOptions]=\"pageSizeOptions\"\r\n                                   (page)=\"pageEvent = getPaginationfoundData($event);\"\r\n                                   showFirstLastButtons>\r\n                    </mat-paginator>\r\n                </mat-tab>\r\n                <mat-tab label=\"Unmapped Clinic\" #spendPoolHigh class=\"spend-pool-high-tab\">\r\n                    <div class=\"referrercontainer\">\r\n                        <table mat-table [dataSource]=\"angularDataSource\">\r\n                            <!-- Position Column -->\r\n                            <ng-container matColumnDef=\"ClinicNo\">\r\n                                <th mat-header-cell *matHeaderCellDef>\r\n                                    Clinic No\r\n\r\n                                </th>\r\n                                <td mat-cell *matCellDef=\"let element\" [title]=\"element.ClinicNo\" class=\"width-20-percent\"> {{element.ClinicNo | limitCharacters : 60}} </td>\r\n                            </ng-container>\r\n\r\n                            <!-- Name Column -->\r\n                            <ng-container matColumnDef=\"ClinicName\">\r\n                                <th mat-header-cell *matHeaderCellDef> Clinic Name </th>\r\n                                <td mat-cell *matCellDef=\"let element\" [title]=\"element.ClinicName\" class=\"width-40-percent\"> {{element.ClinicName | limitCharacters : 60}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"EmailId\">\r\n                                <th mat-header-cell *matHeaderCellDef> Email </th>\r\n                                <td mat-cell *matCellDef=\"let element\" [title]=\"element.EmailId\" class=\"width-40-percent\"> {{element.EmailId | limitCharacters : 60}} </td>\r\n                            </ng-container>\r\n                            \r\n\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns1; sticky: true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\"></tr>\r\n                        </table>\r\n                        <mat-toolbar *ngIf=\"noRecordsMessage2 != ''\" class=\"no-records-message\"> {{ noRecordsMessage2 }} </mat-toolbar>\r\n                    </div>\r\n                    <mat-paginator *ngIf=\"dtclinicmappings?.TotalRecords > 0\"\r\n                                   [length]=\"dtclinicmappings?.TotalRecords\"\r\n                                   [pageIndex]=\"dtclinicmappings?.CurrentPage\"\r\n                                   [pageSize]=\"dtclinicmappings?.PageSize\"\r\n                                   [pageSizeOptions]=\"pageSizeOptions\"\r\n                                   (page)=\"pageEvent = getPaginationData($event);\"\r\n                                   showFirstLastButtons>\r\n                    </mat-paginator>\r\n                </mat-tab>\r\n\r\n            </mat-tab-group>\r\n        </div>\r\n\r\n    </div>\r\n    </div>\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n    <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-patient-referral-processed/dt-patient-referral-processed.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-patient-referral-processed/dt-patient-referral-processed.component.html ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmrpageComponentDtPatientReferralProcessedDtPatientReferralProcessedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-wrapper\">\r\n    <!--<div class=\"page-header\" style=\"margin-left: 10px;\">\r\n        <span>Referral Page</span>\r\n    </div>-->\r\n    <div class=\"row action-card-row\" style=\"overflow:auto;\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"page-header\">\r\n                <span>Processed Messages</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <!--<div class=\"float-right createreferrer\">\r\n                <button mat-button class=\"primary-button-2\" (click)=\"OpenCreateReferrerModal()\">Create Referrer</button>\r\n\r\n            </div>-->\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row action-card-row\" style=\"overflow:auto;max-height:calc(100vh - 105px);\">\r\n        <div class=\"pagewidth\">\r\n\r\n           \r\n                    <div class=\"referrercontainer\">\r\n                        <table mat-table [dataSource]=\"angularDataSource\">\r\n                            <!-- Position Column -->\r\n                            <ng-container matColumnDef=\"From\">\r\n                                <th mat-header-cell *matHeaderCellDef>\r\n                                    From\r\n\r\n                                </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"> {{element.From}} </td>\r\n                            </ng-container>\r\n\r\n                            <!-- Name Column -->\r\n                            <ng-container matColumnDef=\"To\">\r\n                                <th mat-header-cell *matHeaderCellDef> To </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"> {{element.To}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Received\">\r\n                                <th mat-header-cell *matHeaderCellDef> Received</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"width-10-percent\"> {{element.Received_TimeStamp | date: 'EEE, MMMM d, yyyy h:mm a'}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Subject\">\r\n                                <th mat-header-cell *matHeaderCellDef> Subject </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"width-30-percent\"> {{element.Subject}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Status\">\r\n                                <th mat-header-cell *matHeaderCellDef> Status</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"width-10-percent\"> {{element.Status}} </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"Processed\">\r\n                                <th mat-header-cell *matHeaderCellDef> Processed</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"width-10-percent\"> {{element.Processed_TimeStamp | date: 'EEE, MMMM d, yyyy h:mm a'}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Action\">\r\n                                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"width-10-percent\">\r\n                                    <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"unprocessReferral(element.ID)\">\r\n\r\n        Return\r\n    </button>-->\r\n                                    <a fxFlexFill href=\"\" title=\"Move to Inbox\" *ngIf=\"element.Status=='Rejected'\"\r\n                                       class=\"mat-row-link table-action-icons\" style=\"text-align:center;\"\r\n                                       (click)=\"!!unprocessReferral(element.ID)\">\r\n                                        <ion-icon name=\"arrow-undo-outline\" class=\"iconsize-medium handcursor\"></ion-icon>\r\n                                    </a>\r\n                                    <a fxFlexFill href=\"\" title=\"Detail View\" \r\n                                       class=\"mat-row-link table-action-icons\" style=\"text-align:center;\"\r\n                                       (click)=\"!!getMessageDetail(element,'referralprocessed')\">\r\n                                        <ion-icon name=\"book-outline\" class=\"iconsize-medium handcursor\"></ion-icon>\r\n                                    </a>\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" \r\n                                [ngClass]=\"{hovered: row.hovered,read: row.IsRead==null || loggedInUserDetails.Roles.trim().toLowerCase() != 'front desk',highlighted: selection.isSelected (row)}\"\r\n                            (mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"></tr>\r\n                        </table>\r\n                        <mat-toolbar *ngIf=\"noRecordsMessage1 != ''\" class=\"no-records-message\"> {{ noRecordsMessage1 }} </mat-toolbar>\r\n                    </div>\r\n                    <mat-paginator *ngIf=\"dtprocessedPatients?.TotalRecords > 0\"\r\n                                   [length]=\"dtprocessedPatients?.TotalRecords\"\r\n                                   [pageIndex]=\"dtprocessedPatients?.CurrentPage\"\r\n                                   [pageSize]=\"dtprocessedPatients?.PageSize\"\r\n                                   [pageSizeOptions]=\"pageSizeOptions\"\r\n                                   (page)=\"pageEvent = getPaginationData($event);\"\r\n                                   showFirstLastButtons>\r\n                    </mat-paginator>\r\n               \r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n    <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-patient-referral-wip/dt-patient-referral-wip.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-patient-referral-wip/dt-patient-referral-wip.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmrpageComponentDtPatientReferralWipDtPatientReferralWipComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-wrapper\">\r\n    <!--<div class=\"page-header\" style=\"margin-left: 10px;\">\r\n        <span>Referral Page</span>\r\n    </div>-->\r\n    <div class=\"row action-card-row\" style=\"overflow:auto;\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"page-header\">\r\n                <span>WIP Messages</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <!--<div class=\"float-right createreferrer\">\r\n                <button mat-button class=\"primary-button-2\" (click)=\"OpenCreateReferrerModal()\">Create Referrer</button>\r\n\r\n            </div>-->\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row action-card-row\" style=\"overflow:auto;max-height:calc(100vh - 105px);\">\r\n        <div class=\"pagewidth\">\r\n\r\n            <mat-tab-group class=\"personalization-tab-group\" [@.disabled]=\"true\">\r\n                <mat-tab label=\"Match Not Found\" #spendPoolHigh class=\"spend-pool-high-tab\">\r\n                    <div class=\"referrercontainer\">\r\n                        <table mat-table [dataSource]=\"angularDataSource\">\r\n                            <!-- Position Column -->\r\n                            <ng-container matColumnDef=\"FirstName\">\r\n                                <th mat-header-cell *matHeaderCellDef>\r\n                                    First Name\r\n\r\n                                </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.FirstName}} </td>\r\n                            </ng-container>\r\n\r\n                            <!-- Name Column -->\r\n                            <ng-container matColumnDef=\"LastName\">\r\n                                <th mat-header-cell *matHeaderCellDef> Last Name </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.LastName}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"City\">\r\n                                <th mat-header-cell *matHeaderCellDef> City </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.City}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"State\">\r\n                                <th mat-header-cell *matHeaderCellDef> State</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.State}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"DOB\">\r\n                                <th mat-header-cell *matHeaderCellDef> DOB</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.DOB}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"ReceptionistComments\">\r\n                                <th mat-header-cell *matHeaderCellDef> Receptionist Comments</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.ReceptionistComments}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Actions\" sticky>\r\n                                <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                                <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                    <!-- <a fxFlexFill href=\"\" class=\"mat-row-link\" (click)=\"!!getPersonalizationDetails()\">EDIT</a> -->\r\n                                    <button mat-button [matMenuTriggerFor]=\"menu\">\r\n                                        <span fxFlexFill href=\"\" matTooltip=\"Setting\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                                              class=\"mat-row-link icon-copy table-action-icons\">\r\n                                        </span>\r\n                                    </button>\r\n                                    <mat-menu #menu=\"matMenu\">\r\n                                        <!--<button mat-menu-item (click)=\"!!getReferrerDetail(element.RefID)\">Item 1</button>-->\r\n                                        <span style=\"display:block\">\r\n                                            <a fxFlexFill href=\"\" matTooltip=\"Accept\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                                               class=\"mat-row-link icon-copy table-action-icons\"\r\n                                               (click)=\"!!CreatePatient(element.ID)\">\r\n                                                Accept\r\n                                            </a>\r\n                                        </span>\r\n                                        <span style=\"display:block\">\r\n                                            <a fxFlexFill href=\"\" matTooltip=\"Reject\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                                               class=\"mat-row-link icon-delete table-action-icons\"\r\n                                               (click)=\"!!RejectPatient(element.ID)\">\r\n                                                Reject\r\n                                            </a>\r\n                                        </span>\r\n                                        <!--<button mat-menu-item (click)=\"!!deleteDetails(element.RefID,element.RefEmailID)\">Item 2</button>-->\r\n                                    </mat-menu>\r\n                                </td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                        </table>\r\n                        <mat-toolbar *ngIf=\"noRecordsMessage1 != ''\" class=\"no-records-message\"> {{ noRecordsMessage1 }} </mat-toolbar>\r\n                    </div>\r\n                    <mat-paginator *ngIf=\"dtwipPatients?.TotalRecords > 0\"\r\n                                   [length]=\"dtwipPatients?.TotalRecords\"\r\n                                   [pageIndex]=\"dtwipPatients?.CurrentPage\"\r\n                                   [pageSize]=\"dtwipPatients?.PageSize\"\r\n                                   [pageSizeOptions]=\"pageSizeOptions\"\r\n                                   (page)=\"pageEvent = getPaginationData($event);\"\r\n                                   showFirstLastButtons>\r\n                    </mat-paginator>\r\n                </mat-tab>\r\n                <mat-tab label=\"Match Found\" #spendPoolHigh class=\"spend-pool-high-tab\">\r\n                    <div class=\"referrercontainer\">\r\n                        <table mat-table [dataSource]=\"angularDataSourcefound\">\r\n                            <!-- Position Column -->\r\n                            <ng-container matColumnDef=\"FirstName\">\r\n                                <th mat-header-cell *matHeaderCellDef>\r\n                                    First Name\r\n\r\n                                </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.FirstName}} </td>\r\n                            </ng-container>\r\n\r\n                            <!-- Name Column -->\r\n                            <ng-container matColumnDef=\"LastName\">\r\n                                <th mat-header-cell *matHeaderCellDef> Last Name </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.LastName}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"City\">\r\n                                <th mat-header-cell *matHeaderCellDef> City </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.City}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"State\">\r\n                                <th mat-header-cell *matHeaderCellDef> State</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.State}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"DOB\">\r\n                                <th mat-header-cell *matHeaderCellDef> DOB</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.DOB}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"ReceptionistComments\">\r\n                                <th mat-header-cell *matHeaderCellDef> Receptionist Comments</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.ReceptionistComments}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Actions\" sticky>\r\n                                <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                                <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                    <!-- <a fxFlexFill href=\"\" class=\"mat-row-link\" (click)=\"!!getPersonalizationDetails()\">EDIT</a> -->\r\n                                    <button mat-button [matMenuTriggerFor]=\"menu\">\r\n                                        <span fxFlexFill href=\"\" matTooltip=\"Setting\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                                              class=\"mat-row-link icon-copy table-action-icons\">\r\n                                        </span>\r\n                                    </button>\r\n                                    <mat-menu #menu=\"matMenu\">\r\n                                        <!--<button mat-menu-item (click)=\"!!getReferrerDetail(element.RefID)\">Item 1</button>-->\r\n                                        <span style=\"display:block\">\r\n                                            <a fxFlexFill href=\"\" matTooltip=\"Create\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                                               class=\"mat-row-link icon-copy table-action-icons\"\r\n                                               (click)=\"!!CreatePatient(element.ID)\">\r\n                                                Create\r\n                                            </a>\r\n                                        </span>\r\n                                        <span style=\"display:block\">\r\n                                            <a fxFlexFill href=\"\" matTooltip=\"Import\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                                               class=\"mat-row-link icon-add-line table-action-icons\"\r\n                                               (click)=\"!!ImportPatient(element.ID)\">\r\n                                                Import\r\n                                            </a>\r\n                                        </span>\r\n                                        <!--<button mat-menu-item (click)=\"!!deleteDetails(element.RefID,element.RefEmailID)\">Item 2</button>-->\r\n                                    </mat-menu>\r\n                                </td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns1; sticky: true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\"></tr>\r\n                        </table>\r\n                        <mat-toolbar *ngIf=\"noRecordsMessage2 != ''\" class=\"no-records-message\"> {{ noRecordsMessage2 }} </mat-toolbar>\r\n                    </div>\r\n                    <mat-paginator *ngIf=\"dtwipPatientsFound?.TotalRecords > 0\"\r\n                                   [length]=\"dtwipPatientsFound?.TotalRecords\"\r\n                                   [pageIndex]=\"dtwipPatientsFound?.CurrentPage\"\r\n                                   [pageSize]=\"dtwipPatientsFound?.PageSize\"\r\n                                   [pageSizeOptions]=\"pageSizeOptions\"\r\n                                   (page)=\"pageEvent = getPaginationDataFound($event);\"\r\n                                   showFirstLastButtons>\r\n                    </mat-paginator>\r\n                </mat-tab>\r\n\r\n            </mat-tab-group>\r\n        </div>\r\n\r\n        </div>\r\n    </div>\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n    <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-plan-care-processed/dt-plan-care-processed.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-plan-care-processed/dt-plan-care-processed.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmrpageComponentDtPlanCareProcessedDtPlanCareProcessedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-wrapper\">\r\n    <!--<div class=\"page-header\" style=\"margin-left: 10px;\">\r\n        <span>Referral Page</span>\r\n    </div>-->\r\n    <div class=\"row action-card-row\" style=\"overflow:auto;\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"page-header\">\r\n                <span>POC Processed</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <!--<div class=\"float-right createreferrer\">\r\n                <button mat-button class=\"primary-button-2\" (click)=\"OpenCreateReferrerModal()\">Create Referrer</button>\r\n\r\n            </div>-->\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row action-card-row\" style=\"overflow:auto;max-height:calc(100vh - 105px);\">\r\n        <div class=\"pagewidth\">\r\n\r\n            <mat-tab-group class=\"personalization-tab-group\" [@.disabled]=\"true\">\r\n                <mat-tab label=\"POC Approved\" #spendPoolHigh class=\"spend-pool-high-tab\">\r\n                   \r\n                        <div class=\"referrercontainer\">\r\n                            <table mat-table [dataSource]=\"angularDataSourceProcessed\">\r\n                                <!-- Position Column -->\r\n                                <ng-container matColumnDef=\"From\">\r\n                                    <th mat-header-cell *matHeaderCellDef>\r\n                                        From\r\n\r\n                                    </th>\r\n                                    <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"> {{element.From}} </td>\r\n                                </ng-container>\r\n\r\n                                <!-- Name Column -->\r\n                                <ng-container matColumnDef=\"To\">\r\n                                    <th mat-header-cell *matHeaderCellDef> To </th>\r\n                                    <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"> {{element.To}} </td>\r\n                                </ng-container>\r\n\r\n\r\n                                <ng-container matColumnDef=\"Received\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Received</th>\r\n                                    <td mat-cell *matCellDef=\"let element\" class=\"width-10-percent\"> {{element.Received_TimeStamp | date: 'EEE, MMMM d, yyyy h:mm a'}} </td>\r\n                                </ng-container>\r\n                                <ng-container matColumnDef=\"Subject\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Subject </th>\r\n                                    <td mat-cell *matCellDef=\"let element\" class=\"width-30-percent\"> {{element.Subject}} </td>\r\n                                </ng-container>\r\n                                <ng-container matColumnDef=\"Status\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                                    <td mat-cell *matCellDef=\"let element\" class=\"width-10-percent\"> {{element.Status}} </td>\r\n                                </ng-container>\r\n                                <ng-container matColumnDef=\"Processed\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Processed</th>\r\n                                    <td mat-cell *matCellDef=\"let element\" class=\"width-10-percent\"> {{element.Processed_TimeStamp | date: 'EEE, MMMM d, yyyy h:mm a'}} </td>\r\n                                </ng-container>\r\n\r\n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"!!getMessageDetail(row,'pocprocessed')\"\r\n                                     [ngClass]=\"{hovered: row.hovered || loggedInUserDetails.Roles.trim().toLowerCase() != 'front desk',highlighted: selection.isSelected (row)}\"\r\n                            (mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"></tr>\r\n                            </table>\r\n                            <mat-toolbar *ngIf=\"noRecordsMessage2 != ''\" class=\"no-records-message\"> {{ noRecordsMessage2 }} </mat-toolbar>\r\n                        </div>\r\n                        <mat-paginator *ngIf=\"dtprocessedPocs?.TotalRecords > 0\"\r\n                                       [length]=\"dtprocessedPocs?.TotalRecords\"\r\n                                       [pageIndex]=\"dtprocessedPocs?.CurrentPage\"\r\n                                       [pageSize]=\"dtprocessedPocs?.PageSize\"\r\n                                       [pageSizeOptions]=\"pageSizeOptions\"\r\n                                       (page)=\"pageEvent = getPaginationData($event);\"\r\n                                       showFirstLastButtons>\r\n                        </mat-paginator>\r\n                    \r\n\r\n                </mat-tab>\r\n                <mat-tab label=\"POC Declined\" #spendPoolHigh class=\"spend-pool-high-tab\">\r\n                \r\n                        <div class=\"referrercontainer\">\r\n                            <table mat-table [dataSource]=\"angularDataSourceDeclined\">\r\n                                <!-- Position Column -->\r\n                                <ng-container matColumnDef=\"From\">\r\n                                    <th mat-header-cell *matHeaderCellDef>\r\n                                        From\r\n\r\n                                    </th>\r\n                                    <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"> {{element.From}} </td>\r\n                                </ng-container>\r\n\r\n                                <!-- Name Column -->\r\n                                <ng-container matColumnDef=\"To\">\r\n                                    <th mat-header-cell *matHeaderCellDef> To </th>\r\n                                    <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"> {{element.To}} </td>\r\n                                </ng-container>\r\n\r\n\r\n                                <ng-container matColumnDef=\"Received\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Received</th>\r\n                                    <td mat-cell *matCellDef=\"let element\" class=\"width-10-percent\"> {{element.Received_TimeStamp | date: 'EEE, MMMM d, yyyy h:mm a'}} </td>\r\n                                </ng-container>\r\n                                <ng-container matColumnDef=\"Subject\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Subject </th>\r\n                                    <td mat-cell *matCellDef=\"let element\" class=\"width-30-percent\"> {{element.Subject}} </td>\r\n                                </ng-container>\r\n                                <ng-container matColumnDef=\"Status\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                                    <td mat-cell *matCellDef=\"let element\" class=\"width-10-percent\"> {{element.Status}} </td>\r\n                                </ng-container>\r\n                                <ng-container matColumnDef=\"Processed\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Processed</th>\r\n                                    <td mat-cell *matCellDef=\"let element\" class=\"width-10-percent\"> {{element.Processed_TimeStamp | date: 'EEE, MMMM d, yyyy h:mm a'}} </td>\r\n                                </ng-container>\r\n\r\n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"!!getMessageDetail(row,'declinedprocessed')\"\r\n                                     [ngClass]=\"{hovered: row.hovered || loggedInUserDetails.Roles.trim().toLowerCase() != 'front desk',highlighted: declinedselection.isSelected (row)}\"\r\n                            (mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"></tr>\r\n                            </table>\r\n                            <mat-toolbar *ngIf=\"noRecordsMessage1 != ''\" class=\"no-records-message\"> {{ noRecordsMessage1 }} </mat-toolbar>\r\n                        </div>\r\n                        <mat-paginator *ngIf=\"dtdeclinedPocs?.TotalRecords > 0\"\r\n                                       [length]=\"dtdeclinedPocs?.TotalRecords\"\r\n                                       [pageIndex]=\"dtdeclinedPocs?.CurrentPage\"\r\n                                       [pageSize]=\"dtdeclinedPocs?.PageSize\"\r\n                                       [pageSizeOptions]=\"pageSizeOptions\"\r\n                                       (page)=\"pageEvent = getPaginationData($event);\"\r\n                                       showFirstLastButtons>\r\n                        </mat-paginator>\r\n                   \r\n\r\n                </mat-tab>\r\n\r\n            </mat-tab-group>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n    <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-sent-poc/dt-sent-poc.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-sent-poc/dt-sent-poc.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmrpageComponentDtSentPocDtSentPocComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-wrapper\">\r\n    <!--<div class=\"page-header\" style=\"margin-left: 10px;\">\r\n        <span>Referral Page</span>\r\n    </div>-->\r\n    <div class=\"row action-card-row\" style=\"overflow:auto;\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"page-header\">\r\n                <span>Poc Sent For Approval</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <!--<div class=\"float-right createreferrer\">\r\n                <button mat-button class=\"primary-button-2\" (click)=\"OpenCreateReferrerModal()\">Create Referrer</button>\r\n\r\n            </div>-->\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row action-card-row\" style=\"overflow:auto;max-height:calc(100vh - 105px);\">\r\n        <div class=\"pagewidth\">\r\n\r\n\r\n            <div class=\"referrercontainer\">\r\n                <table mat-table [dataSource]=\"angularDataSource\">\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"From\">\r\n                        <th mat-header-cell *matHeaderCellDef>\r\n                            From\r\n\r\n                        </th>\r\n                        <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"> {{element.From}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"To\">\r\n                        <th mat-header-cell *matHeaderCellDef> To </th>\r\n                        <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"> {{element.To}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"Subject\">\r\n                        <th mat-header-cell *matHeaderCellDef> Subject </th>\r\n                        <td mat-cell *matCellDef=\"let element\" class=\"width-40-percent\"> {{element.Subject}} </td>\r\n                    </ng-container>\r\n                   \r\n                    <ng-container matColumnDef=\"Sent\">\r\n                        <th mat-header-cell *matHeaderCellDef> Sent</th>\r\n                        <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"> {{element.Sent_TimeStamp}} </td>\r\n                    </ng-container>\r\n                   \r\n\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n                        (click)=\"!!getMessageDetail(row,'pocsentforapproval')\"\r\n                                     [ngClass]=\"{hovered: row.hovered || loggedInUserDetails.Roles.trim().toLowerCase() != 'front desk',highlighted: selection.isSelected (row)}\"\r\n                            (mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"></tr>\r\n                </table>\r\n                <mat-toolbar *ngIf=\"noRecordsMessage1 != ''\" class=\"no-records-message\"> {{ noRecordsMessage1 }} </mat-toolbar>\r\n            </div>\r\n            <mat-paginator *ngIf=\"dtSentPocs?.TotalRecords > 0\"\r\n                           [length]=\"dtSentPocs?.TotalRecords\"\r\n                           [pageIndex]=\"dtSentPocs?.CurrentPage\"\r\n                           [pageSize]=\"dtSentPocs?.PageSize\"\r\n                           [pageSizeOptions]=\"pageSizeOptions\"\r\n                           (page)=\"pageEvent = getPaginationData($event);\"\r\n                           showFirstLastButtons>\r\n            </mat-paginator>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n    <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtincoming-message-detail/admin-dialog.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtincoming-message-detail/admin-dialog.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmrpageComponentDtincomingMessageDetailAdminDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div mat-dialog-container style=\"overflow-x: hidden; margin: -18px;\">\r\n    <div class=\"personalization-header-div\" style=\"background:#5dbcd2;height: 35px;color:white;font-weight:300;\">\r\n        {{defaultValues.FileName}}\r\n\r\n        <button mat-button class=\"float-right close-button\" (click)=\"closeDialog()\" tabindex=\"-1\" style=\"margin-top: -6px;margin-right: -22px;\">\r\n            <span style=\"font-size:25px;\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <!--<form #alloDataForm=\"ngForm\">-->\r\n    <div class=\"personalization-tab-div\">\r\n\r\n        <div style=\"height:320px;overflow-y:hidden;width:100%;overflow-x: hidden;padding:10px;\">\r\n\r\n            <div class=\"row personalization-rows\" style=\"height: 195px;\">\r\n                <div class=\"col-sm-12\" style=\"white-space:pre;\">\r\n\r\n                    <!--<pre lang=\"xml\">{{defaultValues.FileData}}</pre>-->\r\n                    <!--<pre style=\"margin-bottom: 0rem !important;\">\r\n    <code [highlight]=\"defaultValues.FileData\" style=\"margin-top:-15px;margin-bottom:-30px;\"></code>\r\n    </pre>-->\r\n                    <div class=\"row personalization-rows\">\r\n                        <div class=\"col-sm-12\">\r\n                            <label for=\"birthtime\">\r\n                                <span class=\"label-font\">Title</span>:\r\n                                {{xmlclass.title}}\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row personalization-rows\">\r\n                        <div class=\"col-sm-4\">\r\n                            <label for=\"firstname\">\r\n                                <span class=\"label-font\">First name </span>: {{xmlclass.firstName}}\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <label for=\"firstname\">\r\n                                <span class=\"label-font\">Last name </span>: {{xmlclass.lastName}}\r\n                            </label>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row personalization-rows\">\r\n                        <div class=\"col-sm-12\">\r\n                            <label for=\"birthtime\">\r\n                                <span class=\"label-font\">Birth Date </span>:\r\n                                {{xmlclass.birthTime| date: 'MMMM d, yyyy'}}\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row personalization-rows\">\r\n                        <div class=\"col-sm-12\">\r\n                            <label for=\"address\">\r\n                              \r\n                                    <span class=\"label-font\">Address </span>:\r\n                               \r\n\r\n                                <span  *ngIf=\"xmlclass.city\">\r\n\r\n                                    {{xmlclass.streetAddressLine}}, {{xmlclass.city}}, {{xmlclass.state}}, {{xmlclass.country}} - {{xmlclass.postalCode}}\r\n                                </span>\r\n\r\n\r\n\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row personalization-rows\">\r\n                        <div class=\"col-sm-4\">\r\n                            <label for=\"Phone\">\r\n                                <span class=\"label-font\">HP Phone </span>: {{xmlclass.phoneHP | phone:'US'}}\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <label for=\"Phone\">\r\n                                <span class=\"label-font\">WP Phone </span>: {{xmlclass.phoneWP | phone:'US'}}\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <label for=\"Phone\">\r\n                                <span class=\"label-font\">MC Phone </span>: {{xmlclass.phoneMC | phone:'US'}}\r\n                            </label>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row personalization-rows\">\r\n                        <div class=\"col-sm-12\">\r\n                            <label for=\"mrn\">\r\n                                <span class=\"label-font\">External MRN </span>: {{xmlclass.mrn}}\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                  \r\n                    <div class=\"row personalization-rows solidborder-top\">\r\n                        <div class=\"col-sm-12\">\r\n                            <label for=\"doctor\">\r\n                                <span class=\"label-font\">Doctor </span>: {{xmlclass.doctorInfo}}\r\n                            </label>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row personalization-rows\">\r\n                        <div class=\"col-sm-12\">\r\n                            <label for=\"npi\">\r\n                                <span class=\"label-font\">NPI </span>: {{xmlclass.npinumber}}\r\n                            </label>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row personalization-rows\">\r\n                        <div class=\"col-sm-4\">\r\n                            <label for=\"clinic\">\r\n                                <span class=\"label-font\">Clinic/Hospital </span>: {{xmlclass.referrerClinic}}\r\n                            </label>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                </div>\r\n                </div>\r\n            <div class=\"row personalization-rows\" style=\"padding-top:70px;\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"float-right\" style=\"padding-right: 24px;\">\r\n                        <button class=\"btn btn-primary\" (click)=\"viewMore()\">Read raw XML</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n   \r\n    <!-- </form>-->\r\n</div>\r\n\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n  <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtincoming-message-detail/dtincoming-message-detail.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtincoming-message-detail/dtincoming-message-detail.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmrpageComponentDtincomingMessageDetailDtincomingMessageDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-wrapper\">\r\n\r\n    <!--<div class=\"row action-card-row\" style=\"overflow:auto;\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"page-header\">\r\n                <span>Message Details </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n\r\n        </div>\r\n    </div>-->\r\n\r\n\r\n    <div>\r\n        <!--style=\"overflow:scroll; height: calc(110vh - 160px);overflow-x: hidden;\"-->\r\n        <aw-wizard class=\"mt-5\" #wizard [navBarLayout]=\"'large-filled-symbols'\" style=\"margin-top: 0px !important\">\r\n            <aw-wizard-step [stepTitle]=\"'Steptitle 1'\" [navigationSymbol]=\"{ symbol: 'Start' }\">\r\n                <ng-template awWizardStepTitle>\r\n                    <span class=\"hidden-sm-down\"></span>\r\n\r\n                </ng-template>\r\n                <div class=\"centered-content\">\r\n                    <div>\r\n                        <form #mainscreenfrom=\"ngForm\">\r\n                            <div class=\"row action-card-row\">\r\n                                <!--style=\"max-height:calc(110vh - 105px);overflow-x: hidden;\"-->\r\n                                <div class=\"referrercontainer\">\r\n                                    <!--<form #alloDataForm=\"ngForm\">-->\r\n                                    <div class=\"personalization-tab-div\">\r\n\r\n                                        <div class=\"row personalization-rows\">\r\n                                            <div class=\"float-right createreferrer\">\r\n\r\n\r\n                                            </div>\r\n                                        </div>\r\n\r\n\r\n                                        <div class=\"row personalization-rows paddingbottom\">\r\n\r\n                                            <div class=\"col-sm-4\">\r\n                                                <!--<mat-form-field class=\"fullwidth\">\r\n                                                    <input matInput placeholder=\"From\" required name=\"From\" [(ngModel)]=\"DTincomingmessagedetail.From\"\r\n                                                           [disabled]=\"true\">\r\n                                                </mat-form-field>-->\r\n                                                <label for=\"From\">\r\n                                                    <span class=\"label-font\">From </span>: {{DTincomingmessagedetail.From}}\r\n                                                </label>\r\n\r\n                                                <!--<input type=\"text\" style=\"border: 0;box-shadow: none;\" class=\"form-control noborderText\" name=\"From\" id=\"From\" [disabled]=\"true\" [(ngModel)]=\"DTincomingmessagedetail.From\">-->\r\n                                            </div>\r\n                                            <!--<label for=\"To\" class=\"col-sm-1 col-form-label\">To</label>-->\r\n                                            <div class=\"col-sm-4\">\r\n                                                <!--<mat-form-field class=\"fullwidth\">\r\n                                                    <input matInput placeholder=\"To\" required name=\"To\" [(ngModel)]=\"DTincomingmessagedetail.To\"\r\n                                                           [disabled]=\"true\">\r\n\r\n                                                </mat-form-field>-->\r\n                                                <label for=\"To\"><span class=\"label-font\">To </span>: {{DTincomingmessagedetail.To}}</label>\r\n                                                <!--<input type=\"text\" style=\"border: 0;box-shadow: none;\" class=\"form-control noborderText\" name=\"To\" id=\"To\" [disabled]=\"true\" [(ngModel)]=\"DTincomingmessagedetail.To\">-->\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-4\">\r\n\r\n\r\n                                                <!--<mat-form-field class=\"fullwidth\">\r\n                                                    <input matInput placeholder=\"Received\" required name=\"Received\" [(ngModel)]=\"DTincomingmessagedetail.Received\"\r\n                                                           maxlength=\"60\" [disabled]=\"true\">\r\n\r\n                                                </mat-form-field>-->\r\n                                                <label for=\"Received\"><span class=\"label-font\">Received </span>: {{DTincomingmessagedetail.Received | date: 'EEE, MMMM d, yyyy h:mm a'}}</label>\r\n                                                <!--<input type=\"text\" style=\"border: 0;box-shadow: none;\" class=\"form-control noborderText\" name=\"Received\" id=\"Received\" [disabled]=\"true\" [(ngModel)]=\"DTincomingmessagedetail.Received\">-->\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row personalization-rows paddingbottom\">\r\n\r\n                                            <div class=\"col-sm-12\">\r\n                                                <label for=\"Subject\">\r\n                                                    <span class=\"label-font\">Subject </span>: {{DTincomingmessagedetail.Subject}}\r\n                                                </label>\r\n                                                <!--<mat-form-field class=\"fullwidth\">\r\n                                                    <input matInput placeholder=\"Subject\" required name=\"From\" [(ngModel)]=\"DTincomingmessagedetail.Subject\"\r\n                                                           [disabled]=\"true\">\r\n\r\n                                                </mat-form-field>-->\r\n                                                <!--<input type=\"text\" style=\"border: 0;box-shadow: none;\" class=\"form-control noborderText\" name=\"Subject\" id=\"Subject\"\r\n                                                [disabled]=\"true\" [(ngModel)]=\"DTincomingmessagedetail.Subject\">-->\r\n                                            </div>\r\n                                            <!--<div class=\"col-sm-6\">\r\n\r\n                                                <section class=\"example-section\">\r\n                                                    <mat-slide-toggle class=\"example-margin\" name=\"MessageProcessed\"\r\n                                                                      [color]=\"color\"\r\n                                                                      [checked]=\"DTincomingmessagedetail.MessageProcessed\"\r\n                                                                      [(ngModel)]=\"DTincomingmessagedetail.MessageProcessed\" [disabled]=\"true\">\r\n                                                        Message Processed\r\n                                                    </mat-slide-toggle>\r\n                                                </section>\r\n                                            </div>-->\r\n\r\n                                        </div>\r\n                                        <div class=\"row personalization-rows form-group paddingbottom\">\r\n                                            <div class=\"col-sm-12\">\r\n                                                <span class=\"label-font\">\r\n                                                    File Attachments/Choose One :\r\n                                                </span>\r\n                                                <div *ngFor=\"let option of DTIncomingXML.XMLattachment\" class=\"form-check form-check-inline\">\r\n                                                    <!--<input id=\"option.InComingMessageID_{{option.FileName}}\" type=\"radio\" name=\"fileradio\" required\r\n                                                    [(ngModel)]=\"selectedfile\" [value]='option.InComingMessageID'\r\n                                                    (change)=\"selectionfunction(option)\">-->\r\n\r\n                                                    <input type=\"radio\" name=\"fileradio\" required\r\n                                                           [value]='option.InComingMessageID' [checked]='option.IsSelected'\r\n                                                           (change)=\"selectionfunction(option)\">\r\n\r\n                                                    <label class=\"form-check-label handcursor\" title=\"View File\">\r\n                                                        <span><img src=\"../../../../../assets/images/xml-icon1.png\" style=\"height:22px;\" /></span>\r\n                                                        <span class=\"link-decoration\" (click)=\"OpenXMLView(option)\">{{option.FileName}}</span>\r\n\r\n                                                    </label>\r\n\r\n                                                </div>\r\n                                                <div *ngIf=\"(DTincomingmessagedetailprocessed?.FileName==undefined ||\r\n                                                     DTincomingmessagedetailprocessed?.FileName==null) && mainscreenfrom.submitted\"\r\n                                                     class=\"text-danger\">\r\n\r\n                                                    choose a file.\r\n\r\n                                                </div>\r\n\r\n                                                <!--<div class=\"radio\">\r\n                                                    <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Option 1</label>\r\n                                                    <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Option 2</label>\r\n                                                    <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Option 3</label>\r\n                                                </div>-->\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"row personalization-rows paddingbottom\">\r\n\r\n                                            <div class=\"col-sm-12\">\r\n                                                <!--<mat-form-field class=\"fullwidth\">\r\n                                                    <textarea matInput placeholder=\"MessageBody\" required name=\"MessageBody\" [(ngModel)]=\"DTincomingmessagedetail.MessageBody\"\r\n                                                         cols=\"100\"     [disabled]=\"true\"></textarea>\r\n\r\n                                                </mat-form-field>-->\r\n                                                <label for=\"exampleFormControlTextarea1\" class=\"label-font\">Message :</label>\r\n                                                <textarea class=\"form-control\" id=\"MessageBody\" readonly name=\"MessageBody\" rows=\"9\"\r\n                                                          [(ngModel)]=\"DTincomingmessagedetail.MessageBody\"></textarea>\r\n                                            </div>\r\n\r\n                                        </div>\r\n\r\n                                        <div class=\"row personalization-rows\">\r\n\r\n                                            <div class=\"col-sm-6\">\r\n                                                <!--<mat-form-field class=\"fullwidth\">\r\n                                                    <mat-label>Action to be performed</mat-label>\r\n                                                    <mat-select [(ngModel)]=\"DTincomingmessagedetail.Action\" name=\"message_operation_Input\" #OperationInput=\"ngModel\" (selectionChange)=\"OnItemChange($event.value)\" required>\r\n                                                        <mat-option *ngFor=\"let act of actionxml\" [value]=\"act.value\">\r\n                                                            {{act.viewValue}}\r\n                                                        </mat-option>\r\n                                                    </mat-select>\r\n\r\n                                                </mat-form-field>-->\r\n\r\n                                                <div style=\"display: flex;\">\r\n                                                    <label style=\"width:300px;\" class=\"label-font\">Process Message As :</label>\r\n                                                    <select class=\"form-control\" name=\"message_operation_Input\" [(ngModel)]=\"DTincomingmessagedetail.Action\"\r\n                                                            #message_operation_Input=\"ngModel\" (ngModelChange)=\"OnItemChange($event)\" required>\r\n                                                        <!--<option [value]=null>Select</option>-->\r\n                                                        <option *ngFor=\"let act of actionxml\" [value]=\"act.value\">{{act.viewValue}}</option>\r\n\r\n                                                    </select>\r\n\r\n                                                    <!--{{message_operation_Input.valid}}\r\n                                                    {{message_operation_Input.pristine}}\r\n                                                    {{message_operation_Input.invalid}}\r\n                                                    {{mainscreenfrom.submitted}}-->\r\n                                                </div>\r\n                                                <div *ngIf=\"message_operation_Input.invalid && mainscreenfrom.submitted\"\r\n                                                     class=\"text-danger\" style=\"padding-left:200px\">\r\n\r\n                                                    Process Message action is required.\r\n\r\n                                                </div>\r\n\r\n                                            </div>\r\n\r\n                                        </div>\r\n\r\n                                        <!--<div class=\"row personalization-rows\">\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"float-right\">\r\n\r\n\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>-->\r\n                                        <!--</form>-->\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row action-card-row\">\r\n                                <!--style=\"overflow: auto;max-height: calc(100vh - 105px);overflow-x: hidden;\"-->\r\n                                <!--<div class=\"referrercontainer\">\r\n                                    <table mat-table [dataSource]=\"angularDataSource\">\r\n\r\n                                        <ng-container matColumnDef=\"FileName\">\r\n                                            <th mat-header-cell *matHeaderCellDef>\r\n                                                File Name\r\n                                            </th>\r\n                                            <td mat-cell *matCellDef=\"let element\"> {{element.FileName}} </td>\r\n                                        </ng-container>\r\n\r\n\r\n                                        <ng-container matColumnDef=\"FileData\">\r\n                                            <th mat-header-cell *matHeaderCellDef>\r\n                                                Action\r\n                                            </th>\r\n                                            <td mat-cell *matCellDef=\"let element\">\r\n                                                <button mat-button class=\"primary-button-2\" (click)=\"OpenXMLView(element)\">View File</button>\r\n                                            </td>\r\n                                        </ng-container>\r\n\r\n                                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n                                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n                                            (click)=\"selectionfunction(row)\"\r\n                                            [ngClass]=\"{hovered: row.hovered, highlighted: selection.isSelected (row)}\"\r\n                                            (mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"></tr>\r\n\r\n                                    </table>\r\n                                    <mat-toolbar *ngIf=\"noRecordsMessage != ''\" class=\"no-records-message\"> {{ noRecordsMessage }} </mat-toolbar>\r\n                                </div>\r\n                                <mat-paginator *ngIf=\"angularDataSource?.data?.length > 0\"\r\n                                               [length]=\"DTIncomingXML?.TotalRecords\"\r\n                                               [pageIndex]=\"DTIncomingXML?.CurrentPage\"\r\n                                               [pageSize]=\"DTIncomingXML?.PageSize\"\r\n                                               [pageSizeOptions]=\"pageSizeOptions\"\r\n                                               (page)=\"pageEvent = getPaginationData($event);\"\r\n                                               showFirstLastButtons>\r\n                                </mat-paginator>-->\r\n                                <!-- <ul>-->\r\n                                <!--<div *ngFor=\"let option of DTIncomingXML.XMLattachment\" class=\"custom-control custom-radio\">\r\n                                    <input  class=\"custom-control-input\" type=\"radio\" id=\"option.InComingMessageID\" name=\"option.FileName\" value=\"option.InComingMessageID\">\r\n                                    <label class=\"custom-control-label\">\r\n                                        <span (click)=\"OpenXMLView(option)\">{{option.FileName}}</span>\r\n                                    </label>\r\n                                </div>-->\r\n                                <!--</ul>-->\r\n\r\n                            </div>\r\n                            <div class=\"row action-card-row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveDetails()\" *ngIf=\"requestedAction=='edit' && (!IsRefererrPatientExist ||!isLastStep)\">\r\n                                        <!--<ion-icon name=\"arrow-forward\">Next</ion-icon>-->\r\n                                        Next\r\n                                        <!--*ngIf=\"!isLastStep\"-->\r\n                                    </button>\r\n                                    &nbsp;\r\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"redirectMainPage()\">\r\n                                        <!--<ion-icon name=\"arrow-forward\">Cancel</ion-icon>-->\r\n                                        Cancel\r\n                                    </button>\r\n                                    <!--<button type=\"button\" id=\"acceptID\" class=\"btn btn-primary btn-ion-icon btn-circle mx-3\" (click)=\"acceptDetails()\" *ngIf=\"IsRefererrPatientExist\">\r\n                                        <ion-icon name=\"arrow-forward\">Accept</ion-icon>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-primary btn-ion-icon btn-circle mx-3\" (click)=\"rejectDetails()\" *ngIf=\"IsRefererrPatientExist\">\r\n                                        <ion-icon name=\"arrow-forward\">Reject</ion-icon>\r\n                                    </button>-->\r\n                                </div>\r\n                            </div>\r\n\r\n                        </form>\r\n                    </div>\r\n\r\n                    <!--<div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" awNextStep>Continue</button>\r\n                    </div>-->\r\n                    <!--<button type=\"button\" class=\"btn btn-light btn-ion-icon btn-circle mx-3\" (click)=\"goToPreviousStep()\" *ngIf=\"hasPreviousStep\">\r\n                        <ion-icon name=\"arrow-back\">Previous</ion-icon>\r\n                    </button>-->\r\n\r\n                </div>\r\n            </aw-wizard-step>\r\n            <aw-wizard-step [stepTitle]=\"\" [navigationSymbol]=\"{ symbol: FinishTitle=='2'?'Finish':'' }\" *ngIf=\"!IsRefererrPatientExist && DTincomingmessageResponse.Operation != undefined\">\r\n                <!--*ngIf=\"!IsRefererrPatientExist && DTincomingmessageResponse.Operation != undefined\"-->\r\n                <div class=\"centered-content\">\r\n                    <div>\r\n\r\n                        <!--<form #alloDataForm=\"ngForm\">-->\r\n\r\n                        <div class=\"row action-card-row\" style=\"overflow:auto;\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"page-header\">\r\n                                    <span *ngIf=\"DTincomingmessageResponse.Operation=='Referral'\">\r\n                                        Patient match found, choose one of the patients below to import or click on create new patient to create brand new patient\r\n                                    </span>\r\n                                    <span *ngIf=\"DTincomingmessageResponse.Operation=='Plan of care approved'\">Plan of care approval - Patient Match List</span>\r\n                                    <span *ngIf=\"DTincomingmessageResponse.Operation=='Plan of care declined'\">Plan of care declined - Patient Match List</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"row action-card-row\">\r\n                            <!--style=\"overflow:auto;max-height:calc(110vh - 105px);\"-->\r\n\r\n                            <div class=\"referrercontainer\">\r\n                                <table mat-table [dataSource]=\"patientDataSource\">\r\n                                    <!-- Position Column -->\r\n                                    <ng-container matColumnDef=\"Option\">\r\n                                        <th mat-header-cell *matHeaderCellDef style=\"min-width:70px;\"\r\n                                            [style.display]=\"DTincomingmessageResponse.Operation == 'Referral'?'none':'block'\">\r\n                                            <div class=\"header-text\">\r\n                                                Option\r\n                                            </div>\r\n                                        </th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"padding-left option-column-style\"\r\n                                            [style.display]=\"DTincomingmessageResponse.Operation == 'Referral'?'none':'block'\">\r\n                                            <mat-radio-group name=\"Select\" [(ngModel)]=\"selectedPatient\">\r\n                                                <mat-radio-button [value]=\"element.Prowid\">\r\n                                                </mat-radio-button>\r\n                                            </mat-radio-group>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"Name\">\r\n                                        <th mat-header-cell *matHeaderCellDef>\r\n                                            Name (First Last)\r\n\r\n                                        </th>\r\n                                        <td mat-cell *matCellDef=\"let element\" [title]=\"element.FirstName\" class=\"width-20-percent\"> {{element.FirstName}} {{element.LastName}} </td>\r\n                                    </ng-container>\r\n\r\n                                    <!-- Name Column -->\r\n                                    <!--<ng-container matColumnDef=\"LastName\">\r\n        <th mat-header-cell *matHeaderCellDef> LastName </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.LastName}} </td>\r\n    </ng-container>-->\r\n                                    <ng-container matColumnDef=\"BirthDate\">\r\n                                        <th mat-header-cell *matHeaderCellDef> DOB </th>\r\n                                        <td mat-cell *matCellDef=\"let element\" [title]=\"element.BirthDate\" class=\"width-20-percent\"> {{element.BirthDate | date:'longDate'}} </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"CellPh\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Phone Number </th>\r\n                                        <td mat-cell *matCellDef=\"let element\" [title]=\"element.CellPh\" class=\"width-20-percent\"> {{element.CellPh | phone:'US'}} </td>\r\n                                    </ng-container>\r\n\r\n                                    <ng-container matColumnDef=\"Address\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Address </th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"> {{element.Address1}}, {{element.City}}, {{element.State}} - {{element.ZipCode}}</td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"MRN\">\r\n                                        <th mat-header-cell *matHeaderCellDef> MRN </th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"> {{element.MRNNumber}}</td>\r\n                                    </ng-container>\r\n\r\n\r\n                                    <!--<ng-container matColumnDef=\"City\">\r\n        <th mat-header-cell *matHeaderCellDef> City </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.City}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"State\">\r\n        <th mat-header-cell *matHeaderCellDef> State </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.State}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"ZipCode\">\r\n        <th mat-header-cell *matHeaderCellDef> ZipCode </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.ZipCode}} </td>\r\n    </ng-container>-->\r\n                                    <!--<ng-container matColumnDef=\"TherapistName\">\r\n        <th mat-header-cell *matHeaderCellDef> TherapistName </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.TherapistName}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"Note\">\r\n        <th mat-header-cell *matHeaderCellDef> Note </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.Note}} </td>\r\n    </ng-container>-->\r\n                                    <ng-container matColumnDef=\"Action\">\r\n\r\n                                        <th mat-header-cell *matHeaderCellDef [style.display]=\"DTincomingmessageResponse.Operation != 'Referral'?'none':'table-cell'\">\r\n                                            <!--[style.display]=\"DTincomingmessageResponse.Operation != 'Referral'?'none':'contents'\"-->\r\n                                            {{DTincomingmessageResponse.Operation == 'Referral'?'Import':'Action'}}\r\n                                        </th>\r\n                                        <td mat-cell class=\"align-center\" *matCellDef=\"let element\" [style.display]=\"DTincomingmessageResponse.Operation != 'Referral'?'none':'block'\">\r\n\r\n                                            <a fxFlexFill href=\"\" title=\"Import Patient\" *ngIf=\"DTincomingmessageResponse.Operation == 'Referral'\"\r\n                                               class=\"mat-row-link table-action-icons\" style=\"text-align:center;\"\r\n                                               (click)=\"!!importDetails(element.Prowid)\">\r\n                                                <ion-icon name=\"download-outline\" class=\"iconsize-medium handcursor\"></ion-icon>\r\n\r\n\r\n                                            </a>\r\n                                            <!--<button mat-button [matMenuTriggerFor]=\"menu\" *ngIf=\"DTincomingmessageResponse.Operation == 'Referral'\">\r\n\r\n            <span fxFlexFill href=\"\" matTooltip=\"Action\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                  class=\"mat-row-link icon-action table-action-icons\">\r\n            </span>-->\r\n                                            <!--</button>\r\n            <mat-menu #menu=\"matMenu\">\r\n\r\n                <span style=\"display:block\">\r\n                    <a fxFlexFill href=\"\" matTooltip=\"Create Patient\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                       class=\"mat-row-link icon-copy table-action-icons\"\r\n                       (click)=\"!!createDetails(element.Prowid)\">\r\n                        Create\r\n                    </a>\r\n                </span>\r\n                <span style=\"display:block\">\r\n                    <a fxFlexFill href=\"\" matTooltip=\"Import Patient\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                       class=\"mat-row-link icon-delete table-action-icons\"\r\n                       (click)=\"!!importDetails(element.Prowid)\">\r\n                        Import\r\n                    </a>\r\n                </span>\r\n\r\n            </mat-menu>-->\r\n                                        </td>\r\n                                    </ng-container>\r\n\r\n                                    <tr mat-header-row *matHeaderRowDef=\"patientdisplayedColumns; sticky: true\"></tr>\r\n                                    <!--(click)=\"patientselectionfunction(row)\"-->\r\n                                    <!--[ngClass]=\"{hovered: row.hovered, highlighted: patientselection.isSelected (row)}\"\r\n    (mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"-->\r\n                                    <tr mat-row *matRowDef=\"let row; columns: patientdisplayedColumns;\"></tr>\r\n                                </table>\r\n                                <mat-toolbar *ngIf=\"nopatientRecordsMessage != ''\" class=\"no-records-message\"> {{ nopatientRecordsMessage }} </mat-toolbar>\r\n                            </div>\r\n                            <mat-paginator *ngIf=\"patientDataSource?.data?.length > 0\"\r\n                                           [length]=\"DTPatients?.TotalRecords\"\r\n                                           [pageIndex]=\"DTPatients?.CurrentPage\"\r\n                                           [pageSize]=\"DTPatients?.PageSize\"\r\n                                           [pageSizeOptions]=\"pageSizeOptions\"\r\n                                           (page)=\"pageEvent = getPatientPaginationData($event);\"\r\n                                           class=\"full-width\"\r\n                                           showFirstLastButtons>\r\n                            </mat-paginator>\r\n\r\n                        </div>\r\n                        <div class=\"row action-card-row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <button type=\"button\" class=\"btn btn-light\" (click)=\"goToPreviousStep()\" *ngIf=\"hasPreviousStep\">\r\n                                    <!--<ion-icon name=\"arrow-back\">Previous</ion-icon>-->\r\n                                    Previous\r\n                                </button>\r\n                                &nbsp;\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"getPOCDetails()\" *ngIf=\"!IsRefererrPatientExist && DTincomingmessageResponse.Operation != 'Referral'\">\r\n                                    <!--<ion-icon name=\"arrow-forward\">Next</ion-icon>-->\r\n                                    Next\r\n                                </button>\r\n                                &nbsp;\r\n                                <button type=\"button\" class=\"btn btn-primary\" title=\"Create Patient\" (click)=\"!!createDetails()\" *ngIf=\" DTincomingmessageResponse.Operation == 'Referral'\">\r\n                                    <!--<ion-icon name=\"arrow-forward\">Create</ion-icon>-->\r\n                                    Create\r\n                                </button>\r\n                                &nbsp;\r\n                                <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"!!importDetails()\" *ngIf=\" DTincomingmessageResponse.Operation == 'Referral'\">\r\n\r\n                                    Import\r\n                                </button>\r\n                                &nbsp;-->\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"redirectMainPage()\">\r\n                                    <!--<ion-icon name=\"arrow-forward\">Cancel</ion-icon>-->\r\n                                    Cancel\r\n                                </button>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <!-- </form>-->\r\n\r\n\r\n                        <div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n                            <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <!--<div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" awPreviousStep>Back</button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" awNextStep>Continue</button>\r\n                    </div>-->\r\n                    <!--<button type=\"button\" class=\"btn btn-primary btn-ion-icon btn-circle mx-3\" (click)=\"goToNextStep()\" *ngIf=\"!isLastStep\">\r\n                        <ion-icon name=\"arrow-forward\">Next</ion-icon>\r\n                    </button>-->\r\n                </div>\r\n            </aw-wizard-step>\r\n            <aw-wizard-step [stepTitle]=\"\" [navigationSymbol]=\"{ symbol: FinishTitle=='3'?'Finish':'' }\" *ngIf=\"IsRefererralstep2 && !IsRefererrPatientExist && DTincomingmessageResponse.Operation != 'Referral' && DTincomingmessageResponse.Operation != undefined\">\r\n                <!--*ngIf=\"!IsRefererralstep2 && !IsRefererrPatientExist && DTincomingmessageResponse.Operation != 'Referral' && DTincomingmessageResponse.Operation != undefined\"-->\r\n                <!--&& DTincomingmessageResponse.Operation != undefined\"-->\r\n                <div class=\"centered-content\">\r\n                    <div>\r\n\r\n                        <div class=\"row action-card-row\" style=\"overflow:auto;\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"page-header\">\r\n\r\n                                    <span *ngIf=\"DTincomingmessageResponse.Operation=='Plan of care approved'\">Plan of care approval - Note List</span>\r\n                                    <span *ngIf=\"DTincomingmessageResponse.Operation=='Plan of care declined'\">Plan of care declined - Note List</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"row action-card-row\" style=\"overflow:auto;max-height:calc(110vh - 105px);\">\r\n\r\n                            <div class=\"referrercontainer\">\r\n                                <table mat-table [dataSource]=\"pocDataSource\">\r\n                                    <!-- Position Column -->\r\n                                    <ng-container matColumnDef=\"Option\">\r\n                                        <th mat-header-cell *matHeaderCellDef style=\"min-width:70px;\">\r\n                                            <div class=\"header-text\">\r\n                                                Option\r\n                                            </div>\r\n                                        </th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"padding-left option-column-style\">\r\n                                            <mat-radio-group name=\"Select\" [(ngModel)]=\"selectedDOC\">\r\n                                                <mat-radio-button [value]=\"element.Docrowid\">\r\n                                                </mat-radio-button>\r\n                                            </mat-radio-group>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                    <!--<ng-container matColumnDef=\"Docrowid\">\r\n                                        <th mat-header-cell *matHeaderCellDef>\r\n                                            Docrowid\r\n\r\n                                        </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.Docrowid}} </td>\r\n                                    </ng-container>\r\n\r\n\r\n                                    <ng-container matColumnDef=\"PTrowid\">\r\n                                        <th mat-header-cell *matHeaderCellDef> PTrowid </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.PTrowid}} </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"NoteType\">\r\n                                        <th mat-header-cell *matHeaderCellDef> NoteType </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.NoteType}} </td>\r\n\r\n\r\n                                    </ng-container>-->\r\n                                    <ng-container matColumnDef=\"ApprovalSent\">\r\n                                        <th mat-header-cell *matHeaderCellDef>Approval Request Sent On</th>\r\n                                        <td mat-cell *matCellDef=\"let element\" [title]=\"element.ApprovalSent\" class=\"width-20-percent\">\r\n                                            {{element.ApprovalSent| date:'longDate'}}\r\n                                        </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"TherapistName\">\r\n                                        <th mat-header-cell *matHeaderCellDef>Therapist</th>\r\n                                        <td mat-cell *matCellDef=\"let element\" [title]=\"element.TherapistName\" class=\"width-50-percent\">\r\n                                            {{element.TherapistName}}\r\n                                        </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"PDFName\">\r\n                                        <th mat-header-cell *matHeaderCellDef> PDF Sent for Approval </th>\r\n                                        <td mat-cell *matCellDef=\"let element\" title=\"Download\" class=\"width-20-percent content-center\">\r\n                                            <!--<button type=\"button\" class=\"btn btn-success\" (click)=\"getPDF(element)\" style=\"height: 35px;\" title=\"Download\">\r\n\r\n                                                <ion-icon name=\"cloud-download-outline\"></ion-icon> Download PDF\r\n                                            </button>-->\r\n                                            <span class=\"handcursor\" (click)=\"getPDF(element)\">\r\n                                                <img src=\"../../../../../assets/images/download-pdf.png\" style=\"height:24px;\" />\r\n                                            </span>\r\n                                        </td>\r\n                                    </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n                                    <!--<ng-container matColumnDef=\"Action\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                                        <td mat-cell *matCellDef=\"let element\">\r\n                                            <span fxFlexFill href=\"\" matTooltip=\"Setting\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                                                  class=\"mat-row-link icon-action table-action-icons\">\r\n                                            </span>\r\n                                        </td>\r\n                                    </ng-container>-->\r\n\r\n                                    <tr mat-header-row *matHeaderRowDef=\"pocdisplayedColumns; sticky: true\"></tr>\r\n                                    <!--(click)=\"pocselectionfunction(row)\"\r\n                                    [ngClass]=\"{hovered: row.hovered, highlighted: pocselection.isSelected (row)}\"\r\n                                    (mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"-->\r\n                                    <tr mat-row *matRowDef=\"let row; columns: pocdisplayedColumns;\"></tr>\r\n                                </table>\r\n                                <mat-toolbar *ngIf=\"nopocRecordsMessage != ''\" class=\"no-records-message\"> {{ nopocRecordsMessage }} </mat-toolbar>\r\n                            </div>\r\n                            <mat-paginator *ngIf=\"pocDataSource?.data?.length > 0\"\r\n                                           [length]=\"DTPOCs?.TotalRecords\"\r\n                                           [pageIndex]=\"DTPOCs?.CurrentPage\"\r\n                                           [pageSize]=\"DTPOCs?.PageSize\"\r\n                                           [pageSizeOptions]=\"pageSizeOptions\"\r\n                                           (page)=\"pageEvent = getPOCPaginationData($event);\"\r\n                                           class=\"full-width\"\r\n                                           showFirstLastButtons>\r\n                            </mat-paginator>\r\n\r\n                        </div>\r\n                        <div class=\"row action-card-row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <button type=\"button\" class=\"btn btn-light\" (click)=\"goToPreviousStep()\" *ngIf=\"hasPreviousStep\">\r\n                                    <!--<ion-icon name=\"arrow-back\">Previous</ion-icon>-->\r\n                                    Previous\r\n                                </button>\r\n                                &nbsp;\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"processPOC()\">\r\n                                    <!--<ion-icon name=\"arrow-forward\">Process Approval</ion-icon>-->\r\n                                    Process Approval\r\n                                </button>\r\n                                &nbsp;\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"redirectMainPage()\">\r\n                                    <!--<ion-icon name=\"arrow-forward\">Cancel</ion-icon>-->\r\n                                    Cancel\r\n                                </button>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <!-- </form>-->\r\n\r\n\r\n                        <div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n                            <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!--<div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" awPreviousStep>Back</button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" awResetWizard>Reset</button>\r\n                    </div>-->\r\n                    <!--<button type=\"button\" class=\"btn btn-light btn-ion-icon btn-circle mx-3\" (click)=\"goToPreviousStep()\" *ngIf=\"hasPreviousStep\">\r\n                        <ion-icon name=\"arrow-back\">Previous</ion-icon>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-ion-icon btn-circle mx-3\" (click)=\"goToNextStep()\" *ngIf=\"!isLastStep\">\r\n                        <ion-icon name=\"arrow-forward\">Next</ion-icon>\r\n                    </button>-->\r\n                </div>\r\n            </aw-wizard-step>\r\n        </aw-wizard>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n    <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtincoming-message-detail/patient-dialog.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtincoming-message-detail/patient-dialog.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmrpageComponentDtincomingMessageDetailPatientDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div mat-dialog-container style=\"overflow-x: hidden; margin: -18px;\">\r\n    <div class=\"personalization-header-div\" style=\"background:#5dbcd2;height: 35px;color:white;font-weight:300;\">\r\n        Action\r\n\r\n        <button mat-button class=\"float-right close-button\" (click)=\"closeDialog()\" tabindex=\"-1\" style=\"margin-top: -6px;\">\r\n            <span style=\"font-size:25px;\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <!--<form #alloDataForm=\"ngForm\">-->\r\n    <div class=\"personalization-tab-div\">\r\n\r\n        <div class=\"row action-card-row\" style=\"overflow:auto;height:72px;\">\r\n            <div class=\"col-sm-12\">\r\n                No patient found in team rehab, please choose one of the options below.\r\n            </div>\r\n            \r\n\r\n            </div>\r\n        <div class=\"row action-card-row\">\r\n            <div class=\"col-sm-12\">\r\n\r\n                <!--<button type=\"button\" id=\"acceptID\" class=\"btn btn-primary btn-ion-icon btn-circle mx-3\" (click)=\"acceptDetails()\">\r\n        <ion-icon name=\"arrow-forward\">Accept</ion-icon>\r\n    </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"acceptDetails()\">\r\n                    Accept\r\n                </button>\r\n                &nbsp;&nbsp;\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"rejectDetails()\">\r\n                    Reject\r\n                </button>\r\n                <!--<button type=\"button\" class=\"btn btn-primary btn-ion-icon btn-circle mx-3\" (click)=\"rejectDetails()\">\r\n        <ion-icon name=\"arrow-forward\">Reject</ion-icon>\r\n    </button>-->\r\n                <!--<button type=\"button\" id=\"acceptID\" class=\"btn btn-primary btn-ion-icon btn-circle mx-3\" (click)=\"redirectMainPage()\">\r\n        <ion-icon name=\"arrow-forward\">Cancel</ion-icon>\r\n    </button>-->\r\n\r\n            </div>\r\n        </div>\r\n            <!--<div class=\"row action-card-row\" style=\"overflow:auto;max-height:calc(100vh - 105px);\">\r\n\r\n                <div class=\"col-sm-12\">\r\n\r\n                    <button type=\"button\" id=\"acceptID\" class=\"btn btn-primary btn-ion-icon btn-circle mx-3\" (click)=\"redirectMainPage()\">\r\n                        <ion-icon name=\"arrow-forward\">Cancel</ion-icon>\r\n                    </button>\r\n\r\n                </div>\r\n\r\n            </div>-->\r\n\r\n        </div>\r\n       <!-- </form>-->\r\n</div>\r\n\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n  <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtincoming-message-detail/referrer-dialog.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtincoming-message-detail/referrer-dialog.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmrpageComponentDtincomingMessageDetailReferrerDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div mat-dialog-container style=\"overflow-x: hidden; margin: -18px;\">\r\n    <div class=\"personalization-header-div\" style=\"background:#5dbcd2;height: 35px;color:white;font-weight:300;\">\r\n     Choose Referrer\r\n        <button mat-button class=\"float-right close-button\" (click)=\"closeModal()\" tabindex=\"-1\" style=\"margin-top: -6px;margin-right: -22px;\">\r\n            <span style=\"font-size:25px;\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <!--<form #alloDataForm=\"ngForm\">-->\r\n    <div class=\"personalization-tab-div\">\r\n\r\n        <div style=\"height:450px;overflow-y:hidden;width:100%;overflow-x: hidden;\">\r\n\r\n            <div class=\"row action-card-row\">\r\n         \r\n                <div class=\"referrercontainer\" style=\"width:100%;\">\r\n                    <table mat-table [dataSource]=\"referrerDataSource\">\r\n                        <ng-container matColumnDef=\"Option\">\r\n                            <th mat-header-cell *matHeaderCellDef style=\"min-width:70px;\">\r\n                                <div class=\"header-text\">\r\n                                    Option\r\n                                </div>\r\n                            </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"padding-left width-10-percent\">\r\n                                <mat-radio-group name=\"Select\" [(ngModel)]=\"selectedReferrer\">\r\n                                    <mat-radio-button [value]=\"element.ReferrerID\">\r\n                                    </mat-radio-button>\r\n                                </mat-radio-group>\r\n                            </td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"Name\">\r\n                            <th mat-header-cell *matHeaderCellDef>\r\n                                Name (First Last)\r\n\r\n                            </th>\r\n                            <td mat-cell *matCellDef=\"let element\" [title]=\"element.FirstName\" class=\"width-20-percent\"> {{element.FirstName}} {{element.LastName}} </td>\r\n                        </ng-container>\r\n\r\n\r\n                        <ng-container matColumnDef=\"Email\">\r\n                            <th mat-header-cell *matHeaderCellDef> Email </th>\r\n                            <td mat-cell *matCellDef=\"let element\" [title]=\"element.Email\" class=\"width-20-percent\"> {{element.Email}} </td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"NPINumber\">\r\n                            <th mat-header-cell *matHeaderCellDef> NPINumber </th>\r\n                            <td mat-cell *matCellDef=\"let element\" [title]=\"element.NPINumber\" class=\"width-20-percent\"> {{element.NPINumber}} </td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"Address\">\r\n                            <th mat-header-cell *matHeaderCellDef> Address </th>\r\n                            <td mat-cell *matCellDef=\"let element\" [title]=\"element.NPINumber\" class=\"width-20-percent\"> {{element.Address}} </td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"Phone\">\r\n                            <th mat-header-cell *matHeaderCellDef> Phone </th>\r\n                            <td mat-cell *matCellDef=\"let element\" [title]=\"element.Phone\" class=\"width-20-percent\"> {{element.Phone | phone:'US'}} </td>\r\n                        </ng-container>\r\n\r\n                        <!--<ng-container matColumnDef=\"Action\">\r\n\r\n        <th mat-header-cell *matHeaderCellDef> Action </th>\r\n        <td mat-cell class=\"align-center width-30-percent\" *matCellDef=\"let element\">\r\n\r\n            <a fxFlexFill href=\"\" title=\"select referrer\"\r\n               class=\"mat-row-link table-action-icons\" style=\"text-align:center;\"\r\n               (click)=\"!!acceptDetails(element.ReferrerID)\">\r\n                <ion-icon name=\"person-outline\" class=\"iconsize-medium handcursor\"></ion-icon>\r\n            </a>\r\n        </td>\r\n    </ng-container>-->\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"referrerdisplayedColumns; sticky: true\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: referrerdisplayedColumns;\"></tr>\r\n                    </table>\r\n                    <mat-toolbar *ngIf=\"noreferrerRecordsMessage != ''\" class=\"no-records-message\"> {{ noreferrerRecordsMessage }} </mat-toolbar>\r\n                </div>\r\n                <mat-paginator *ngIf=\"referrerDataSource?.data?.length > 0\"\r\n                               [length]=\"referrerlist?.TotalRecords\"\r\n                               [pageIndex]=\"referrerlist?.CurrentPage\"\r\n                               [pageSize]=\"referrerlist?.PageSize\"\r\n                               [pageSizeOptions]=\"pageSizeOptions\"\r\n                               (page)=\"pageEvent = getReferrerPaginationData($event);\"\r\n                               class=\"full-width\"\r\n                               showFirstLastButtons>\r\n                </mat-paginator>\r\n\r\n            </div>\r\n            <div class=\"row personalization-rows\" style=\"padding-top:40px;\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"float-right\" style=\"padding-right: 24px;\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"!!acceptDetails(1)\" [disabled]=\"selectedReferrer==0\" *ngIf=\"referrerDataSource?.data?.length > 0\">\r\n\r\n                            Proceed With Selected Referrer\r\n                        </button>\r\n                        &nbsp; &nbsp;\r\n                        <button class=\"btn btn-primary\" (click)=\"!!acceptDetails(0)\">Create New Referrer</button> &nbsp; &nbsp;\r\n                        <button class=\"btn btn-primary\" (click)=\"!!closeModal()\">Cancel</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n   \r\n    <!-- </form>-->\r\n</div>\r\n\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n  <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtpoc-not-found/dtpoc-not-found.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtpoc-not-found/dtpoc-not-found.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmrpageComponentDtpocNotFoundDtpocNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-wrapper\">\r\n    <!--<div class=\"page-header\" style=\"margin-left: 10px;\">\r\n        <span>Referral Page</span>\r\n    </div>-->\r\n    <div class=\"row action-card-row\" style=\"overflow:auto;\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"page-header\">\r\n                <span>DT POC Not Found Messages </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <!--<div class=\"float-right createreferrer\">\r\n                <button mat-button class=\"primary-button-2\" (click)=\"OpenCreateReferrerModal()\">Create Referrer</button>\r\n\r\n            </div>-->\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row action-card-row\" style=\"overflow:auto;max-height:calc(100vh - 105px);\">\r\n\r\n        <div class=\"referrercontainer\">\r\n            <table mat-table [dataSource]=\"angularDataSource\">\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"Institute_ID\">\r\n                    <th mat-header-cell *matHeaderCellDef>\r\n                        Institute ID\r\n\r\n                    </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.Institute_ID}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"Note_ID\">\r\n                    <th mat-header-cell *matHeaderCellDef> Note ID </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.Note_ID}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"Patient_ID\">\r\n                    <th mat-header-cell *matHeaderCellDef> Patient ID </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.Patient_ID}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"POC_Status\">\r\n                    <th mat-header-cell *matHeaderCellDef> POC Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.POC_Status}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <mat-toolbar *ngIf=\"noRecordsMessage != ''\" class=\"no-records-message\"> {{ noRecordsMessage }} </mat-toolbar>\r\n        </div>\r\n        <mat-paginator *ngIf=\"angularDataSource?.data?.length > 0\"\r\n                       [length]=\"DTincomingMessages?.TotalRecords\"\r\n                       [pageIndex]=\"DTincomingMessages?.CurrentPage\"\r\n                       [pageSize]=\"DTincomingMessages?.PageSize\"\r\n                       [pageSizeOptions]=\"pageSizeOptions\"\r\n                       (page)=\"pageEvent = getPaginationData($event);\"\r\n                       showFirstLastButtons>\r\n        </mat-paginator>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n    <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/emraddview/admin-dialog.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/emraddview/admin-dialog.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmrpageComponentEmraddviewAdminDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div mat-dialog-container>\r\n    <div class=\"personalization-header-div\">\r\n        Referrer Details\r\n\r\n        <button mat-button class=\"float-right close-button\" (click)=\"closeDialog()\" tabindex=\"-1\" style=\"margin-top: -6px;\">\r\n            <span style=\"font-size:25px;\">&times;</span>\r\n        </button>\r\n    </div>\r\n \r\n    <form #alloDataForm=\"ngForm\">\r\n        <div class=\"personalization-tab-div\">\r\n            <!--<mat-tab-group class=\"personalization-tab-group\" [@.disabled]=\"true\">\r\n\r\n            <mat-tab label=\"Admin Tab\" #spendPoolHigh class=\"spend-pool-high-tab\">-->\r\n            <div class=\"row personalization-rows\">\r\n                <div class=\"float-right createreferrer\">\r\n                    <!--  <button mat-button class=\"primary-button-2\" (click)=\"AddRowReferrerModal()\">Add Email</button>-->\r\n\r\n                </div>\r\n            </div>\r\n            <div style=\"height:244px;overflow-y:auto;width:100%;overflow-x: hidden;\">\r\n\r\n                <div class=\"row personalization-rows\" *ngFor=\"let defaultValue of defaultValues; let i = index\">\r\n                    <div class=\"col-sm-5\">\r\n                        <mat-form-field class=\"example-full-width long-field full-width\" *ngIf=\"i==0\">\r\n                            <input matInput placeholder=\"Institute Name\" required name=\"Institute_NameInput\" [(ngModel)]=\"defaultValue.Institute_Name\"\r\n                                   #Institute_NameInput=\"ngModel\" maxlength=\"60\">\r\n\r\n                            <mat-error *ngIf=\"Institute_NameInput.hasError('required')\">\r\n                                Institute Name is required.\r\n                            </mat-error>\r\n\r\n\r\n                        </mat-form-field>\r\n\r\n                    </div>\r\n                    <div [ngClass]=\"i!=0?'col-sm-5':'col-sm-5'\">\r\n                        <mat-form-field class=\"example-full-width long-field full-width\">\r\n                            <input matInput placeholder=\"Email Address\" required name=\"DT_Email_AddressInput{{i}}\" [(ngModel)]=\"defaultValue.DT_Email_Address\" email\r\n                                   #DT_Email_AddressInput=\"ngModel\" maxlength=\"60\">\r\n\r\n                            <mat-error *ngIf=\"DT_Email_AddressInput.hasError('required') || DT_Email_AddressInput.errors?.email\">\r\n                                Invalid Email Address.\r\n                            </mat-error>\r\n\r\n\r\n                        </mat-form-field>\r\n\r\n                    </div>\r\n                    <div [ngClass]=\"i!=0?'col-sm-2':'col-sm-2'\">\r\n                        <!--<button mat-button class=\"primary-button-2\" *ngIf=\"i==0\">\r\n                        <span fxFlexFill href=\"\" matTooltip=\"Add\" [matTooltipClass]=\"{'sidebar-tooltip': true}\" (click)=\"AddRowReferrerModal()\"\r\n                              class=\"mat-row-link icon-add-line table-action-icons\">\r\n                        </span>\r\n                        </button>-->\r\n                        <!--<button mat-button class=\"primary-button-2\" >-->\r\n                        <span style=\"vertical-align:bottom;\"\r\n                              fxFlexFill href=\"\" matTooltip=\"Add\" [matTooltipClass]=\"{'sidebar-tooltip': true}\" (click)=\"AddRowReferrerModal()\" *ngIf=\"i==defaultValues.length-1\"\r\n                              class=\"mat-row-link icon-create-project table-action-icons\">\r\n                        </span>\r\n                        <!--</button>-->\r\n                        <!--<button mat-button class=\"primary-button-2\" >-->\r\n                        <span style=\"vertical-align:bottom;\"\r\n                              fxFlexFill href=\"\" matTooltip=\"Delete\" [matTooltipClass]=\"{'sidebar-tooltip': true}\" (click)=\"DeleteRowReferrerModal(i)\" *ngIf=\"i!=0\"\r\n                              class=\"mat-row-link icon-delete table-action-icons\">\r\n                        </span>\r\n\r\n                        <!--</button>-->\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <hr />\r\n            <div class=\"row personalization-rows\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"float-right\">\r\n                        <!--<button mat-button class=\"primary-button-2\" (click)=\"AddRowReferrerModal()\">\r\n                            <span fxFlexFill href=\"\" matTooltip=\"Add\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                                  class=\"mat-row-link icon-add-line table-action-icons\">\r\n                            </span>\r\n                        </button>-->\r\n                        <button class=\"btn btn-primary\"  *ngIf=\"defaultValues[0].RefID==undefined\" (click)=\"saveDetails()\">SAVE</button>\r\n                        <button class=\"btn btn-primary\"  *ngIf=\"defaultValues[0].RefID!=undefined\" (click)=\"updateDetails()\">UPDATE</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--</mat-tab>\r\n            </mat-tab-group>-->\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n  <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/emraddview/emraddview.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/emraddview/emraddview.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmrpageComponentEmraddviewEmraddviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-wrapper\">\r\n    <!--<div class=\"page-header\" style=\"margin-left: 10px;\">\r\n        <span>Referral Page</span>\r\n    </div>-->\r\n    <div class=\"row action-card-row\" style=\"overflow:auto;\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"page-header\">\r\n                <span>Referrer Maintenance</span>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"float-right createreferrer\">\r\n                    <button class=\"btn btn-primary\"  (click)=\"OpenCreateReferrerModal()\">Create Referrer</button>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row action-card-row\" style=\"overflow:auto;max-height:calc(100vh - 105px);\">\r\n\r\n            <div class=\"referrercontainer\">\r\n                <table mat-table [dataSource]=\"angularDataSource\">\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"Institute_Name\">\r\n                        <th mat-header-cell *matHeaderCellDef>\r\n                            Institute Name\r\n\r\n                        </th>\r\n                        <td mat-cell *matCellDef=\"let element\" [title]=\"element.Institute_Name\" class=\"width-70-percent\"> {{element.Institute_Name | limitCharacters : 60}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <!--<ng-container matColumnDef=\"DT_Email_Address\">\r\n        <th mat-header-cell *matHeaderCellDef> Referrer Email </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.DT_Email_Address | limitCharacters : 25}} </td>\r\n    </ng-container>-->\r\n                    <!-- Weight Column -->\r\n                    <!-- <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef > Weight </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <th mat-header-cell *matHeaderCellDef > Symbol </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container> -->\r\n\r\n                    <ng-container matColumnDef=\"Edit\" sticky>\r\n                        <th mat-header-cell *matHeaderCellDef> Update / Delete </th>\r\n                        <td mat-cell *matCellDef=\"let element;let i = index;\" class=\"width-30-percent\">\r\n                            <!-- <a fxFlexFill href=\"\" class=\"mat-row-link\" (click)=\"!!getPersonalizationDetails()\">EDIT</a> -->\r\n\r\n                            <span style=\"display:block\">\r\n                                <a fxFlexFill href=\"\" title=\"Edit\" \r\n                                   class=\"mat-row-link table-action-icons\"\r\n                                   (click)=\"!!getReferrerDetail(element.RefID)\">\r\n                                    <ion-icon name=\"create-outline\" class=\"iconsize-medium handcursor\"></ion-icon>\r\n                                </a>\r\n\r\n\r\n                                <a fxFlexFill href=\"\" title=\"Delete\"\r\n                                   class=\"mat-row-link table-action-icons\"\r\n                                   (click)=\"!!deleteDetails(element.RefID,element.RefEmailID)\">\r\n                                    <ion-icon name=\"trash-outline\" class=\"iconsize-medium handcursor\"></ion-icon>\r\n                                </a>\r\n                            </span>\r\n                            <!--<button mat-button [matMenuTriggerFor]=\"menu\">\r\n                <span fxFlexFill>\r\n                    <ion-icon name=\"settings-outline\"></ion-icon>\r\n                </span>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n\r\n                <span style=\"display:block\">\r\n                    <a fxFlexFill href=\"\" matTooltip=\"Update\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                       class=\"mat-row-link icon-copy table-action-icons\"\r\n                       (click)=\"!!getReferrerDetail(element.RefID)\">\r\n                        Update\r\n                    </a>\r\n                </span>\r\n                <span style=\"display:block\">\r\n                    <a fxFlexFill href=\"\" matTooltip=\"Delete\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                       class=\"mat-row-link icon-delete table-action-icons\"\r\n                       (click)=\"!!deleteDetails(element.RefID,element.RefEmailID)\">\r\n                        Delete\r\n                    </a>\r\n                </span>\r\n\r\n            </mat-menu>-->\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                </table>\r\n                <mat-toolbar *ngIf=\"noRecordsMessage != ''\" class=\"no-records-message\"> {{ noRecordsMessage }} </mat-toolbar>\r\n            </div>\r\n            <mat-paginator *ngIf=\"angularDataSource?.data?.length > 0\"\r\n                           [length]=\"DTReferrers?.TotalRecords\"\r\n                           [pageIndex]=\"DTReferrers?.CurrentPage\"\r\n                           [pageSize]=\"DTReferrers?.PageSize\"\r\n                           [pageSizeOptions]=\"pageSizeOptions\"\r\n                           (page)=\"pageEvent = getPaginationData($event);\" style=\"width:100%\"\r\n                           showFirstLastButtons>\r\n            </mat-paginator>\r\n\r\n        </div>\r\n    </div>\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n    <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/incomingmessage/incomingmessage.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/incomingmessage/incomingmessage.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmrpageComponentIncomingmessageIncomingmessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-wrapper\" style=\"height: 550px;overflow: hidden;\r\n\">\r\n    <!--<div class=\"page-header\" style=\"margin-left: 10px;\">\r\n        <span>Referral Page</span>\r\n    </div>-->\r\n    <!--<div class=\"row action-card-row\" style=\"overflow: auto;\r\n    background: #969a9b;\r\n    padding-top: -7px;\r\n    margin-top: 0px;\r\n    color: white;\r\n    margin-bottom: -10px;padding:8px;margin-left:0px;\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"page-header\">\r\n\r\n                <button class=\"btn btn-primary button-radius\" (click)=\"viewMore()\">New Message</button>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n\r\n            <span style=\"display: block; text-align: right;\" *ngIf=\"loggedInUserDetails.Roles.trim().toLowerCase() == 'front desk'\">\r\n                <a fxFlexFill href=\"\" title=\"Unread\"\r\n                   class=\"mat-row-link table-action-icons\"\r\n                   (click)=\"!!UpdateReadUnReadMessage('Unread')\">\r\n                    <ion-icon name=\"mail-unread-outline\" class=\"iconsize-medium-large handcursor\"></ion-icon>\r\n                </a>\r\n\r\n                <a fxFlexFill href=\"\" title=\"Read\"\r\n                   class=\"mat-row-link table-action-icons\"\r\n                   (click)=\"!!UpdateReadUnReadMessage('Read')\">\r\n                    <ion-icon name=\"mail-open-outline\" class=\"iconsize-medium-large handcursor\"></ion-icon>\r\n                </a>\r\n            </span>\r\n        </div>\r\n    </div>-->\r\n    <div class=\"row action-card-row headbar\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"page-header\">\r\n                <!--<span>Inbox - Unprocessed Messages </span>-->\r\n                <!--<button class=\"btn btn-primary\" style=\"margin-left:25px;background:#3f51b5 !important\" (click)=\"openDiv('Compose');\">\r\n                    <span class=\"WhiteFont\">New Email</span>\r\n                </button>-->\r\n                <button type=\"button\" style=\"margin-left:25px; !important\" class=\"btn btn-primary button-border-radius-zero\" (click)=\"openDiv('Compose');\">New Email</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <!--<div class=\"float-right createreferrer\">\r\n                <button mat-button class=\"primary-button-2\" (click)=\"OpenCreateReferrerModal()\">Create Referrer</button>\r\n\r\n            </div>-->\r\n            <span style=\"display:block;text-align:right;\" *ngIf=\"loggedInUserDetails.Roles.trim().toLowerCase() == 'front desk' && isMailDivVisible\">\r\n                <a fxFlexFill href=\"\" title=\"Unread\"\r\n                   class=\"mat-row-link table-action-icons BlueFont\"\r\n                   (click)=\"!!UpdateReadUnReadMessage('Unread')\">\r\n                    <ion-icon name=\"mail-unread-outline\" class=\"iconsize-medium-large handcursor\"></ion-icon>\r\n                </a>\r\n\r\n                <a fxFlexFill href=\"\" title=\"Read\"\r\n                   class=\"mat-row-link table-action-icons BlueFont\"\r\n                   (click)=\"!!UpdateReadUnReadMessage('Read')\">\r\n                    <ion-icon name=\"mail-open-outline\" class=\"iconsize-medium-large handcursor\"></ion-icon>\r\n                </a>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <mat-drawer-container class=\"example-container\" autosize style=\"height:600px;text-align:center;\" [class.drawer-opened]=\"drawer.opened\">\r\n        <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" opened=\"true\" style=\"width:16%;padding-top:1px;\">\r\n\r\n            <!--<p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>-->\r\n            <!--<button (click)=\"showFiller = !showFiller\" mat-raised-button>\r\n                Toggle extra text\r\n            </button>-->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"list-group\" id=\"list-tab\" role=\"tablist\" style=\"margin-left: 9px\">\r\n                        <!--<a (click)=\"openDiv('Compose');\" [ngClass]=\"{'active': isComposeDivVisible}\" class=\"list-group-item list-group-item-action button-border-radius-zero\" id=\"list-home-list\" data-toggle=\"list\" role=\"tab\" aria-controls=\"home\">\r\n\r\n        New Email\r\n\r\n    </a>-->\r\n                        <a (click)=\"openDiv('Inbox');\" [ngClass]=\"{'active': isMailDivVisible}\" class=\"list-group-item list-group-item-action button-border-radius-zero BlueFont \" id=\"list-home-list\" data-toggle=\"list\" role=\"tab\" aria-controls=\"home\">\r\n\r\n                            Inbox<span matBadge=\"{{unReadMessageCount}}\" matBadgeColor=\"warn\" style=\"right: -15px !important;top:9px;\"></span>\r\n                        </a>\r\n                        <a (click)=\"openDiv('Sent');\" [ngClass]=\"{'active': isSentDivVisible}\" class=\"list-group-item list-group-item-action button-border-radius-zero BlueFont \" id=\"list-profile-list\" data-toggle=\"list\" role=\"tab\" aria-controls=\"profile\">Sent</a>\r\n                        <!-- <a (click)=\"openDiv('Compose');\" [ngClass]=\"{'active': isComposeDivVisible}\" class=\"list-group-item list-group-item-action button-border-radius-zero OrangeFont\" id=\"list-settings-list\" data-toggle=\"list\" role=\"tab\" aria-controls=\"settings\">New Email</a>-->\r\n                        <a (click)=\"openDiv('Deleted');\" [ngClass]=\"{'active': isDeletedDivVisible}\" class=\"list-group-item list-group-item-action button-border-radius-zero BlueFont\"  id=\"list-blank-list\" data-toggle=\"list\" role=\"tab\" aria-controls=\"blank\">Deleted Items</a>\r\n                       \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </mat-drawer>\r\n\r\n        <div class=\"example-sidenav-content\" style=\"padding-top: 1px;height: 500px;overflow: scroll;\">\r\n            <div class=\"row action-card-row\" style=\"margin: 0px 0px 0 0px !important;\" [style.display]=\"isMailDivVisible ? 'block' : 'none'\">\r\n                <!--style=\"overflow:auto;max-height:calc(100vh - 105px);\"-->\r\n\r\n                <div class=\"referrercontainer\">\r\n                    <table mat-table [dataSource]=\"angularDataSource\">\r\n                        <ng-container matColumnDef=\"checkBox\">\r\n                            <th mat-header-cell *matHeaderCellDef style=\"min-width:70px;\">\r\n\r\n                                <div class=\"header-text\" style=\"background: #5dbcd2 !important;\">\r\n\r\n                                </div>\r\n                            </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"padding-left option-column-style\" (click)=\"$event.stopPropagation()\">\r\n                                <!--<mat-radio-group name=\"Select\" [(ngModel)]=\"selectedPatient\">\r\n                            <mat-radio-button [value]=\"element.Prowid\">\r\n                            </mat-radio-button>\r\n                        </mat-radio-group>-->\r\n                                <!--<mat-checkbox [(ngModel)]=\"selectedMessage\" name=\"element.ID\"></mat-checkbox>-->\r\n                                <span *ngIf=\"loggedInUserDetails.Roles.trim().toLowerCase() == 'front desk'\">\r\n                                    <input type=\"checkbox\"\r\n                                           name=\"readUnread\"\r\n                                           value={{element.ID}}\r\n                                           [checked]=\"element.selected\"\r\n                                           (change)=\"updateChecked(element.ID, $event)\" />\r\n                                </span>\r\n\r\n                            </td>\r\n                        </ng-container>\r\n                        <!-- Position Column -->\r\n                        <ng-container matColumnDef=\"From\">\r\n                            <th mat-header-cell *matHeaderCellDef>\r\n                                From\r\n\r\n                            </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"><span>{{element.From}}</span></td>\r\n                        </ng-container>\r\n\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"To\">\r\n                            <th mat-header-cell *matHeaderCellDef> To </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"><span>{{element.To}}</span></td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"Received\">\r\n                            <th mat-header-cell *matHeaderCellDef> Received </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"><span>{{element.Received | date: 'EEE, MMMM d, yyyy h:mm a'}}</span></td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"Subject\">\r\n                            <th mat-header-cell *matHeaderCellDef> Subject </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"width-40-percent\"><span>{{element.Subject}}</span></td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"Delete\">\r\n                            <th mat-header-cell *matHeaderCellDef style=\"min-width:70px;\">\r\n\r\n                                <div class=\"header-text\" style=\"background: #5dbcd2 !important;\">\r\n\r\n                                </div>\r\n                            </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"padding-left option-column-style\" (click)=\"$event.stopPropagation()\">\r\n\r\n                                <span *ngIf=\"loggedInUserDetails.Roles.trim().toLowerCase() == 'front desk'\">\r\n                                    <a fxFlexFill href=\"\" title=\"Delete Message\"\r\n                                       class=\"mat-row-link table-action-icons\" style=\"text-align:center;\"\r\n                                       (click)=\"!!UpdateMessageInactive(element.ID)\">\r\n                                        <ion-icon name=\"trash-outline\" class=\"iconsize-medium handcursor\"></ion-icon>\r\n                                    </a>\r\n                                </span>\r\n\r\n                            </td>\r\n                        </ng-container>\r\n\r\n                        <!--<ng-container matColumnDef=\"Action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n\r\n                        <button mat-menu-item [routerLink]=\"['incomingmessagedetail', element.ID, 'edit']\" [disabled]=\"loggedInUserDetails.Roles.toLocaleLowerCase()=='system administrator'\">Detail</button>\r\n                    </td>\r\n                </ng-container>-->\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\" class=\"example-detail-row\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"getMessageDetail(row,'edit')\"\r\n                            [ngClass]=\"{hovered: row.hovered,read: row.IsRead==null || loggedInUserDetails.Roles.trim().toLowerCase() != 'front desk',highlighted: selection.isSelected (row)}\"\r\n                            (mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"></tr>\r\n                    </table>\r\n                    <mat-toolbar *ngIf=\"noRecordsMessage != ''\" class=\"no-records-message\"> {{ noRecordsMessage }} </mat-toolbar>\r\n                </div>\r\n                <mat-paginator *ngIf=\"angularDataSource?.data?.length > 0\"\r\n                               [length]=\"DTincomingMessages?.TotalRecords\"\r\n                               [pageIndex]=\"DTincomingMessages?.CurrentPage\"\r\n                               [pageSize]=\"DTincomingMessages?.PageSize\"\r\n                               [pageSizeOptions]=\"pageSizeOptions\"\r\n                               (page)=\"pageEvent = getPaginationData($event);\"\r\n                               showFirstLastButtons\r\n                               class=\"full-width\">\r\n                </mat-paginator>\r\n\r\n            </div>\r\n            <div class=\"row action-card-row\" style=\"margin: 0px 0px 0 0px !important;\" [style.display]=\"isComposeDivVisible ? 'block' : 'none'\">\r\n                <div class=\"composeDiv\">\r\n                    <div class=\"row action-card-row\">\r\n                        <div class=\"col-sm-12 headerstyle\">\r\n\r\n                            <!--<span *ngIf=\"isEdit\" style=\"float:left;font-size:22px;\">{{DTMessageSent.Subject}}</span>-->\r\n                            <span *ngIf=\"!isEdit\">Compose Email</span>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row action-card-row\">\r\n                        <div class=\"col-sm-1 textalign-left\">\r\n\r\n                            <!--<h4><span class=\"badge badge-secondary button-border-radius-zero\">To</span></h4>-->\r\n                            To:\r\n                        </div>\r\n                        <div class=\"col-sm-11\">\r\n                            <!--<input type=\"email\" class=\"form-control\" id=\"EmailTo\" placeholder=\"email@example.com\">-->\r\n                            <!--<mat-form-field class=\"example-chip-list\">-->\r\n                            <mat-chip-list #chipList aria-label=\"Fruit selection\">\r\n                                <mat-chip *ngFor=\"let fruit of mails\"\r\n                                          [selectable]=\"selectable\"\r\n                                          [removable]=\"removable\"\r\n                                          (removed)=\"remove(fruit)\">\r\n                                    {{fruit}}\r\n                                    <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                                </mat-chip>\r\n                                <input placeholder=\"\"\r\n                                       #mailInput\r\n                                       [formControl]=\"fruitCtrl\"\r\n                                       [matAutocomplete]=\"auto\"\r\n                                       [matChipInputFor]=\"chipList\"\r\n                                       [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                                       (matChipInputTokenEnd)=\"add($event)\"\r\n                                       *ngIf=\"!isEdit\">\r\n                            </mat-chip-list>\r\n                            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n                                <mat-option *ngFor=\"let fruit of filteredmails | async\" [value]=\"fruit\">\r\n                                    {{fruit}}\r\n                                </mat-option>\r\n                            </mat-autocomplete>\r\n                            <!--</mat-form-field>-->\r\n                        </div>\r\n\r\n                    </div>\r\n                    <!--<div class=\"row action-card-row\">\r\n                <div class=\"col-sm-2\">\r\n\r\n\r\n                    Cc\r\n                </div>\r\n                <div class=\"col-sm-10\">\r\n\r\n                    <mat-chip-list #ccchipList>\r\n                        <mat-chip *ngFor=\"let cc of ccmails\"\r\n                                  [selectable]=\"selectable\"\r\n                                  [removable]=\"removable\"\r\n                                  (removed)=\"removecc(cc)\">\r\n                            {{cc}}\r\n                            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                        </mat-chip>\r\n                        <input placeholder=\"\"\r\n                               #ccmailInput\r\n                               [formControl]=\"ccCtrl\"\r\n                               [matAutocomplete]=\"ccauto\"\r\n                               [matChipInputFor]=\"ccchipList\"\r\n                               [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                               (matChipInputTokenEnd)=\"addcc($event)\">\r\n                    </mat-chip-list>\r\n                    <mat-autocomplete #ccauto=\"matAutocomplete\" (optionSelected)=\"selectedcc($event)\">\r\n                        <mat-option *ngFor=\"let cc of filteredccmails | async\" [value]=\"cc\">\r\n                            {{cc}}\r\n                        </mat-option>\r\n                    </mat-autocomplete>\r\n\r\n                </div>\r\n            </div>-->\r\n                    <div class=\"row action-card-row\">\r\n                        <div class=\"col-sm-1 textalign-left\">\r\n\r\n                            <!--<h4><span class=\"badge badge-secondary button-border-radius-zero\">Subject</span></h4>-->\r\n                            Subject:\r\n                        </div>\r\n                        <div class=\"col-sm-11 textalign-left\">\r\n                            <!--<input type=\"text\" class=\"form-control\" id=\"EmailSubject\" [(ngModel)]=\"DTMessageSent.Subject\">-->\r\n\r\n                            <span *ngIf=\"!isEdit\"><input [disabled]=\"isEdit\" matInput maxlength=\"400\" type=\"text\" id=\"EmailSubject\" [(ngModel)]=\"DTMessageSent.Subject\"></span>\r\n                            <label *ngIf=\"isEdit\">{{DTMessageSent.Subject}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row action-card-row\" *ngIf=\"isEdit\">\r\n                        <div class=\"col-sm-1 textalign-left\">\r\n\r\n                            <!--<h4><span class=\"badge badge-secondary button-border-radius-zero\">Subject</span></h4>-->\r\n                            Sent:\r\n                        </div>\r\n                        <div class=\"col-sm-11 textalign-left\">\r\n                            <!--<input type=\"text\" class=\"form-control\" id=\"EmailSubject\" [(ngModel)]=\"DTMessageSent.Subject\">-->\r\n\r\n                            <label>{{DTMessageSent.Sent| date: 'EEE, MMMM d, yyyy h:mm a'}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row action-card-row\" *ngIf=\"!isEdit\">\r\n                        <div class=\"col-sm-2\">\r\n                            <span class=\"hidden-file\" style=\"display:none;\">\r\n                                <input type=\"file\" #fileInput ng2FileSelect [uploader]=\"uploader\" (onFileSelected)=\"onFileSelected($event)\" />\r\n                            </span>\r\n                            <div class=\"btn-group\" (click)=\"fileInput.click()\">\r\n\r\n                                <div type=\"button\" class=\"btn btn-primary button-border-radius-zero\">\r\n                                    <span class=\"iconsize-medium\"><ion-icon name=\"attach-outline\"></ion-icon></span>\r\n                                    Attach File\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-10\">\r\n\r\n\r\n\r\n                            <div *ngFor=\"let item of uploader.queue\" class=\"attachment\">\r\n                                <span style=\"background:border-box;\" class=\"text-hidden\">\r\n                                    {{ item?.file?.name }}\r\n\r\n                                </span>\r\n                                <span class=\"iconsize-medium\" style=\"float: right;margin-top:-16px;cursor: pointer;\" (click)=\"item.remove()\"><ion-icon name=\"close-circle-outline\"></ion-icon></span>\r\n                                <span>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</span>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row action-card-row\" *ngIf=\"isEdit\">\r\n                        <div class=\"col-sm-1\"></div>\r\n                        <div class=\"col-sm-11\">\r\n\r\n                            <div *ngFor=\"let item of DTMessageSent.Attachment\" class=\"attachment\" (click)=\"downloadAttachment(item)\" style=\"cursor: pointer;\">\r\n                                <span style=\"background:border-box;\" class=\"text-hidden\">\r\n                                    {{ item?.FileName }}\r\n\r\n                                </span>\r\n                                <span class=\"iconsize-medium\" style=\"float: right;margin-top:-16px;cursor: pointer;padding-right: 10px;\">\r\n                                    <ion-icon name=\"cloud-download-outline\"></ion-icon>\r\n                                </span>\r\n\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row action-card-row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <textarea [disabled]=\"isEdit\" class=\"form-control\" id=\"MessageBody\" name=\"MessageBody\" rows=\"9\"\r\n                                      [(ngModel)]=\"DTMessageSent.MessageBody\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <!--<div class=\"row action-card-row\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <label class=\"col-sm-3 col-form-label\" for=\"files\">Attachment</label>\r\n                                <div class=\"col-sm-9\">\r\n                                    <span class=\"hidden-file\">\r\n                                        <input type=\"file\" #fileInput ng2FileSelect [uploader]=\"uploader\" (onFileSelected)=\"onFileSelected($event)\" />\r\n                                    </span>\r\n                                    <div class=\"btn-group\" (click)=\"fileInput.click()\">\r\n                                        <button type=\"button\" class=\"btn btn-primary btn-group-icon btn-group-divider\">\r\n                                            <i class=\"ion-plus-round\"></i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-primary\">\r\n                                            Add Documents\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>-->\r\n                    <div class=\"row action-card-row\">\r\n                        <div class=\"col-sm-12\" style=\"text-align:right;\">\r\n\r\n                            <button type=\"button\" class=\"btn btn-dark button-border-radius-zero\" (click)=\"CancelCompose()\">Close</button> &nbsp;&nbsp;\r\n                            <button type=\"button\" *ngIf=\"!isEdit\" class=\"btn btn-primary button-border-radius-zero\" (click)=\"sendEmail()\">Send</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row action-card-row\" style=\"margin: 0px 0px 0 0px !important;\" [style.display]=\"isDeletedDivVisible ? 'block' : 'none'\">\r\n                <!--style=\"overflow:auto;max-height:calc(100vh - 105px);\"-->\r\n\r\n                <div class=\"referrercontainer\">\r\n                    <table mat-table [dataSource]=\"deletedmessageangularDataSource\">\r\n\r\n                        <!-- Position Column -->\r\n                        <ng-container matColumnDef=\"From\">\r\n                            <th mat-header-cell *matHeaderCellDef>\r\n                                From\r\n\r\n                            </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"><span>{{element.From}}</span></td>\r\n                        </ng-container>\r\n\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"To\">\r\n                            <th mat-header-cell *matHeaderCellDef> To </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"><span>{{element.To}}</span></td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"Received\">\r\n                            <th mat-header-cell *matHeaderCellDef> Received </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"><span>{{element.Received | date: 'EEE, MMMM d, yyyy h:mm a'}}</span></td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"Subject\">\r\n                            <th mat-header-cell *matHeaderCellDef> Subject </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"width-40-percent\"><span>{{element.Subject}}</span></td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"Delete\">\r\n                            <th mat-header-cell *matHeaderCellDef style=\"min-width:70px;\">\r\n\r\n                                <div class=\"header-text\" style=\"background: #5dbcd2 !important;\">\r\n\r\n                                </div>\r\n                            </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"padding-left option-column-style\" (click)=\"$event.stopPropagation()\">\r\n\r\n                                <span *ngIf=\"loggedInUserDetails.Roles.trim().toLowerCase() == 'front desk'\">\r\n                                    <a fxFlexFill href=\"\" title=\"Delete Message\"\r\n                                       class=\"mat-row-link table-action-icons\" style=\"text-align:center;\"\r\n                                       (click)=\"!!DeleteMessage(element.ID)\">\r\n                                        <ion-icon name=\"trash-outline\" class=\"iconsize-medium handcursor\"></ion-icon>\r\n                                    </a>\r\n                                </span>\r\n\r\n                            </td>\r\n                        </ng-container>\r\n\r\n                        <!--<ng-container matColumnDef=\"Action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n\r\n                        <button mat-menu-item [routerLink]=\"['incomingmessagedetail', element.ID, 'edit']\" [disabled]=\"loggedInUserDetails.Roles.toLocaleLowerCase()=='system administrator'\">Detail</button>\r\n                    </td>\r\n                </ng-container>-->\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"deleteddisplayedColumns; sticky: true\" class=\"example-detail-row\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: deleteddisplayedColumns;\" (click)=\"getMessageDetail(row,'readonly')\"\r\n                            [ngClass]=\"{hovered: row.hovered,read: row.IsRead==null || loggedInUserDetails.Roles.trim().toLowerCase() != 'front desk',highlighted: selection.isSelected (row)}\"\r\n                            (mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"></tr>\r\n                    </table>\r\n                    <mat-toolbar *ngIf=\"noDeletedRecordsMessage != ''\" class=\"no-records-message\"> {{ noDeletedRecordsMessage }} </mat-toolbar>\r\n                </div>\r\n                <mat-paginator *ngIf=\"deletedmessageangularDataSource?.data?.length > 0\"\r\n                               [length]=\"DTdeletedincomingMessages?.TotalRecords\"\r\n                               [pageIndex]=\"DTdeletedincomingMessages?.CurrentPage\"\r\n                               [pageSize]=\"DTdeletedincomingMessages?.PageSize\"\r\n                               [pageSizeOptions]=\"pageSizeOptions\"\r\n                               (page)=\"pageEvent = getDeletedMessagePaginationData($event);\"\r\n                               showFirstLastButtons\r\n                               class=\"full-width\">\r\n                </mat-paginator>\r\n\r\n            </div>\r\n            <div class=\"row action-card-row\" style=\"margin: 0px 0px 0 0px !important;\" [style.display]=\"isSentDivVisible ? 'block' : 'none'\">\r\n                <div class=\"sentDiv\">\r\n                    <table mat-table [dataSource]=\"angularDataSourceSentMessage\">\r\n                        <!-- Position Column -->\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"To\">\r\n                            <th mat-header-cell *matHeaderCellDef> To </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"><span>{{element.To}}</span></td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"Received\">\r\n                            <th mat-header-cell *matHeaderCellDef> Sent </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"width-20-percent\"><span>{{element.Sent | date: 'EEE, MMMM d, yyyy h:mm a'}}</span></td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"Subject\">\r\n                            <th mat-header-cell *matHeaderCellDef> Subject </th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"width-40-percent\"><span>{{element.Subject}}</span></td>\r\n                        </ng-container>\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"sentdisplayedColumns; sticky: true\" class=\"example-detail-row\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: sentdisplayedColumns;\" (click)=\"getSentMessageDetail(row)\"\r\n                            [ngClass]=\"{hovered: row.hovered , highlighted: sentselection.isSelected (row)}\"\r\n                            (mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"></tr>\r\n\r\n\r\n                    </table>\r\n                    <mat-toolbar *ngIf=\"noSentRecordsMessage != ''\" class=\"no-records-message\"> {{ noSentRecordsMessage }} </mat-toolbar>\r\n                    <mat-paginator *ngIf=\"angularDataSourceSentMessage?.data?.length > 0\"\r\n                                   [length]=\"DTMessageSentList?.TotalRecords\"\r\n                                   [pageIndex]=\"DTMessageSentList?.CurrentPage\"\r\n                                   [pageSize]=\"DTMessageSentList?.PageSize\"\r\n                                   [pageSizeOptions]=\"pageSizeOptions\"\r\n                                   (page)=\"pageEvent = getPaginationDataSentMessage($event);\"\r\n                                   showFirstLastButtons\r\n                                   class=\"full-width\">\r\n                    </mat-paginator>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      \r\n\r\n    </mat-drawer-container>\r\n\r\n</div>\r\n\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n    <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/add/operator/pairwise.js":
  /*!********************************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/add/operator/pairwise.js ***!
    \********************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesRxjsCompat_esm2015AddOperatorPairwiseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _operator_pairwise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../operator/pairwise */
    "./node_modules/rxjs-compat/_esm2015/operator/pairwise.js");

    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.pairwise = _operator_pairwise__WEBPACK_IMPORTED_MODULE_1__["pairwise"]; //# sourceMappingURL=pairwise.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/operator/pairwise.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/operator/pairwise.js ***!
    \****************************************************************/

  /*! exports provided: pairwise */

  /***/
  function node_modulesRxjsCompat_esm2015OperatorPairwiseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pairwise", function () {
      return pairwise;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function pairwise() {
      return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pairwise"])()(this);
    } //# sourceMappingURL=pairwise.js.map

    /***/

  },

  /***/
  "./src/app/modules/emrpage/component/dt-clinic-user-mapping/dt-clinic-user-mapping.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dt-clinic-user-mapping/dt-clinic-user-mapping.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmrpageComponentDtClinicUserMappingDtClinicUserMappingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".referrercontainer {\n  /*height: 400px;*/\n  overflow: auto;\n  width: 100%;\n  border: 1px solid slategrey;\n}\n\n.summary-table {\n  background: white;\n  height: calc(100vh - 160px);\n  overflow: auto;\n  border: 1px solid #bfbdbd;\n}\n\n.summary-table .mat-header-cell {\n  min-width: 150px;\n}\n\n.summary-table .mat-toolbar {\n  margin-top: 150px;\n  background-color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.summary-table .mat-table thead {\n  background: none !important;\n}\n\n.referrer-dialog-container .mat-dialog-container {\n  padding: 0px;\n  overflow-x: hidden;\n  height: 200px;\n}\n\n.createreferrer {\n  padding-right: 100px;\n}\n\n.pagewidth {\n  width: 100%;\n}\n\n.fullwidth {\n  width: 100% !important;\n}\n\nth.mat-header-cell {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdC1jbGluaWMtdXNlci1tYXBwaW5nL0M6XFxEaXJlY3RUcnVzdFxcQ29kZVxcVGVhbVJlaGFiXFxDbGllbnRBcHAvc3JjXFxhcHBcXG1vZHVsZXNcXGVtcnBhZ2VcXGNvbXBvbmVudFxcZHQtY2xpbmljLXVzZXItbWFwcGluZ1xcZHQtY2xpbmljLXVzZXItbWFwcGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdC1jbGluaWMtdXNlci1tYXBwaW5nL2R0LWNsaW5pYy11c2VyLW1hcHBpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDSTtFQUNJLGdCQUFBO0FDQ1I7O0FERUk7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FSOztBRElBO0VBQ0ksMkJBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLG9CQUFBO0FDREo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW1ycGFnZS9jb21wb25lbnQvZHQtY2xpbmljLXVzZXItbWFwcGluZy9kdC1jbGluaWMtdXNlci1tYXBwaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZmVycmVyY29udGFpbmVyIHtcclxuICAgIC8qaGVpZ2h0OiA0MDBweDsqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNsYXRlZ3JleTtcclxufVxyXG5cclxuLnN1bW1hcnktdGFibGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJkYmQ7XHJcblxyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LXRvb2xiYXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRhYmxlIC5tYXQtdGFibGUgdGhlYWQge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVmZXJyZXItZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmNyZWF0ZXJlZmVycmVyIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG59XHJcbi5wYWdld2lkdGh7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbi5mdWxsd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4iLCIucmVmZXJyZXJjb250YWluZXIge1xuICAvKmhlaWdodDogNDAwcHg7Ki9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XG59XG5cbi5zdW1tYXJ5LXRhYmxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJkYmQ7XG59XG4uc3VtbWFyeS10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cbi5zdW1tYXJ5LXRhYmxlIC5tYXQtdG9vbGJhciB7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdW1tYXJ5LXRhYmxlIC5tYXQtdGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yZWZlcnJlci1kaWFsb2ctY29udGFpbmVyIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY3JlYXRlcmVmZXJyZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbn1cblxuLnBhZ2V3aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbHdpZHRoIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/dt-clinic-user-mapping/dt-clinic-user-mapping.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dt-clinic-user-mapping/dt-clinic-user-mapping.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: DtClinicUserMappingComponent */

  /***/
  function srcAppModulesEmrpageComponentDtClinicUserMappingDtClinicUserMappingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DtClinicUserMappingComponent", function () {
      return DtClinicUserMappingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/layout/services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/modal/ModalStaticClass */
    "./src/app/modules/shared/components/modal/ModalStaticClass.ts");
    /* harmony import */


    var src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/modules/emrpage/services/referral.service */
    "./src/app/modules/emrpage/services/referral.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var DtClinicUserMappingComponent =
    /*#__PURE__*/
    function () {
      function DtClinicUserMappingComponent(_headerService, _storageHelper, _sidebarService, modalDialog, _referrerservice) {
        _classCallCheck(this, DtClinicUserMappingComponent);

        this._headerService = _headerService;
        this._storageHelper = _storageHelper;
        this._sidebarService = _sidebarService;
        this.modalDialog = modalDialog;
        this._referrerservice = _referrerservice;
        this.displayedColumns = ['ClinicNo', 'ClinicName', 'EmailId', 'Actions'];
        this.displayedColumns1 = ['ClinicNo', 'ClinicName', 'EmailId'];
        this.dtclinicmappings = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.dtclinicmapping = {};
        this.dtclinicmappingsFound = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.dtclinicmappingFound = {};
        this.noRecordsMessage1 = "";
        this.noRecordsMessage2 = "";
        this.dtclinicmappingsselect = {};
        this.selectClinicName = {};
        this.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dtclinicmappings.clinicmappings);
        this.angularDataSourcefound = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dtclinicmappingsFound.clinicmappings);
        this.pageSizeOptions = [10, 20, 30];
        this.loadingData = false;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        this.options = [{
          ClinicName: 'Mary',
          ClinicNo: '101'
        }, {
          ClinicName: 'Mary1',
          ClinicNo: '102'
        }, {
          ClinicName: 'Mary2',
          ClinicNo: '103'
        }];
      }

      _createClass(DtClinicUserMappingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._sidebarService.setActiveState("clinicmappings");

          this._sidebarService.editSidebarShowValue(true);

          this.getClincs();
          this.getClincmappings();
        }
      }, {
        key: "displayFn",
        value: function displayFn(user) {
          return user && user.ClinicName ? user.ClinicName : '';
        }
      }, {
        key: "_filter",
        value: function _filter(name) {
          var filterValue = name.toLowerCase();
          return this.options.filter(function (option) {
            return option.ClinicName.toLowerCase().includes(filterValue);
          });
        }
      }, {
        key: "clearControls",
        value: function clearControls() {
          this.dtclinicmappingsselect.ClinicName = "";
          this.dtclinicmappingsselect.ClinicNo = "";
          this.dtclinicmappingsselect.EmailId = "";
          this.selectClinicName = {};
        }
      }, {
        key: "SaveMapping",
        value: function SaveMapping() {
          var _this4 = this;

          if (!this.clinicForm.invalid && this.selectClinicName.ClinicName != undefined && this.selectClinicName.ClinicName != null && this.selectClinicName.ClinicName != '') {
            this.dtclinicmappingsselect.ClinicName = this.selectClinicName.ClinicName;
            this.dtclinicmappingsselect.ClinicNo = this.selectClinicName.ClinicNo;
            var mappingexist = this.dtclinicmappings.clinicmappings.filter(function (x) {
              return x.EmailId != "integration@test.direct.team-rehab.com";
            });

            if (mappingexist != undefined && mappingexist != null && mappingexist.length > 0) {
              var itemfound = mappingexist.filter(function (x) {
                return x.ClinicNo == _this4.dtclinicmappingsselect.ClinicNo;
              });

              if (itemfound != undefined && itemfound != null && itemfound.length > 0) {
                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Clinic Mapping", "Do you want to Update the Mapping. Please confirm", 1, false, 1, "400px").subscribe(function (res) {
                  if (res) {
                    _this4._referrerservice.SaveClinicMapping(_this4.dtclinicmappingsselect).subscribe(function (response) {
                      _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this4.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);

                      _this4.getClincmappings();

                      _this4.clearControls();
                    });
                  }
                });
              } else {
                this._referrerservice.SaveClinicMapping(this.dtclinicmappingsselect).subscribe(function (response) {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this4.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);

                  _this4.getClincmappings();

                  _this4.clearControls();
                });
              }
            } else {
              this._referrerservice.SaveClinicMapping(this.dtclinicmappingsselect).subscribe(function (response) {
                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this4.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);

                _this4.getClincmappings();

                _this4.clearControls();
              });
            }
          }
        }
      }, {
        key: "getClincs",
        value: function getClincs() {
          var _this5 = this;

          this.loadingData = true;

          this._referrerservice.getClinics().subscribe(function (res) {
            _this5.options = res;
            _this5.filteredOptions = _this5.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (name) {
              return name ? _this5._filter(name) : _this5.options.slice();
            }));
          }, function (err) {});
        }
      }, {
        key: "getClincmappings",
        value: function getClincmappings() {
          var _this6 = this;

          this.loadingData = true;

          this._referrerservice.getClinicMappings().subscribe(function (res) {
            _this6.dtclinicmappings.clinicmappings = res;

            if (_this6.dtclinicmappings.clinicmappings != null && _this6.dtclinicmappings.clinicmappings.length > 0 && _this6.dtclinicmappings.clinicmappings != undefined) {
              _this6.dtclinicmappings.clinicmappings = _this6.dtclinicmappings.clinicmappings.filter(function (x) {
                return x.MappingExist == false;
              });
            }

            _this6.loadingData = false;
            _this6.dtclinicmappings.TotalRecords = _this6.dtclinicmappings.clinicmappings.length || 0;
            _this6.dtclinicmappings.TotalPages = Math.ceil(_this6.dtclinicmappings.TotalRecords / _this6.dtclinicmappings.PageSize);
            _this6.dtclinicmappings.CurrentPage = 0;
            _this6.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this6.dtclinicmappings.clinicmappings.slice(0, _this6.dtclinicmappings.PageSize));

            if (_this6.dtclinicmappings.clinicmappings.length <= 0) {
              _this6.noRecordsMessage2 = "No records found.";
            } else {
              _this6.noRecordsMessage2 = "";
            }

            _this6.dtclinicmappingsFound.clinicmappings = res;

            if (_this6.dtclinicmappingsFound.clinicmappings != null && _this6.dtclinicmappingsFound.clinicmappings.length > 0 && _this6.dtclinicmappingsFound.clinicmappings != undefined) {
              _this6.dtclinicmappingsFound.clinicmappings = _this6.dtclinicmappingsFound.clinicmappings.filter(function (x) {
                return x.MappingExist == true;
              });
            }

            _this6.loadingData = false;
            _this6.dtclinicmappingsFound.TotalRecords = _this6.dtclinicmappingsFound.clinicmappings.length || 0;
            _this6.dtclinicmappingsFound.TotalPages = Math.ceil(_this6.dtclinicmappingsFound.TotalRecords / _this6.dtclinicmappingsFound.PageSize);
            _this6.dtclinicmappingsFound.CurrentPage = 0;
            _this6.angularDataSourcefound = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this6.dtclinicmappingsFound.clinicmappings.slice(0, _this6.dtclinicmappingsFound.PageSize));
            console.log(_this6.angularDataSourcefound.data.length);

            if (_this6.dtclinicmappingsFound.clinicmappings.length <= 0) {
              _this6.noRecordsMessage1 = "No records found.";
            } else {
              _this6.noRecordsMessage1 = "";
            }
          }, function (err) {});
        } //Paginator

      }, {
        key: "getPaginationData",
        value: function getPaginationData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtclinicmappings.CurrentPage = pageEvent.pageIndex;
            this.dtclinicmappings.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.dtclinicmappings.clinicmappings.slice(this.dtclinicmappings.CurrentPage * this.dtclinicmappings.PageSize, (this.dtclinicmappings.CurrentPage + 1) * this.dtclinicmappings.PageSize + 1);
            this.angularDataSource.sort = this.sort;
          } else {
            this.angularDataSource.data = this.dtclinicmappings.clinicmappings.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
          }
        }
      }, {
        key: "getPaginationfoundData",
        value: function getPaginationfoundData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtclinicmappingsFound.CurrentPage = pageEvent.pageIndex;
            this.dtclinicmappingsFound.PageSize = pageEvent.pageSize;
            this.angularDataSourcefound.data = this.dtclinicmappingsFound.clinicmappings.slice(this.dtclinicmappingsFound.CurrentPage * this.dtclinicmappingsFound.PageSize, (this.dtclinicmappingsFound.CurrentPage + 1) * this.dtclinicmappingsFound.PageSize + 1);
            this.angularDataSourcefound.sort = this.sort;
          } else {
            this.angularDataSourcefound.data = this.dtclinicmappingsFound.clinicmappings.slice(0, pageEvent.pageSize);
            this.angularDataSourcefound.sort = this.sort;
          }
        }
      }, {
        key: "CreatePatient",
        value: function CreatePatient(patientid) {
          var _this7 = this;

          _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Create Patient", "This action will Create Patient. Please confirm", 1, false, 1, "400px").subscribe(function (res) {
            if (res) {
              _this7.loadingData = true;

              _this7._referrerservice.CreatePatient(patientid).subscribe(function (response) {
                _this7.loadingData = false;

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this7.modalDialog, "", "Success", "Details Created successfully.", 0, false, 1, "500px", 0); //  this.getInProgressPatients();

              });
            }
          });
        }
      }, {
        key: "RejectPatient",
        value: function RejectPatient(patientid) {
          var _this8 = this;

          _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Reject Patient", "This action will Reject Patient. Please confirm", 1, false, 1, "400px").subscribe(function (res) {
            if (res) {
              _this8.loadingData = true;

              _this8._referrerservice.RejectPatient(patientid).subscribe(function (response) {
                _this8.loadingData = false;

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this8.modalDialog, "", "Success", "Details Rejected successfully.", 0, false, 1, "500px", 0); // this.getInProgressPatients();

              });
            }
          });
        }
      }, {
        key: "ImportPatient",
        value: function ImportPatient(patientid) {
          var _this9 = this;

          _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Import Patient", "This action will Import Patient. Please confirm", 1, false, 1, "400px").subscribe(function (res) {
            if (res) {
              _this9.loadingData = true;

              _this9._referrerservice.ImportPatient(patientid).subscribe(function (response) {
                _this9.loadingData = false;

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this9.modalDialog, "", "Success", "Details Imported successfully.", 0, false, 1, "500px", 0); // this.getInProgressPatients();

              });
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "RemoveMapping",
        value: function RemoveMapping(clinicno) {
          var _this10 = this;

          _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Remove Mapping", "Do you want to remove mapping. Please confirm", 1, false, 1, "400px").subscribe(function (res) {
            if (res) {
              _this10._referrerservice.RemoveMapping(clinicno).subscribe(function (response) {
                _this10.loadingData = false;

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this10.modalDialog, "", "Success", "Mapping removed successfully.", 0, false, 1, "500px", 0);

                _this10.getClincmappings();
              }, function (err) {
                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this10.modalDialog, "", "Error", "something went wrong", 0, false, 1, "500px", 1);
              });
            }
          });
        }
      }, {
        key: "EditMapping",
        value: function EditMapping(clinicno) {
          var clinicdetails = this.dtclinicmappingsFound.clinicmappings.filter(function (x) {
            return x.ClinicNo == clinicno;
          });

          if (clinicdetails != undefined && clinicdetails != null && clinicdetails.length > 0) {
            this.selectClinicName.ClinicName = clinicdetails[0].ClinicName;
            this.selectClinicName.ClinicNo = clinicdetails[0].ClinicNo;
            this.dtclinicmappingsselect.EmailId = clinicdetails[0].EmailId; //this.dtclinicmappingsselect.ClinicUserPassword = clinicdetails[0].ClinicUserPassword;

            this.myControl.setValue({
              ClinicName: this.selectClinicName.ClinicName,
              ClinicNo: this.selectClinicName.ClinicNo
            });
          }
        }
      }]);

      return DtClinicUserMappingComponent;
    }();

    DtClinicUserMappingComponent.ctorParameters = function () {
      return [{
        type: src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"]
      }, {
        type: src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"]
      }, {
        type: src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_9__["ReferralService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])], DtClinicUserMappingComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], DtClinicUserMappingComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("clinicForm", null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"])], DtClinicUserMappingComponent.prototype, "clinicForm", void 0);
    DtClinicUserMappingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dt-clinic-user-mapping',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dt-clinic-user-mapping.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-clinic-user-mapping/dt-clinic-user-mapping.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./dt-clinic-user-mapping.component.scss */
      "./src/app/modules/emrpage/component/dt-clinic-user-mapping/dt-clinic-user-mapping.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"], src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"], src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_9__["ReferralService"]])], DtClinicUserMappingComponent);
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/dt-patient-referral-processed/dt-patient-referral-processed.component.scss":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dt-patient-referral-processed/dt-patient-referral-processed.component.scss ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmrpageComponentDtPatientReferralProcessedDtPatientReferralProcessedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".referrercontainer {\n  /*height: 400px;*/\n  overflow: auto;\n  width: 100%;\n  border: 1px solid slategrey;\n}\n\n.summary-table {\n  background: white;\n  height: calc(100vh - 160px);\n  overflow: auto;\n  border: 1px solid #bfbdbd;\n}\n\n.summary-table .mat-header-cell {\n  min-width: 150px;\n}\n\n.summary-table .mat-toolbar {\n  margin-top: 150px;\n  background-color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.summary-table .mat-table thead {\n  background: none !important;\n}\n\n.referrer-dialog-container .mat-dialog-container {\n  padding: 0px;\n  overflow-x: hidden;\n  height: 200px;\n}\n\n.createreferrer {\n  padding-right: 100px;\n}\n\n.pagewidth {\n  width: 100%;\n}\n\ntd.mat-cell {\n  border-right-style: none;\n}\n\nth.mat-header-cell {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdC1wYXRpZW50LXJlZmVycmFsLXByb2Nlc3NlZC9DOlxcRGlyZWN0VHJ1c3RcXENvZGVcXFRlYW1SZWhhYlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxlbXJwYWdlXFxjb21wb25lbnRcXGR0LXBhdGllbnQtcmVmZXJyYWwtcHJvY2Vzc2VkXFxkdC1wYXRpZW50LXJlZmVycmFsLXByb2Nlc3NlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdC1wYXRpZW50LXJlZmVycmFsLXByb2Nlc3NlZC9kdC1wYXRpZW50LXJlZmVycmFsLXByb2Nlc3NlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENJO0VBQ0ksZ0JBQUE7QUNDUjs7QURFSTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQVI7O0FESUE7RUFDSSwyQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksb0JBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURHQTtFQUNJLHdCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdC1wYXRpZW50LXJlZmVycmFsLXByb2Nlc3NlZC9kdC1wYXRpZW50LXJlZmVycmFsLXByb2Nlc3NlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWZlcnJlcmNvbnRhaW5lciB7XHJcbiAgICAvKmhlaWdodDogNDAwcHg7Ki9cclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRhYmxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZGJkO1xyXG5cclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC10b29sYmFyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgfVxyXG59XHJcblxyXG4uc3VtbWFyeS10YWJsZSAubWF0LXRhYmxlIHRoZWFkIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlZmVycmVyLWRpYWxvZy1jb250YWluZXIgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGVyZWZlcnJlciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnBhZ2V3aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG50ZC5tYXQtY2VsbCB7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIucmVmZXJyZXJjb250YWluZXIge1xuICAvKmhlaWdodDogNDAwcHg7Ki9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XG59XG5cbi5zdW1tYXJ5LXRhYmxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJkYmQ7XG59XG4uc3VtbWFyeS10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cbi5zdW1tYXJ5LXRhYmxlIC5tYXQtdG9vbGJhciB7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdW1tYXJ5LXRhYmxlIC5tYXQtdGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yZWZlcnJlci1kaWFsb2ctY29udGFpbmVyIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY3JlYXRlcmVmZXJyZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbn1cblxuLnBhZ2V3aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZC5tYXQtY2VsbCB7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbn1cblxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/dt-patient-referral-processed/dt-patient-referral-processed.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dt-patient-referral-processed/dt-patient-referral-processed.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: DtPatientReferralProcessedComponent */

  /***/
  function srcAppModulesEmrpageComponentDtPatientReferralProcessedDtPatientReferralProcessedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DtPatientReferralProcessedComponent", function () {
      return DtPatientReferralProcessedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/layout/services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/modal/ModalStaticClass */
    "./src/app/modules/shared/components/modal/ModalStaticClass.ts");
    /* harmony import */


    var src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/modules/emrpage/services/referral.service */
    "./src/app/modules/emrpage/services/referral.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");

    var DtPatientReferralProcessedComponent =
    /*#__PURE__*/
    function () {
      function DtPatientReferralProcessedComponent(_headerService, _storageHelper, _navigate, _sidebarService, modalDialog, _referrerservice) {
        _classCallCheck(this, DtPatientReferralProcessedComponent);

        this._headerService = _headerService;
        this._storageHelper = _storageHelper;
        this._navigate = _navigate;
        this._sidebarService = _sidebarService;
        this.modalDialog = modalDialog;
        this._referrerservice = _referrerservice;
        this.displayedColumns = ['From', 'To', 'Received', 'Subject', 'Status', 'Processed', 'Action'];
        this.displayedColumns1 = ['FirstName', 'LastName', 'City', 'State', 'DOB', 'ReceptionistComments'];
        this.dtprocessedPatients = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.dtprocessedPatient = {};
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](false, []);
        this.noRecordsMessage1 = "";
        this.noRecordsMessage2 = "";
        this.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dtprocessedPatients.processeddtmessages);
        this.pageSizeOptions = [10, 20, 30];
        this.loadingData = false;
        this.loggedInUserDetails = {};
      }

      _createClass(DtPatientReferralProcessedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._sidebarService.setActiveState("processedmessages");

          this._sidebarService.editSidebarShowValue(true);

          if (this._storageHelper.getItem("loggedInUserDetails") != null) {
            this.loggedInUserDetails = this._storageHelper.getItem("loggedInUserDetails");
          }

          this.getProcessedPatients();
        }
      }, {
        key: "unprocessReferral",
        value: function unprocessReferral(ID) {
          var _this11 = this;

          this.loadingData = true;

          this._referrerservice.unprocessReferral(ID).subscribe(function (res) {
            _this11.loadingData = false;

            if (res == true) {
              // this.noRecordsMessage1 = "Message moved to Inbox Succcessfully";
              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this11.modalDialog, "", "Success", "Message moved to Inbox Succcessfully.", 0, false, 1, "500px", 0);

              _this11.getProcessedPatients();
            } else {
              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this11.modalDialog, "", "Error", "Failed to move Message to Inbox.", 0, false, 1, "500px", 1); //this.noRecordsMessage1 = "Failed to move Message to Inbox";

            }
          }, function (err) {});
        }
      }, {
        key: "getProcessedPatients",
        value: function getProcessedPatients() {
          var _this12 = this;

          this.loadingData = true;

          this._referrerservice.getDTProcessedtMessageList(this.loggedInUserDetails.LoginName).subscribe(function (res) {
            _this12.loadingData = false;
            _this12.dtprocessedPatients.processeddtmessages = res; //this.dtprocessedPatients.processeddtmessages = this.dtprocessedPatients.processeddtmessages.filter(x => x.MatchFound == false);

            _this12.dtprocessedPatients.TotalRecords = _this12.dtprocessedPatients.processeddtmessages.length || 0;
            _this12.dtprocessedPatients.TotalPages = Math.ceil(_this12.dtprocessedPatients.TotalRecords / _this12.dtprocessedPatients.PageSize);
            _this12.dtprocessedPatients.CurrentPage = 0;
            _this12.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this12.dtprocessedPatients.processeddtmessages.slice(0, _this12.dtprocessedPatients.PageSize));
            _this12.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](false, []);

            if (_this12.dtprocessedPatients.processeddtmessages.length <= 0) {
              _this12.noRecordsMessage1 = "No records found.";
            } else {
              _this12.noRecordsMessage1 = "";
            }
          }, function (err) {});
        } //Paginator

      }, {
        key: "getPaginationData",
        value: function getPaginationData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtprocessedPatients.CurrentPage = pageEvent.pageIndex;
            this.dtprocessedPatients.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.dtprocessedPatients.processeddtmessages.slice(this.dtprocessedPatients.CurrentPage * this.dtprocessedPatients.PageSize, (this.dtprocessedPatients.CurrentPage + 1) * this.dtprocessedPatients.PageSize + 1);
            this.angularDataSource.sort = this.sort;
          } else {
            this.angularDataSource.data = this.dtprocessedPatients.processeddtmessages.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
          }
        }
      }, {
        key: "getMessageDetail",
        value: function getMessageDetail(row, action) {
          this.loadingData = true;

          this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.ID + '/referralprocessed'], {
            state: {
              redirect: this._navigate.url
            }
          }); //this._referrerservice.getIncomingMessageOperation(row.ID,'referralprocessed').subscribe(
          //    res => {
          //        this.loadingData = false;
          //        if (this.loggedInUserDetails.Roles.toLocaleLowerCase() == 'front desk' && action == 'edit') {
          //            this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.ID + '/edit'], { state: { redirect: this._navigate.url } });
          //        }
          //        else if (this.loggedInUserDetails.Roles.toLocaleLowerCase() == 'front desk' && action == 'referralprocessed') {
          //            this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.ID + '/referralprocessed'], { state: { redirect: this._navigate.url } });
          //        }
          //    },
          //    err => { });

        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return DtPatientReferralProcessedComponent;
    }();

    DtPatientReferralProcessedComponent.ctorParameters = function () {
      return [{
        type: src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"]
      }, {
        type: src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_9__["ReferralService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])], DtPatientReferralProcessedComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], DtPatientReferralProcessedComponent.prototype, "sort", void 0);
    DtPatientReferralProcessedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dt-patient-referral-processed',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dt-patient-referral-processed.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-patient-referral-processed/dt-patient-referral-processed.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./dt-patient-referral-processed.component.scss */
      "./src/app/modules/emrpage/component/dt-patient-referral-processed/dt-patient-referral-processed.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"], src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_9__["ReferralService"]])], DtPatientReferralProcessedComponent);
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/dt-patient-referral-wip/dt-patient-referral-wip.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dt-patient-referral-wip/dt-patient-referral-wip.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmrpageComponentDtPatientReferralWipDtPatientReferralWipComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".referrercontainer {\n  /*height: 400px;*/\n  overflow: auto;\n  width: 90%;\n  border: 1px solid slategrey;\n}\n\n.summary-table {\n  background: white;\n  height: calc(100vh - 160px);\n  overflow: auto;\n  border: 1px solid #bfbdbd;\n}\n\n.summary-table .mat-header-cell {\n  min-width: 150px;\n}\n\n.summary-table .mat-toolbar {\n  margin-top: 150px;\n  background-color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.summary-table .mat-table thead {\n  background: none !important;\n}\n\n.referrer-dialog-container .mat-dialog-container {\n  padding: 0px;\n  overflow-x: hidden;\n  height: 200px;\n}\n\n.createreferrer {\n  padding-right: 100px;\n}\n\n.pagewidth {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdC1wYXRpZW50LXJlZmVycmFsLXdpcC9DOlxcRGlyZWN0VHJ1c3RcXENvZGVcXFRlYW1SZWhhYlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxlbXJwYWdlXFxjb21wb25lbnRcXGR0LXBhdGllbnQtcmVmZXJyYWwtd2lwXFxkdC1wYXRpZW50LXJlZmVycmFsLXdpcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdC1wYXRpZW50LXJlZmVycmFsLXdpcC9kdC1wYXRpZW50LXJlZmVycmFsLXdpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENJO0VBQ0ksZ0JBQUE7QUNDUjs7QURFSTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQVI7O0FESUE7RUFDSSwyQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksb0JBQUE7QUNESjs7QURHQTtFQUNJLFdBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW1ycGFnZS9jb21wb25lbnQvZHQtcGF0aWVudC1yZWZlcnJhbC13aXAvZHQtcGF0aWVudC1yZWZlcnJhbC13aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmZXJyZXJjb250YWluZXIge1xyXG4gICAgLypoZWlnaHQ6IDQwMHB4OyovXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRhYmxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZGJkO1xyXG5cclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC10b29sYmFyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgfVxyXG59XHJcblxyXG4uc3VtbWFyeS10YWJsZSAubWF0LXRhYmxlIHRoZWFkIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlZmVycmVyLWRpYWxvZy1jb250YWluZXIgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGVyZWZlcnJlciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxufVxyXG4ucGFnZXdpZHRoe1xyXG4gICAgd2lkdGg6MTAwJTtcclxufSIsIi5yZWZlcnJlcmNvbnRhaW5lciB7XG4gIC8qaGVpZ2h0OiA0MDBweDsqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgc2xhdGVncmV5O1xufVxuXG4uc3VtbWFyeS10YWJsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZGJkO1xufVxuLnN1bW1hcnktdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG4uc3VtbWFyeS10YWJsZSAubWF0LXRvb2xiYXIge1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3VtbWFyeS10YWJsZSAubWF0LXRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmVmZXJyZXItZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNyZWF0ZXJlZmVycmVyIHtcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XG59XG5cbi5wYWdld2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/dt-patient-referral-wip/dt-patient-referral-wip.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dt-patient-referral-wip/dt-patient-referral-wip.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: DtPatientReferralWIPComponent */

  /***/
  function srcAppModulesEmrpageComponentDtPatientReferralWipDtPatientReferralWipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DtPatientReferralWIPComponent", function () {
      return DtPatientReferralWIPComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/layout/services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/modal/ModalStaticClass */
    "./src/app/modules/shared/components/modal/ModalStaticClass.ts");
    /* harmony import */


    var src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/modules/emrpage/services/referral.service */
    "./src/app/modules/emrpage/services/referral.service.ts");

    var DtPatientReferralWIPComponent =
    /*#__PURE__*/
    function () {
      function DtPatientReferralWIPComponent(_headerService, _storageHelper, _sidebarService, modalDialog, _referrerservice) {
        _classCallCheck(this, DtPatientReferralWIPComponent);

        this._headerService = _headerService;
        this._storageHelper = _storageHelper;
        this._sidebarService = _sidebarService;
        this.modalDialog = modalDialog;
        this._referrerservice = _referrerservice;
        this.displayedColumns = ['FirstName', 'LastName', 'City', 'State', 'DOB', 'ReceptionistComments', 'Actions'];
        this.displayedColumns1 = ['FirstName', 'LastName', 'City', 'State', 'DOB', 'ReceptionistComments', 'Actions'];
        this.dtwipPatients = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.dtwipPatient = {};
        this.dtwipPatientsFound = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.dtwipPatientFound = {};
        this.noRecordsMessage1 = "";
        this.noRecordsMessage2 = "";
        this.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dtwipPatients.wipdtmessages);
        this.angularDataSourcefound = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dtwipPatientsFound.wipdtmessages);
        this.pageSizeOptions = [10, 20, 30];
        this.loadingData = false;
      }

      _createClass(DtPatientReferralWIPComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._sidebarService.setActiveState("wipmessages");

          this._sidebarService.editSidebarShowValue(true);

          this.getInProgressPatients();
        }
      }, {
        key: "getInProgressPatients",
        value: function getInProgressPatients() {
          var _this13 = this;

          this.loadingData = true;

          this._referrerservice.getInProgressPatients().subscribe(function (res) {
            _this13.dtwipPatients.wipdtmessages = res;
            _this13.dtwipPatients.wipdtmessages = _this13.dtwipPatients.wipdtmessages.filter(function (x) {
              return x.MatchFound == false;
            });
            _this13.loadingData = false;
            _this13.dtwipPatients.TotalRecords = _this13.dtwipPatients.wipdtmessages.length || 0;
            _this13.dtwipPatients.TotalPages = Math.ceil(_this13.dtwipPatients.TotalRecords / _this13.dtwipPatients.PageSize);
            _this13.dtwipPatients.CurrentPage = 0;
            _this13.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this13.dtwipPatients.wipdtmessages.slice(0, _this13.dtwipPatients.PageSize));

            if (_this13.dtwipPatients.wipdtmessages.length <= 0) {
              _this13.noRecordsMessage1 = "No records found.";
            } else {
              _this13.noRecordsMessage1 = "";
            }

            _this13.dtwipPatientsFound.wipdtmessages = res;
            _this13.dtwipPatientsFound.wipdtmessages = _this13.dtwipPatientsFound.wipdtmessages.filter(function (x) {
              return x.MatchFound == true;
            });
            _this13.loadingData = false;
            _this13.dtwipPatientsFound.TotalRecords = _this13.dtwipPatientsFound.wipdtmessages.length || 0;
            _this13.dtwipPatientsFound.TotalPages = Math.ceil(_this13.dtwipPatientsFound.TotalRecords / _this13.dtwipPatientsFound.PageSize);
            _this13.dtwipPatientsFound.CurrentPage = 0;
            _this13.angularDataSourcefound = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this13.dtwipPatientsFound.wipdtmessages.filter(function (x) {
              return x.MatchFound == true;
            }).slice(0, _this13.dtwipPatients.PageSize));
            console.log(_this13.angularDataSourcefound.data.length);

            if (_this13.dtwipPatientsFound.wipdtmessages.length <= 0) {
              _this13.noRecordsMessage2 = "No records found.";
            } else {
              _this13.noRecordsMessage2 = "";
            }
          }, function (err) {});
        } //Paginator

      }, {
        key: "getPaginationData",
        value: function getPaginationData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtwipPatients.CurrentPage = pageEvent.pageIndex;
            this.dtwipPatients.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.dtwipPatients.wipdtmessages.slice(this.dtwipPatients.CurrentPage * this.dtwipPatients.PageSize, (this.dtwipPatients.CurrentPage + 1) * this.dtwipPatients.PageSize + 1);
            this.angularDataSource.sort = this.sort;
          } else {
            this.angularDataSource.data = this.dtwipPatients.wipdtmessages.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
          }
        }
      }, {
        key: "getPaginationfoundData",
        value: function getPaginationfoundData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtwipPatientsFound.CurrentPage = pageEvent.pageIndex;
            this.dtwipPatientsFound.PageSize = pageEvent.pageSize;
            this.angularDataSourcefound.data = this.dtwipPatientsFound.wipdtmessages.slice(this.dtwipPatientsFound.CurrentPage * this.dtwipPatientsFound.PageSize, (this.dtwipPatientsFound.CurrentPage + 1) * this.dtwipPatientsFound.PageSize + 1);
            this.angularDataSourcefound.sort = this.sort;
          } else {
            this.angularDataSourcefound.data = this.dtwipPatientsFound.wipdtmessages.slice(0, pageEvent.pageSize);
            this.angularDataSourcefound.sort = this.sort;
          }
        }
      }, {
        key: "CreatePatient",
        value: function CreatePatient(patientid) {
          var _this14 = this;

          _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Create Patient", "This action will Create Patient. Please confirm", 1, false, 1, "400px").subscribe(function (res) {
            if (res) {
              _this14.loadingData = true;

              _this14._referrerservice.CreatePatient(patientid).subscribe(function (response) {
                _this14.loadingData = false;

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this14.modalDialog, "", "Success", "Details Created successfully.", 0, false, 1, "500px", 0);

                _this14.getInProgressPatients();
              });
            }
          });
        }
      }, {
        key: "RejectPatient",
        value: function RejectPatient(patientid) {
          var _this15 = this;

          _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Reject Patient", "This action will Reject Patient. Please confirm", 1, false, 1, "400px").subscribe(function (res) {
            if (res) {
              _this15.loadingData = true;

              _this15._referrerservice.RejectPatient(patientid).subscribe(function (response) {
                _this15.loadingData = false;

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this15.modalDialog, "", "Success", "Details Rejected successfully.", 0, false, 1, "500px", 0);

                _this15.getInProgressPatients();
              });
            }
          });
        }
      }, {
        key: "ImportPatient",
        value: function ImportPatient(patientid) {
          var _this16 = this;

          _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Import Patient", "This action will Import Patient. Please confirm", 1, false, 1, "400px").subscribe(function (res) {
            if (res) {
              _this16.loadingData = true;

              _this16._referrerservice.ImportPatient(patientid).subscribe(function (response) {
                _this16.loadingData = false;

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this16.modalDialog, "", "Success", "Details Imported successfully.", 0, false, 1, "500px", 0);

                _this16.getInProgressPatients();
              });
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return DtPatientReferralWIPComponent;
    }();

    DtPatientReferralWIPComponent.ctorParameters = function () {
      return [{
        type: src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"]
      }, {
        type: src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"]
      }, {
        type: src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_9__["ReferralService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])], DtPatientReferralWIPComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], DtPatientReferralWIPComponent.prototype, "sort", void 0);
    DtPatientReferralWIPComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dt-patient-referral-wip',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dt-patient-referral-wip.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-patient-referral-wip/dt-patient-referral-wip.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./dt-patient-referral-wip.component.scss */
      "./src/app/modules/emrpage/component/dt-patient-referral-wip/dt-patient-referral-wip.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"], src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"], src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_9__["ReferralService"]])], DtPatientReferralWIPComponent);
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/dt-plan-care-processed/dt-plan-care-processed.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dt-plan-care-processed/dt-plan-care-processed.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmrpageComponentDtPlanCareProcessedDtPlanCareProcessedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".referrercontainer {\n  /*height: 400px;*/\n  overflow: auto;\n  width: 100%;\n  border: 1px solid slategrey;\n}\n\n.summary-table {\n  background: white;\n  height: calc(100vh - 160px);\n  overflow: auto;\n  border: 1px solid #bfbdbd;\n}\n\n.summary-table .mat-header-cell {\n  min-width: 150px;\n}\n\n.summary-table .mat-toolbar {\n  margin-top: 150px;\n  background-color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.summary-table .mat-table thead {\n  background: none !important;\n}\n\n.referrer-dialog-container .mat-dialog-container {\n  padding: 0px;\n  overflow-x: hidden;\n  height: 200px;\n}\n\n.createreferrer {\n  padding-right: 100px;\n}\n\n.pagewidth {\n  width: 100%;\n}\n\ntd.mat-cell {\n  border-right-style: none;\n}\n\nth.mat-header-cell {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdC1wbGFuLWNhcmUtcHJvY2Vzc2VkL0M6XFxEaXJlY3RUcnVzdFxcQ29kZVxcVGVhbVJlaGFiXFxDbGllbnRBcHAvc3JjXFxhcHBcXG1vZHVsZXNcXGVtcnBhZ2VcXGNvbXBvbmVudFxcZHQtcGxhbi1jYXJlLXByb2Nlc3NlZFxcZHQtcGxhbi1jYXJlLXByb2Nlc3NlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdC1wbGFuLWNhcmUtcHJvY2Vzc2VkL2R0LXBsYW4tY2FyZS1wcm9jZXNzZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDSTtFQUNJLGdCQUFBO0FDQ1I7O0FERUk7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FSOztBRElBO0VBQ0ksMkJBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLG9CQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSx3QkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW1ycGFnZS9jb21wb25lbnQvZHQtcGxhbi1jYXJlLXByb2Nlc3NlZC9kdC1wbGFuLWNhcmUtcHJvY2Vzc2VkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZmVycmVyY29udGFpbmVyIHtcclxuICAgIC8qaGVpZ2h0OiA0MDBweDsqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNsYXRlZ3JleTtcclxufVxyXG5cclxuLnN1bW1hcnktdGFibGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJkYmQ7XHJcblxyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LXRvb2xiYXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRhYmxlIC5tYXQtdGFibGUgdGhlYWQge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVmZXJyZXItZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmNyZWF0ZXJlZmVycmVyIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ucGFnZXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZC5tYXQtY2VsbCB7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLnJlZmVycmVyY29udGFpbmVyIHtcbiAgLypoZWlnaHQ6IDQwMHB4OyovXG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgc2xhdGVncmV5O1xufVxuXG4uc3VtbWFyeS10YWJsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZGJkO1xufVxuLnN1bW1hcnktdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG4uc3VtbWFyeS10YWJsZSAubWF0LXRvb2xiYXIge1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3VtbWFyeS10YWJsZSAubWF0LXRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmVmZXJyZXItZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNyZWF0ZXJlZmVycmVyIHtcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XG59XG5cbi5wYWdld2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQubWF0LWNlbGwge1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/dt-plan-care-processed/dt-plan-care-processed.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dt-plan-care-processed/dt-plan-care-processed.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: DtPlanCareProcessedComponent */

  /***/
  function srcAppModulesEmrpageComponentDtPlanCareProcessedDtPlanCareProcessedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DtPlanCareProcessedComponent", function () {
      return DtPlanCareProcessedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/layout/services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modules/emrpage/services/referral.service */
    "./src/app/modules/emrpage/services/referral.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");

    var DtPlanCareProcessedComponent =
    /*#__PURE__*/
    function () {
      function DtPlanCareProcessedComponent(_headerService, _storageHelper, _navigate, _sidebarService, modalDialog, _referrerservice) {
        _classCallCheck(this, DtPlanCareProcessedComponent);

        this._headerService = _headerService;
        this._storageHelper = _storageHelper;
        this._navigate = _navigate;
        this._sidebarService = _sidebarService;
        this.modalDialog = modalDialog;
        this._referrerservice = _referrerservice;
        this.displayedColumns = ['From', 'To', 'Received', 'Subject', 'Status', 'Processed'];
        this.displayedColumns1 = ['FirstName', 'LastName', 'City', 'State', 'DOB', 'ReceptionistComments'];
        this.dtprocessedPocs = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.dtprocessedPoc = {};
        this.processedPOCsList = {};
        this.dtdeclinedPocs = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.dtdeclinedPoc = {};
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["SelectionModel"](false, []);
        this.declinedselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["SelectionModel"](false, []);
        this.noRecordsMessage1 = "";
        this.noRecordsMessage2 = "";
        this.angularDataSourceProcessed = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dtprocessedPocs.processeddtmessages);
        this.angularDataSourceDeclined = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dtdeclinedPocs.processeddtmessages);
        this.pageSizeOptions = [10, 20, 30];
        this.loadingData = false;
        this.loggedInUserDetails = {};
      }

      _createClass(DtPlanCareProcessedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._sidebarService.setActiveState("processedmessages");

          this._sidebarService.editSidebarShowValue(true);

          if (this._storageHelper.getItem("loggedInUserDetails") != null) {
            this.loggedInUserDetails = this._storageHelper.getItem("loggedInUserDetails");
          }

          this.getPOCS();
        }
      }, {
        key: "getMessageDetail",
        value: function getMessageDetail(row, action) {
          this.loadingData = true;

          this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.IncomingMessageID + '/' + action], {
            state: {
              redirect: this._navigate.url
            }
          });
        }
      }, {
        key: "getPOCS",
        value: function getPOCS() {
          var _this17 = this;

          this.loadingData = true;
          debugger;

          this._referrerservice.getPocs(this.loggedInUserDetails.LoginName).subscribe(function (res) {
            _this17.processedPOCsList = res;
            _this17.dtprocessedPocs.processeddtmessages = _this17.processedPOCsList.pocProcessed;
            _this17.loadingData = false;

            if (_this17.dtprocessedPocs.processeddtmessages != null && _this17.dtprocessedPocs.processeddtmessages.length > 0 && _this17.dtprocessedPocs.processeddtmessages != undefined) {
              // this.dtprocessedPocs.processeddtmessages = this.dtprocessedPocs.processeddtmessages.filter(x => x.EmailId == "integration@test.direct.team-rehab.com");
              //this.loadingData = false;
              _this17.dtprocessedPocs.TotalRecords = _this17.dtprocessedPocs.processeddtmessages.length || 0;
              _this17.dtprocessedPocs.TotalPages = Math.ceil(_this17.dtprocessedPocs.TotalRecords / _this17.dtprocessedPocs.PageSize);
              _this17.dtprocessedPocs.CurrentPage = 0;
              _this17.angularDataSourceProcessed = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this17.dtprocessedPocs.processeddtmessages.slice(0, _this17.dtprocessedPocs.PageSize));
              _this17.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["SelectionModel"](false, []);

              if (_this17.dtprocessedPocs.processeddtmessages.length <= 0) {
                _this17.noRecordsMessage2 = "No records found.";
              } else {
                _this17.noRecordsMessage2 = "";
              }
            } else {
              _this17.noRecordsMessage2 = "No records found.";
            }

            _this17.dtdeclinedPocs.processeddtmessages = _this17.processedPOCsList.pocDeclined;

            if (_this17.dtdeclinedPocs.processeddtmessages != null && _this17.dtdeclinedPocs.processeddtmessages.length > 0 && _this17.dtdeclinedPocs.processeddtmessages != undefined) {
              // this.loadingData = false;
              _this17.dtdeclinedPocs.TotalRecords = _this17.dtdeclinedPocs.processeddtmessages.length || 0;
              _this17.dtdeclinedPocs.TotalPages = Math.ceil(_this17.dtdeclinedPocs.TotalRecords / _this17.dtdeclinedPocs.PageSize);
              _this17.dtdeclinedPocs.CurrentPage = 0;
              _this17.angularDataSourceDeclined = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this17.dtdeclinedPocs.processeddtmessages.slice(0, _this17.dtprocessedPocs.PageSize));
              _this17.declinedselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["SelectionModel"](false, []); //console.log(this.angularDataSourcefound.data.length);

              if (_this17.dtdeclinedPocs.processeddtmessages.length <= 0) {
                _this17.noRecordsMessage1 = "No records found.";
              } else {
                _this17.noRecordsMessage1 = "";
              }
            } else {
              _this17.noRecordsMessage1 = "No records found.";
            }
          }, function (err) {});
        }
      }, {
        key: "getPaginationDataProcessed",
        value: function getPaginationDataProcessed(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtprocessedPocs.CurrentPage = pageEvent.pageIndex;
            this.dtprocessedPocs.PageSize = pageEvent.pageSize;
            this.angularDataSourceProcessed.data = this.dtprocessedPocs.processeddtmessages.slice(this.dtprocessedPocs.CurrentPage * this.dtprocessedPocs.PageSize, (this.dtprocessedPocs.CurrentPage + 1) * this.dtprocessedPocs.PageSize + 1);
            this.angularDataSourceProcessed.sort = this.sort;
          } else {
            this.angularDataSourceProcessed.data = this.dtprocessedPocs.processeddtmessages.slice(0, pageEvent.pageSize);
            this.angularDataSourceProcessed.sort = this.sort;
          }
        }
      }, {
        key: "getPaginationDataDeclined",
        value: function getPaginationDataDeclined(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtdeclinedPocs.CurrentPage = pageEvent.pageIndex;
            this.dtdeclinedPocs.PageSize = pageEvent.pageSize;
            this.angularDataSourceDeclined.data = this.dtdeclinedPocs.processeddtmessages.slice(this.dtdeclinedPocs.CurrentPage * this.dtdeclinedPocs.PageSize, (this.dtdeclinedPocs.CurrentPage + 1) * this.dtdeclinedPocs.PageSize + 1);
            this.angularDataSourceDeclined.sort = this.sort;
          } else {
            this.angularDataSourceDeclined.data = this.dtdeclinedPocs.processeddtmessages.slice(0, pageEvent.pageSize);
            this.angularDataSourceDeclined.sort = this.sort;
          }
        }
      }]);

      return DtPlanCareProcessedComponent;
    }();

    DtPlanCareProcessedComponent.ctorParameters = function () {
      return [{
        type: src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"]
      }, {
        type: src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_8__["ReferralService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])], DtPlanCareProcessedComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], DtPlanCareProcessedComponent.prototype, "sort", void 0);
    DtPlanCareProcessedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dt-plan-care-processed',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dt-plan-care-processed.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-plan-care-processed/dt-plan-care-processed.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./dt-plan-care-processed.component.scss */
      "./src/app/modules/emrpage/component/dt-plan-care-processed/dt-plan-care-processed.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"], src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_8__["ReferralService"]])], DtPlanCareProcessedComponent);
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/dt-sent-poc/dt-sent-poc.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dt-sent-poc/dt-sent-poc.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmrpageComponentDtSentPocDtSentPocComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".referrercontainer {\n  /*height: 400px;*/\n  overflow: auto;\n  width: 100%;\n  border: 1px solid slategrey;\n}\n\n.summary-table {\n  background: white;\n  height: calc(100vh - 160px);\n  overflow: auto;\n  border: 1px solid #bfbdbd;\n}\n\n.summary-table .mat-header-cell {\n  min-width: 150px;\n}\n\n.summary-table .mat-toolbar {\n  margin-top: 150px;\n  background-color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.summary-table .mat-table thead {\n  background: none !important;\n}\n\n.referrer-dialog-container .mat-dialog-container {\n  padding: 0px;\n  overflow-x: hidden;\n  height: 200px;\n}\n\n.createreferrer {\n  padding-right: 100px;\n}\n\n.pagewidth {\n  width: 100%;\n}\n\ntd.mat-cell {\n  border-right-style: none;\n}\n\nth.mat-header-cell {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdC1zZW50LXBvYy9DOlxcRGlyZWN0VHJ1c3RcXENvZGVcXFRlYW1SZWhhYlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxlbXJwYWdlXFxjb21wb25lbnRcXGR0LXNlbnQtcG9jXFxkdC1zZW50LXBvYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdC1zZW50LXBvYy9kdC1zZW50LXBvYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENJO0VBQ0ksZ0JBQUE7QUNDUjs7QURFSTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQVI7O0FESUE7RUFDSSwyQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksb0JBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLHdCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdC1zZW50LXBvYy9kdC1zZW50LXBvYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWZlcnJlcmNvbnRhaW5lciB7XHJcbiAgICAvKmhlaWdodDogNDAwcHg7Ki9cclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRhYmxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZGJkO1xyXG5cclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC10b29sYmFyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgfVxyXG59XHJcblxyXG4uc3VtbWFyeS10YWJsZSAubWF0LXRhYmxlIHRoZWFkIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlZmVycmVyLWRpYWxvZy1jb250YWluZXIgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGVyZWZlcnJlciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnBhZ2V3aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQubWF0LWNlbGwge1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG50aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5yZWZlcnJlcmNvbnRhaW5lciB7XG4gIC8qaGVpZ2h0OiA0MDBweDsqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHNsYXRlZ3JleTtcbn1cblxuLnN1bW1hcnktdGFibGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmRiZDtcbn1cbi5zdW1tYXJ5LXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuLnN1bW1hcnktdGFibGUgLm1hdC10b29sYmFyIHtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN1bW1hcnktdGFibGUgLm1hdC10YWJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnJlZmVycmVyLWRpYWxvZy1jb250YWluZXIgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jcmVhdGVyZWZlcnJlciB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xufVxuXG4ucGFnZXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLm1hdC1jZWxsIHtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xufVxuXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/dt-sent-poc/dt-sent-poc.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dt-sent-poc/dt-sent-poc.component.ts ***!
    \********************************************************************************/

  /*! exports provided: DtSentPocComponent */

  /***/
  function srcAppModulesEmrpageComponentDtSentPocDtSentPocComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DtSentPocComponent", function () {
      return DtSentPocComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/layout/services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modules/emrpage/services/referral.service */
    "./src/app/modules/emrpage/services/referral.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");

    var DtSentPocComponent =
    /*#__PURE__*/
    function () {
      function DtSentPocComponent(_headerService, _storageHelper, _navigate, _sidebarService, modalDialog, _referrerservice) {
        _classCallCheck(this, DtSentPocComponent);

        this._headerService = _headerService;
        this._storageHelper = _storageHelper;
        this._navigate = _navigate;
        this._sidebarService = _sidebarService;
        this.modalDialog = modalDialog;
        this._referrerservice = _referrerservice;
        this.displayedColumns = ['From', 'To', 'Subject', 'Sent'];
        this.dtSentPocs = {
          PageSize: 20,
          MaxPageSize: 30
        }; // dtprocessedPatient: IDTProcessedMessage = {};

        this.noRecordsMessage1 = "";
        this.noRecordsMessage2 = "";
        this.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dtSentPocs.sentPocs);
        this.pageSizeOptions = [10, 20, 30];
        this.loadingData = false;
        this.loggedInUserDetails = {};
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["SelectionModel"](false, []);
      }

      _createClass(DtSentPocComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._sidebarService.setActiveState("processedmessages");

          this._sidebarService.editSidebarShowValue(true);

          if (this._storageHelper.getItem("loggedInUserDetails") != null) {
            this.loggedInUserDetails = this._storageHelper.getItem("loggedInUserDetails");
          }

          this.getSentPocs();
        }
      }, {
        key: "getMessageDetail",
        value: function getMessageDetail(row, action) {
          this.loadingData = true;

          this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.InComingMessageID + '/sentforapproval'], {
            state: {
              redirect: this._navigate.url
            }
          });
        }
      }, {
        key: "getSentPocs",
        value: function getSentPocs() {
          var _this18 = this;

          this.loadingData = true;

          this._referrerservice.getSentPOCList(this.loggedInUserDetails.LoginName).subscribe(function (res) {
            debugger;
            _this18.loadingData = false;
            _this18.dtSentPocs.sentPocs = res; //this.dtprocessedPatients.processeddtmessages = this.dtprocessedPatients.processeddtmessages.filter(x => x.MatchFound == false);

            _this18.dtSentPocs.TotalRecords = _this18.dtSentPocs.sentPocs.length || 0;
            _this18.dtSentPocs.TotalPages = Math.ceil(_this18.dtSentPocs.TotalRecords / _this18.dtSentPocs.PageSize);
            _this18.dtSentPocs.CurrentPage = 0;
            _this18.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this18.dtSentPocs.sentPocs.slice(0, _this18.dtSentPocs.PageSize));
            _this18.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["SelectionModel"](false, []);

            if (_this18.dtSentPocs.sentPocs.length <= 0) {
              _this18.noRecordsMessage1 = "No records found.";
            } else {
              _this18.noRecordsMessage1 = "";
            }
          }, function (err) {});
        }
      }, {
        key: "getPaginationData",
        value: function getPaginationData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtSentPocs.CurrentPage = pageEvent.pageIndex;
            this.dtSentPocs.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.dtSentPocs.sentPocs.slice(this.dtSentPocs.CurrentPage * this.dtSentPocs.PageSize, (this.dtSentPocs.CurrentPage + 1) * this.dtSentPocs.PageSize + 1);
            this.angularDataSource.sort = this.sort;
          } else {
            this.angularDataSource.data = this.dtSentPocs.sentPocs.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
          }
        }
      }]);

      return DtSentPocComponent;
    }();

    DtSentPocComponent.ctorParameters = function () {
      return [{
        type: src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"]
      }, {
        type: src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_8__["ReferralService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])], DtSentPocComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], DtSentPocComponent.prototype, "sort", void 0);
    DtSentPocComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dt-sent-poc',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dt-sent-poc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dt-sent-poc/dt-sent-poc.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./dt-sent-poc.component.scss */
      "./src/app/modules/emrpage/component/dt-sent-poc/dt-sent-poc.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"], src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_8__["ReferralService"]])], DtSentPocComponent);
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/dtincoming-message-detail/dtincoming-message-detail.component.scss":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dtincoming-message-detail/dtincoming-message-detail.component.scss ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmrpageComponentDtincomingMessageDetailDtincomingMessageDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "aw-wizard {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start; }\n  aw-wizard .wizard-steps {\n    top: 0;\n    display: -webkit-box;\n    display: flex; }\n  aw-wizard.horizontal {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n  aw-wizard.horizontal .wizard-steps {\n    width: 100%;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row; }\n  aw-wizard.vertical {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n  aw-wizard.vertical .wizard-steps {\n    min-width: calc(100% - 280px);\n    width: 80%;\n    height: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n  aw-wizard-step,\naw-wizard-completion-step {\n  height: auto;\n  width: 100%; }\n  aw-wizard-navigation-bar ul.steps-indicator * {\n  box-sizing: border-box; }\n  aw-wizard-navigation-bar ul.steps-indicator li {\n  position: relative;\n  pointer-events: none; }\n  aw-wizard-navigation-bar ul.steps-indicator li a .label {\n    color: #808080;\n    line-height: 14px;\n    font-size: 14px;\n    text-decoration: none;\n    text-transform: uppercase;\n    font-weight: bold;\n    -webkit-transition: 0.25s;\n    transition: 0.25s; }\n  aw-wizard-navigation-bar ul.steps-indicator li.navigable {\n  pointer-events: auto; }\n  aw-wizard-navigation-bar ul.steps-indicator li.navigable a {\n    cursor: pointer; }\n  aw-wizard-navigation-bar ul.steps-indicator li.navigable a:hover .label {\n    color: #4d4d4d; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 0;\n  width: 100%;\n  list-style: none; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2:after {\n    left: 25%;\n    right: 25%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2 li {\n    width: 50%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3:after {\n    left: 16.66667%;\n    right: 16.66667%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3 li {\n    width: 33.33333%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4:after {\n    left: 12.5%;\n    right: 12.5%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4 li {\n    width: 25%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5:after {\n    left: 10%;\n    right: 10%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5 li {\n    width: 20%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6:after {\n    left: 8.33333%;\n    right: 8.33333%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6 li {\n    width: 16.66667%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7:after {\n    left: 7.14286%;\n    right: 7.14286%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7 li {\n    width: 14.28571%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8:after {\n    left: 6.25%;\n    right: 6.25%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8 li {\n    width: 12.5%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9:after {\n    left: 5.55556%;\n    right: 5.55556%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9 li {\n    width: 11.11111%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10:after {\n    left: 5%;\n    right: 5%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10 li {\n    width: 10%; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator li {\n    margin: 0;\n    padding: 0;\n    text-align: center; }\n  aw-wizard-navigation-bar.horizontal ul.steps-indicator li a .label {\n      display: inline-block;\n      padding-top: 10px;\n      text-align: center; }\n  aw-wizard-navigation-bar.vertical {\n  max-width: 280px;\n  width: 20%;\n  height: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n  aw-wizard-navigation-bar.vertical ul.steps-indicator {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    list-style: none;\n    margin: auto; }\n  aw-wizard-navigation-bar.vertical ul.steps-indicator li:not(:last-child) {\n      margin-bottom: 0;\n      padding-bottom: 10px; }\n  aw-wizard-navigation-bar.vertical ul.steps-indicator li a {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      -webkit-box-align: center;\n              align-items: center; }\n  aw-wizard-navigation-bar.vertical ul.steps-indicator li a .label {\n        margin-left: 15px;\n        text-align: left; }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator {\n  padding: 24px 0 10px 0; }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li:not(:last-child):after {\n    background-color: #E6E6E6;\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: calc(100% - 14px);\n    top: -7px;\n    left: calc(50% + 7px); }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li .step-indicator {\n    top: -14px;\n    left: calc(50% - 7px);\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 14px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    background-color: #E6E6E6; }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional .step-indicator {\n    background-color: #38ef38; }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done .step-indicator {\n    background-color: #339933; }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current .step-indicator {\n    background-color: #808080; }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing .step-indicator {\n    background-color: #FF0000; }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.completed .step-indicator {\n    background-color: #339933; }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.navigable a:hover .step-indicator {\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 14px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    background-color: #d9d9d9; }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.navigable.optional a:hover .step-indicator {\n    background-color: #20ed20; }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.navigable.done a:hover .step-indicator {\n    background-color: #2d862d; }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.navigable.current a:hover .step-indicator {\n    background-color: #737373; }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.navigable.editing a:hover .step-indicator {\n    background-color: #e60000; }\n  aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.navigable.completed a:hover .step-indicator {\n    background-color: #2d862d; }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator {\n  padding: 60px 0 10px 0; }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li:not(:last-child):after {\n    background-color: #E6E6E6;\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: calc(100% - 50px);\n    top: -25px;\n    left: calc(50% + 25px); }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li .step-indicator {\n    top: -50px;\n    left: calc(50% - 25px);\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 50px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    background-color: #E6E6E6; }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional .step-indicator {\n    background-color: #38ef38; }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done .step-indicator {\n    background-color: #339933; }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current .step-indicator {\n    background-color: #808080; }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing .step-indicator {\n    background-color: #FF0000; }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.completed .step-indicator {\n    background-color: #339933; }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.navigable a:hover .step-indicator {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 50px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    background-color: #d9d9d9; }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.navigable.optional a:hover .step-indicator {\n    background-color: #20ed20; }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.navigable.done a:hover .step-indicator {\n    background-color: #2d862d; }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.navigable.current a:hover .step-indicator {\n    background-color: #737373; }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.navigable.editing a:hover .step-indicator {\n    background-color: #e60000; }\n  aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.navigable.completed a:hover .step-indicator {\n    background-color: #2d862d; }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator {\n  padding: 60px 0 10px 0; }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li:not(:last-child):after {\n    background-color: #E6E6E6;\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: calc(100% - 50px);\n    top: -25px;\n    left: calc(50% + 25px); }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li .step-indicator {\n    top: -50px;\n    left: calc(50% - 25px);\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 46px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    border: 2px solid #E6E6E6; }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional .step-indicator {\n    border: 2px solid #38ef38; }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done .step-indicator {\n    border: 2px solid #339933; }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current .step-indicator {\n    border: 2px solid #808080; }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing .step-indicator {\n    border: 2px solid #FF0000; }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.completed .step-indicator {\n    border: 2px solid #339933; }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.navigable a:hover .step-indicator {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 46px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    border: 2px solid #cdcdcd; }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.navigable.optional a:hover .step-indicator {\n    border: 2px solid #12e212; }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.navigable.done a:hover .step-indicator {\n    border: 2px solid #267326; }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.navigable.current a:hover .step-indicator {\n    border: 2px solid #676767; }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.navigable.editing a:hover .step-indicator {\n    border: 2px solid #cc0000; }\n  aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.navigable.completed a:hover .step-indicator {\n    border: 2px solid #267326; }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator {\n  padding: 60px 0 10px 0; }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):after {\n    background-color: #E6E6E6;\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: calc(100% - 50px);\n    top: -25px;\n    left: calc(50% + 25px); }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li .step-indicator {\n    top: -50px;\n    left: calc(50% - 25px);\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 50px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    background-color: #E6E6E6;\n    color: black; }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional .step-indicator {\n    background-color: #38ef38;\n    color: black; }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done .step-indicator {\n    background-color: #339933;\n    color: black; }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current .step-indicator {\n    background-color: #808080;\n    color: black; }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing .step-indicator {\n    background-color: #FF0000;\n    color: black; }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.completed .step-indicator {\n    background-color: #339933;\n    color: black; }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.navigable a:hover .step-indicator {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 50px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    background-color: #d9d9d9;\n    color: black; }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.navigable.optional a:hover .step-indicator {\n    background-color: #20ed20;\n    color: black; }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.navigable.done a:hover .step-indicator {\n    background-color: #2d862d;\n    color: black; }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.navigable.current a:hover .step-indicator {\n    background-color: #737373;\n    color: black; }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.navigable.editing a:hover .step-indicator {\n    background-color: #e60000;\n    color: black; }\n  aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.navigable.completed a:hover .step-indicator {\n    background-color: #2d862d;\n    color: black; }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator {\n  padding: 60px 0 10px 0; }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li:not(:last-child):after {\n    background-color: #E6E6E6;\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: calc(100% - 50px);\n    top: -25px;\n    left: calc(50% + 25px); }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li .step-indicator {\n    top: -50px;\n    left: calc(50% - 25px);\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 46px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    border: 2px solid #E6E6E6;\n    color: #E6E6E6; }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional .step-indicator {\n    border: 2px solid #38ef38;\n    color: #38ef38; }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done .step-indicator {\n    border: 2px solid #339933;\n    color: #339933; }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current .step-indicator {\n    border: 2px solid #808080;\n    color: #808080; }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing .step-indicator {\n    border: 2px solid #FF0000;\n    color: #FF0000; }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.completed .step-indicator {\n    border: 2px solid #339933;\n    color: #339933; }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.navigable a:hover .step-indicator {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 46px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    border: 2px solid #cdcdcd;\n    color: #cdcdcd; }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.navigable.optional a:hover .step-indicator {\n    border: 2px solid #12e212;\n    color: #12e212; }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.navigable.done a:hover .step-indicator {\n    border: 2px solid #267326;\n    color: #267326; }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.navigable.current a:hover .step-indicator {\n    border: 2px solid #676767;\n    color: #676767; }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.navigable.editing a:hover .step-indicator {\n    border: 2px solid #cc0000;\n    color: #cc0000; }\n  aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.navigable.completed a:hover .step-indicator {\n    border: 2px solid #267326;\n    color: #267326; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator {\n  padding: 5px 5px 5px 19px; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li:not(:last-child):after {\n    background-color: #E6E6E6;\n    content: '';\n    position: absolute;\n    left: -7px;\n    top: 14px;\n    height: calc(100% - 14px);\n    width: 1px; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li a {\n    min-height: 14px; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li .step-indicator {\n    top: 0;\n    left: -14px;\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 14px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    background-color: #E6E6E6; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional .step-indicator {\n    background-color: #38ef38; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done .step-indicator {\n    background-color: #339933; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current .step-indicator {\n    background-color: #808080; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing .step-indicator {\n    background-color: #FF0000; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.completed .step-indicator {\n    background-color: #339933; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.navigable a:hover .step-indicator {\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 14px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    background-color: #d9d9d9; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.navigable.optional a:hover .step-indicator {\n    background-color: #20ed20; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.navigable.done a:hover .step-indicator {\n    background-color: #2d862d; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.navigable.current a:hover .step-indicator {\n    background-color: #737373; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.navigable.editing a:hover .step-indicator {\n    background-color: #e60000; }\n  aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.navigable.completed a:hover .step-indicator {\n    background-color: #2d862d; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator {\n  padding: 5px 5px 5px 55px; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li:not(:last-child):after {\n    background-color: #E6E6E6;\n    content: '';\n    position: absolute;\n    left: -25px;\n    top: 50px;\n    height: calc(100% - 50px);\n    width: 1px; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li a {\n    min-height: 50px; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li .step-indicator {\n    top: 0;\n    left: -50px;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 50px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    background-color: #E6E6E6; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional .step-indicator {\n    background-color: #38ef38; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done .step-indicator {\n    background-color: #339933; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current .step-indicator {\n    background-color: #808080; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing .step-indicator {\n    background-color: #FF0000; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.completed .step-indicator {\n    background-color: #339933; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.navigable a:hover .step-indicator {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 50px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    background-color: #d9d9d9; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.navigable.optional a:hover .step-indicator {\n    background-color: #20ed20; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.navigable.done a:hover .step-indicator {\n    background-color: #2d862d; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.navigable.current a:hover .step-indicator {\n    background-color: #737373; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.navigable.editing a:hover .step-indicator {\n    background-color: #e60000; }\n  aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.navigable.completed a:hover .step-indicator {\n    background-color: #2d862d; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator {\n  padding: 5px 5px 5px 55px; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li:not(:last-child):after {\n    background-color: #E6E6E6;\n    content: '';\n    position: absolute;\n    left: -25px;\n    top: 50px;\n    height: calc(100% - 50px);\n    width: 1px; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li a {\n    min-height: 50px; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li .step-indicator {\n    top: 0;\n    left: -50px;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 46px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    border: 2px solid #E6E6E6; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional .step-indicator {\n    border: 2px solid #38ef38; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done .step-indicator {\n    border: 2px solid #339933; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current .step-indicator {\n    border: 2px solid #808080; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing .step-indicator {\n    border: 2px solid #FF0000; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.completed .step-indicator {\n    border: 2px solid #339933; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.navigable a:hover .step-indicator {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 46px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    border: 2px solid #cdcdcd; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.navigable.optional a:hover .step-indicator {\n    border: 2px solid #12e212; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.navigable.done a:hover .step-indicator {\n    border: 2px solid #267326; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.navigable.current a:hover .step-indicator {\n    border: 2px solid #676767; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.navigable.editing a:hover .step-indicator {\n    border: 2px solid #cc0000; }\n  aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.navigable.completed a:hover .step-indicator {\n    border: 2px solid #267326; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator {\n  padding: 5px 5px 5px 55px; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):after {\n    background-color: #E6E6E6;\n    content: '';\n    position: absolute;\n    left: -25px;\n    top: 50px;\n    height: calc(100% - 50px);\n    width: 1px; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li a {\n    min-height: 50px; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li .step-indicator {\n    top: 0;\n    left: -50px;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 50px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    background-color: #E6E6E6;\n    color: black; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional .step-indicator {\n    background-color: #38ef38;\n    color: black; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done .step-indicator {\n    background-color: #339933;\n    color: black; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current .step-indicator {\n    background-color: #808080;\n    color: black; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing .step-indicator {\n    background-color: #FF0000;\n    color: black; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.completed .step-indicator {\n    background-color: #339933;\n    color: black; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.navigable a:hover .step-indicator {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 50px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    background-color: #d9d9d9;\n    color: black; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.navigable.optional a:hover .step-indicator {\n    background-color: #20ed20;\n    color: black; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.navigable.done a:hover .step-indicator {\n    background-color: #2d862d;\n    color: black; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.navigable.current a:hover .step-indicator {\n    background-color: #737373;\n    color: black; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.navigable.editing a:hover .step-indicator {\n    background-color: #e60000;\n    color: black; }\n  aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.navigable.completed a:hover .step-indicator {\n    background-color: #2d862d;\n    color: black; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator {\n  padding: 5px 5px 5px 55px; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li:not(:last-child):after {\n    background-color: #E6E6E6;\n    content: '';\n    position: absolute;\n    left: -25px;\n    top: 50px;\n    height: calc(100% - 50px);\n    width: 1px; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li a {\n    min-height: 50px; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li .step-indicator {\n    top: 0;\n    left: -50px;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 46px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    border: 2px solid #E6E6E6;\n    color: #E6E6E6; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional .step-indicator {\n    border: 2px solid #38ef38;\n    color: #38ef38; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done .step-indicator {\n    border: 2px solid #339933;\n    color: #339933; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current .step-indicator {\n    border: 2px solid #808080;\n    color: #808080; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing .step-indicator {\n    border: 2px solid #FF0000;\n    color: #FF0000; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.completed .step-indicator {\n    border: 2px solid #339933;\n    color: #339933; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.navigable a:hover .step-indicator {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 46px;\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    border-radius: 100%;\n    border: 2px solid #cdcdcd;\n    color: #cdcdcd; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.navigable.optional a:hover .step-indicator {\n    border: 2px solid #12e212;\n    color: #12e212; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.navigable.done a:hover .step-indicator {\n    border: 2px solid #267326;\n    color: #267326; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.navigable.current a:hover .step-indicator {\n    border: 2px solid #676767;\n    color: #676767; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.navigable.editing a:hover .step-indicator {\n    border: 2px solid #cc0000;\n    color: #cc0000; }\n  aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.navigable.completed a:hover .step-indicator {\n    border: 2px solid #267326;\n    color: #267326; }\n  .referrercontainer {\n  /*height: 400px;*/\n  /*overflow: scroll;*/\n  width: 100%;\n  border: 1px solid slategrey;\n  padding: 10px;\n}\n  .summary-table {\n  background: white;\n  height: calc(100vh - 160px);\n  overflow: auto;\n  border: 1px solid #bfbdbd;\n}\n  .summary-table .mat-header-cell {\n  min-width: 150px;\n}\n  .summary-table .mat-toolbar {\n  margin-top: 150px;\n  background-color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n  .summary-table .mat-table thead {\n  background: none !important;\n}\n  .referrer-dialog-container .mat-dialog-container {\n  padding: 0px;\n  overflow-x: hidden;\n  height: 200px;\n}\n  .rehabreferrer-dialog-container .mat-dialog-container {\n  padding: 0px;\n  overflow-x: hidden;\n  height: 200px;\n}\n  .createreferrer {\n  padding-right: 100px;\n}\n  .fullwidth {\n  width: 100%;\n}\n  .mat-row.hovered {\n  background: #a6e4f3;\n  color: white;\n}\n  .mat-row.highlighted {\n  background: #a6e4f3;\n  color: white;\n}\n  .patient-dialog-container .mat-dialog-container {\n  padding: 0px;\n  overflow-x: hidden;\n  height: 500px;\n}\n  .noborderText {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid black;\n}\n  .paddingbottom {\n  padding-bottom: 16px;\n}\n  th.mat-header-cell {\n  text-align: center;\n}\n  centerAlignText {\n  text-align: center !important;\n}\n  .ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */\n}\n  .ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */\n}\n  .option-column-style {\n  text-align: center;\n  padding-top: 8px;\n}\n  a:hover {\n  text-decoration: underline !important;\n}\n  .link-decoration {\n  text-decoration: underline !important;\n  font-weight: 200;\n}\n  .label-font {\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9hbmd1bGFyLWFyY2h3aXphcmQvYXJjaHdpemFyZC5jc3MiLCJzcmMvYXBwL21vZHVsZXMvZW1ycGFnZS9jb21wb25lbnQvZHRpbmNvbWluZy1tZXNzYWdlLWRldGFpbC9DOlxcRGlyZWN0VHJ1c3RcXENvZGVcXFRlYW1SZWhhYlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxlbXJwYWdlXFxjb21wb25lbnRcXGR0aW5jb21pbmctbWVzc2FnZS1kZXRhaWxcXGR0aW5jb21pbmctbWVzc2FnZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZW1ycGFnZS9jb21wb25lbnQvZHRpbmNvbWluZy1tZXNzYWdlLWRldGFpbC9kdGluY29taW5nLW1lc3NhZ2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsdUJBQTJCO1VBQTNCLDJCQUEyQixFQUFFO0VBQzdCO0lBQ0UsTUFBTTtJQUNOLG9CQUFhO0lBQWIsYUFBYSxFQUFFO0VBRW5CO0VBQ0UsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBRTtFQUN4QjtJQUNFLFdBQVc7SUFDWCw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQixFQUFFO0VBRXpCO0VBQ0UsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUIsRUFBRTtFQUNyQjtJQUNFLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsWUFBWTtJQUNaLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCLEVBQUU7RUFFNUI7O0VBRUUsWUFBWTtFQUNaLFdBQVcsRUFBRTtFQUVmO0VBR0Usc0JBQXNCLEVBQUU7RUFFMUI7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUU7RUFDdEI7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix5QkFBaUI7SUFBakIsaUJBQWlCLEVBQUU7RUFFdkI7RUFDRSxvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLGVBQWUsRUFBRTtFQUNuQjtJQUNFLGNBQWMsRUFBRTtFQUVwQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0IsRUFBRTtFQUNsQjtJQUNFLFNBQVM7SUFDVCxVQUFVLEVBQUU7RUFDZDtJQUNFLFVBQVUsRUFBRTtFQUNkO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQixFQUFFO0VBQ3BCO0lBQ0UsZ0JBQWdCLEVBQUU7RUFDcEI7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFFO0VBQ2hCO0lBQ0UsVUFBVSxFQUFFO0VBQ2Q7SUFDRSxTQUFTO0lBQ1QsVUFBVSxFQUFFO0VBQ2Q7SUFDRSxVQUFVLEVBQUU7RUFDZDtJQUNFLGNBQWM7SUFDZCxlQUFlLEVBQUU7RUFDbkI7SUFDRSxnQkFBZ0IsRUFBRTtFQUNwQjtJQUNFLGNBQWM7SUFDZCxlQUFlLEVBQUU7RUFDbkI7SUFDRSxnQkFBZ0IsRUFBRTtFQUNwQjtJQUNFLFdBQVc7SUFDWCxZQUFZLEVBQUU7RUFDaEI7SUFDRSxZQUFZLEVBQUU7RUFDaEI7SUFDRSxjQUFjO0lBQ2QsZUFBZSxFQUFFO0VBQ25CO0lBQ0UsZ0JBQWdCLEVBQUU7RUFDcEI7SUFDRSxRQUFRO0lBQ1IsU0FBUyxFQUFFO0VBQ2I7SUFDRSxVQUFVLEVBQUU7RUFDZDtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUU7RUFDcEI7TUFDRSxxQkFBcUI7TUFDckIsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFFO0VBRTFCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0VBQ1osd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNLEVBQUU7RUFDUjtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFlBQVksRUFBRTtFQUNkO01BQ0UsZ0JBQWdCO01BQ2hCLG9CQUFvQixFQUFFO0VBQ3hCO01BQ0Usb0JBQWE7TUFBYixhQUFhO01BQ2IsOEJBQW1CO01BQW5CLDZCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIseUJBQW1CO2NBQW5CLG1CQUFtQixFQUFFO0VBQ3JCO1FBQ0UsaUJBQWlCO1FBQ2pCLGdCQUFnQixFQUFFO0VBRTFCO0VBQ0Usc0JBQXNCLEVBQUU7RUFDeEI7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxxQkFBcUIsRUFBRTtFQUN6QjtJQUNFLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBRS9CO0VBQ0Usc0JBQXNCLEVBQUU7RUFDeEI7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixzQkFBc0IsRUFBRTtFQUMxQjtJQUNFLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBRS9CO0VBQ0Usc0JBQXNCLEVBQUU7RUFDeEI7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixzQkFBc0IsRUFBRTtFQUMxQjtJQUNFLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBRS9CO0VBQ0Usc0JBQXNCLEVBQUU7RUFDeEI7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixzQkFBc0IsRUFBRTtFQUMxQjtJQUNFLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVksRUFBRTtFQUNoQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZLEVBQUU7RUFDaEI7SUFDRSx5QkFBeUI7SUFDekIsWUFBWSxFQUFFO0VBQ2hCO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVksRUFBRTtFQUNoQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZLEVBQUU7RUFDaEI7SUFDRSx5QkFBeUI7SUFDekIsWUFBWSxFQUFFO0VBQ2hCO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVksRUFBRTtFQUNoQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZLEVBQUU7RUFDaEI7SUFDRSx5QkFBeUI7SUFDekIsWUFBWSxFQUFFO0VBQ2hCO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVksRUFBRTtFQUNoQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZLEVBQUU7RUFDaEI7SUFDRSx5QkFBeUI7SUFDekIsWUFBWSxFQUFFO0VBRWxCO0VBQ0Usc0JBQXNCLEVBQUU7RUFDeEI7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixzQkFBc0IsRUFBRTtFQUMxQjtJQUNFLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWMsRUFBRTtFQUNsQjtJQUNFLHlCQUF5QjtJQUN6QixjQUFjLEVBQUU7RUFDbEI7SUFDRSx5QkFBeUI7SUFDekIsY0FBYyxFQUFFO0VBQ2xCO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWMsRUFBRTtFQUNsQjtJQUNFLHlCQUF5QjtJQUN6QixjQUFjLEVBQUU7RUFDbEI7SUFDRSx5QkFBeUI7SUFDekIsY0FBYyxFQUFFO0VBQ2xCO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWMsRUFBRTtFQUNsQjtJQUNFLHlCQUF5QjtJQUN6QixjQUFjLEVBQUU7RUFDbEI7SUFDRSx5QkFBeUI7SUFDekIsY0FBYyxFQUFFO0VBQ2xCO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWMsRUFBRTtFQUNsQjtJQUNFLHlCQUF5QjtJQUN6QixjQUFjLEVBQUU7RUFDbEI7SUFDRSx5QkFBeUI7SUFDekIsY0FBYyxFQUFFO0VBRXBCO0VBQ0UseUJBQXlCLEVBQUU7RUFDM0I7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULHlCQUF5QjtJQUN6QixVQUFVLEVBQUU7RUFDZDtJQUNFLGdCQUFnQixFQUFFO0VBQ3BCO0lBQ0UsTUFBTTtJQUNOLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQix5QkFBaUI7SUFBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQix5QkFBaUI7SUFBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFFL0I7RUFDRSx5QkFBeUIsRUFBRTtFQUMzQjtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFVBQVUsRUFBRTtFQUNkO0lBQ0UsZ0JBQWdCLEVBQUU7RUFDcEI7SUFDRSxNQUFNO0lBQ04sV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUUvQjtFQUNFLHlCQUF5QixFQUFFO0VBQzNCO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsVUFBVSxFQUFFO0VBQ2Q7SUFDRSxnQkFBZ0IsRUFBRTtFQUNwQjtJQUNFLE1BQU07SUFDTixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBQzdCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRTtFQUM3QjtJQUNFLHlCQUF5QixFQUFFO0VBRS9CO0VBQ0UseUJBQXlCLEVBQUU7RUFDM0I7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHlCQUF5QjtJQUN6QixVQUFVLEVBQUU7RUFDZDtJQUNFLGdCQUFnQixFQUFFO0VBQ3BCO0lBQ0UsTUFBTTtJQUNOLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQix5QkFBaUI7SUFBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWSxFQUFFO0VBQ2hCO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVksRUFBRTtFQUNoQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZLEVBQUU7RUFDaEI7SUFDRSx5QkFBeUI7SUFDekIsWUFBWSxFQUFFO0VBQ2hCO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVksRUFBRTtFQUNoQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZLEVBQUU7RUFDaEI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQix5QkFBaUI7SUFBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWSxFQUFFO0VBQ2hCO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVksRUFBRTtFQUNoQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZLEVBQUU7RUFDaEI7SUFDRSx5QkFBeUI7SUFDekIsWUFBWSxFQUFFO0VBQ2hCO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVksRUFBRTtFQUNoQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZLEVBQUU7RUFFbEI7RUFDRSx5QkFBeUIsRUFBRTtFQUMzQjtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFVBQVUsRUFBRTtFQUNkO0lBQ0UsZ0JBQWdCLEVBQUU7RUFDcEI7SUFDRSxNQUFNO0lBQ04sV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjLEVBQUU7RUFDbEI7SUFDRSx5QkFBeUI7SUFDekIsY0FBYyxFQUFFO0VBQ2xCO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWMsRUFBRTtFQUNsQjtJQUNFLHlCQUF5QjtJQUN6QixjQUFjLEVBQUU7RUFDbEI7SUFDRSx5QkFBeUI7SUFDekIsY0FBYyxFQUFFO0VBQ2xCO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWMsRUFBRTtFQUNsQjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjLEVBQUU7RUFDbEI7SUFDRSx5QkFBeUI7SUFDekIsY0FBYyxFQUFFO0VBQ2xCO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWMsRUFBRTtFQUNsQjtJQUNFLHlCQUF5QjtJQUN6QixjQUFjLEVBQUU7RUFDbEI7SUFDRSx5QkFBeUI7SUFDekIsY0FBYyxFQUFFO0VBQ2xCO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWMsRUFBRTtFQy9zQnBCO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUNDSjtFREVBO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0NKO0VEQ0k7RUFDSSxnQkFBQTtBQ0NSO0VERUk7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FSO0VESUE7RUFDSSwyQkFBQTtBQ0RKO0VESUE7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0FDRko7RURJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNESjtFREdBO0VBQ0ksb0JBQUE7QUNBSjtFREVBO0VBQ0ksV0FBQTtBQ0NKO0VEQ0E7RUFDSSxtQkFBQTtFQUVBLFlBQUE7QUNDSjtFREVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDQ0o7RURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDSjtFRENBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FDRUo7RURBQTtFQUNJLG9CQUFBO0FDR0o7RURBQTtFQUNJLGtCQUFBO0FDR0o7RUREQTtFQUNJLDZCQUFBO0FDSUo7RURGQTtFQUNJLDhCQUFBO0VBQWdDLFVBQUE7QUNNcEM7RURIQTtFQUNJLDhCQUFBO0VBQWdDLFFBQUE7QUNPcEM7RURMQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNRSjtFRE5BO0VBQ0kscUNBQUE7QUNTSjtFRFBBO0VBQ0kscUNBQUE7RUFDQSxnQkFBQTtBQ1VKO0VEUkE7RUFDSSw0QkFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdGluY29taW5nLW1lc3NhZ2UtZGV0YWlsL2R0aW5jb21pbmctbWVzc2FnZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhdy13aXphcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgYXctd2l6YXJkIC53aXphcmQtc3RlcHMge1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBmbGV4OyB9XG5cbmF3LXdpemFyZC5ob3Jpem9udGFsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICBhdy13aXphcmQuaG9yaXpvbnRhbCAud2l6YXJkLXN0ZXBzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG5cbmF3LXdpemFyZC52ZXJ0aWNhbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cbiAgYXctd2l6YXJkLnZlcnRpY2FsIC53aXphcmQtc3RlcHMge1xuICAgIG1pbi13aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuYXctd2l6YXJkLXN0ZXAsXG5hdy13aXphcmQtY29tcGxldGlvbi1zdGVwIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTsgfVxuXG5hdy13aXphcmQtbmF2aWdhdGlvbi1iYXIgdWwuc3RlcHMtaW5kaWNhdG9yICoge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG5hdy13aXphcmQtbmF2aWdhdGlvbi1iYXIgdWwuc3RlcHMtaW5kaWNhdG9yIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIgdWwuc3RlcHMtaW5kaWNhdG9yIGxpIGEgLmxhYmVsIHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdHJhbnNpdGlvbjogMC4yNXM7IH1cblxuYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUge1xuICBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZSBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUgYTpob3ZlciAubGFiZWwge1xuICAgIGNvbG9yOiAjNGQ0ZDRkOyB9XG5cbmF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsIHVsLnN0ZXBzLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsIHVsLnN0ZXBzLWluZGljYXRvci5zdGVwcy0yOmFmdGVyIHtcbiAgICBsZWZ0OiAyNSU7XG4gICAgcmlnaHQ6IDI1JTsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbCB1bC5zdGVwcy1pbmRpY2F0b3Iuc3RlcHMtMiBsaSB7XG4gICAgd2lkdGg6IDUwJTsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbCB1bC5zdGVwcy1pbmRpY2F0b3Iuc3RlcHMtMzphZnRlciB7XG4gICAgbGVmdDogMTYuNjY2NjclO1xuICAgIHJpZ2h0OiAxNi42NjY2NyU7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwgdWwuc3RlcHMtaW5kaWNhdG9yLnN0ZXBzLTMgbGkge1xuICAgIHdpZHRoOiAzMy4zMzMzMyU7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwgdWwuc3RlcHMtaW5kaWNhdG9yLnN0ZXBzLTQ6YWZ0ZXIge1xuICAgIGxlZnQ6IDEyLjUlO1xuICAgIHJpZ2h0OiAxMi41JTsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbCB1bC5zdGVwcy1pbmRpY2F0b3Iuc3RlcHMtNCBsaSB7XG4gICAgd2lkdGg6IDI1JTsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbCB1bC5zdGVwcy1pbmRpY2F0b3Iuc3RlcHMtNTphZnRlciB7XG4gICAgbGVmdDogMTAlO1xuICAgIHJpZ2h0OiAxMCU7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwgdWwuc3RlcHMtaW5kaWNhdG9yLnN0ZXBzLTUgbGkge1xuICAgIHdpZHRoOiAyMCU7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwgdWwuc3RlcHMtaW5kaWNhdG9yLnN0ZXBzLTY6YWZ0ZXIge1xuICAgIGxlZnQ6IDguMzMzMzMlO1xuICAgIHJpZ2h0OiA4LjMzMzMzJTsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbCB1bC5zdGVwcy1pbmRpY2F0b3Iuc3RlcHMtNiBsaSB7XG4gICAgd2lkdGg6IDE2LjY2NjY3JTsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbCB1bC5zdGVwcy1pbmRpY2F0b3Iuc3RlcHMtNzphZnRlciB7XG4gICAgbGVmdDogNy4xNDI4NiU7XG4gICAgcmlnaHQ6IDcuMTQyODYlOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsIHVsLnN0ZXBzLWluZGljYXRvci5zdGVwcy03IGxpIHtcbiAgICB3aWR0aDogMTQuMjg1NzElOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsIHVsLnN0ZXBzLWluZGljYXRvci5zdGVwcy04OmFmdGVyIHtcbiAgICBsZWZ0OiA2LjI1JTtcbiAgICByaWdodDogNi4yNSU7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwgdWwuc3RlcHMtaW5kaWNhdG9yLnN0ZXBzLTggbGkge1xuICAgIHdpZHRoOiAxMi41JTsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbCB1bC5zdGVwcy1pbmRpY2F0b3Iuc3RlcHMtOTphZnRlciB7XG4gICAgbGVmdDogNS41NTU1NiU7XG4gICAgcmlnaHQ6IDUuNTU1NTYlOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsIHVsLnN0ZXBzLWluZGljYXRvci5zdGVwcy05IGxpIHtcbiAgICB3aWR0aDogMTEuMTExMTElOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsIHVsLnN0ZXBzLWluZGljYXRvci5zdGVwcy0xMDphZnRlciB7XG4gICAgbGVmdDogNSU7XG4gICAgcmlnaHQ6IDUlOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsIHVsLnN0ZXBzLWluZGljYXRvci5zdGVwcy0xMCBsaSB7XG4gICAgd2lkdGg6IDEwJTsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsIHVsLnN0ZXBzLWluZGljYXRvciBsaSBhIC5sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG5hdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwge1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwgdWwuc3RlcHMtaW5kaWNhdG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IGF1dG87IH1cbiAgICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwgdWwuc3RlcHMtaW5kaWNhdG9yIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4OyB9XG4gICAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsIHVsLnN0ZXBzLWluZGljYXRvciBsaSBhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgICAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsIHVsLnN0ZXBzLWluZGljYXRvciBsaSBhIC5sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbmF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLnNtYWxsIHVsLnN0ZXBzLWluZGljYXRvciB7XG4gIHBhZGRpbmc6IDI0cHggMCAxMHB4IDA7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwuc21hbGwgdWwuc3RlcHMtaW5kaWNhdG9yIGxpOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNHB4KTtcbiAgICB0b3A6IC03cHg7XG4gICAgbGVmdDogY2FsYyg1MCUgKyA3cHgpOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLnNtYWxsIHVsLnN0ZXBzLWluZGljYXRvciBsaSAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIHRvcDogLTE0cHg7XG4gICAgbGVmdDogY2FsYyg1MCUgLSA3cHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2OyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLnNtYWxsIHVsLnN0ZXBzLWluZGljYXRvciBsaS5vcHRpb25hbCAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGVmMzg7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwuc21hbGwgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmRvbmUgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5OTMzOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLnNtYWxsIHVsLnN0ZXBzLWluZGljYXRvciBsaS5jdXJyZW50IC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5zbWFsbCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZWRpdGluZyAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwuc21hbGwgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmNvbXBsZXRlZCAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzk5MzM7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwuc21hbGwgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZSBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwuc21hbGwgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5vcHRpb25hbCBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwZWQyMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5zbWFsbCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmRvbmUgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDg2MmQ7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwuc21hbGwgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5jdXJyZW50IGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM3MzczOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLnNtYWxsIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUuZWRpdGluZyBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2MDAwMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5zbWFsbCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmNvbXBsZXRlZCBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkODYyZDsgfVxuXG5hdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQgdWwuc3RlcHMtaW5kaWNhdG9yIHtcbiAgcGFkZGluZzogNjBweCAwIDEwcHggMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQgdWwuc3RlcHMtaW5kaWNhdG9yIGxpOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICB0b3A6IC0yNXB4O1xuICAgIGxlZnQ6IGNhbGMoNTAlICsgMjVweCk7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwubGFyZ2UtZmlsbGVkIHVsLnN0ZXBzLWluZGljYXRvciBsaSAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIHRvcDogLTUwcHg7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm9wdGlvbmFsIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ZWYzODsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmRvbmUgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5OTMzOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuY3VycmVudCAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwubGFyZ2UtZmlsbGVkIHVsLnN0ZXBzLWluZGljYXRvciBsaS5lZGl0aW5nIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmNvbXBsZXRlZCAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzk5MzM7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwubGFyZ2UtZmlsbGVkIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5OyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLm9wdGlvbmFsIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBlZDIwOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmRvbmUgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDg2MmQ7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwubGFyZ2UtZmlsbGVkIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUuY3VycmVudCBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzczNzM3MzsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5lZGl0aW5nIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwMDAwOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmNvbXBsZXRlZCBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkODYyZDsgfVxuXG5hdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1lbXB0eSB1bC5zdGVwcy1pbmRpY2F0b3Ige1xuICBwYWRkaW5nOiA2MHB4IDAgMTBweCAwOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5IHVsLnN0ZXBzLWluZGljYXRvciBsaTpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gICAgdG9wOiAtMjVweDtcbiAgICBsZWZ0OiBjYWxjKDUwJSArIDI1cHgpOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5IHVsLnN0ZXBzLWluZGljYXRvciBsaSAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIHRvcDogLTUwcHg7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0U2RTZFNjsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1lbXB0eSB1bC5zdGVwcy1pbmRpY2F0b3IgbGkub3B0aW9uYWwgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzhlZjM4OyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5IHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lIC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzOTkzMzsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1lbXB0eSB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuY3VycmVudCAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4MDgwODA7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwubGFyZ2UtZW1wdHkgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmVkaXRpbmcgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkYwMDAwOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5IHVsLnN0ZXBzLWluZGljYXRvciBsaS5jb21wbGV0ZWQgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzM5OTMzOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5IHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2RjZGNkOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5IHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUub3B0aW9uYWwgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMmUyMTI7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwubGFyZ2UtZW1wdHkgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5kb25lIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjY3MzI2OyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5IHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUuY3VycmVudCBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzY3Njc2NzsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1lbXB0eSB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmVkaXRpbmcgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjYzAwMDA7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwubGFyZ2UtZW1wdHkgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5jb21wbGV0ZWQgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNjczMjY7IH1cblxuYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIHtcbiAgcGFkZGluZzogNjBweCAwIDEwcHggMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGk6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICAgIHRvcDogLTI1cHg7XG4gICAgbGVmdDogY2FsYyg1MCUgKyAyNXB4KTsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICB0b3A6IC01MHB4O1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgY29sb3I6IGJsYWNrOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5vcHRpb25hbCAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGVmMzg7XG4gICAgY29sb3I6IGJsYWNrOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzOTkzMztcbiAgICBjb2xvcjogYmxhY2s7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmN1cnJlbnQgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xuICAgIGNvbG9yOiBibGFjazsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZWRpdGluZyAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XG4gICAgY29sb3I6IGJsYWNrOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5jb21wbGV0ZWQgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5OTMzO1xuICAgIGNvbG9yOiBibGFjazsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcbiAgICBjb2xvcjogYmxhY2s7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5vcHRpb25hbCBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwZWQyMDtcbiAgICBjb2xvcjogYmxhY2s7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5kb25lIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ4NjJkO1xuICAgIGNvbG9yOiBibGFjazsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmN1cnJlbnQgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzczNzM7XG4gICAgY29sb3I6IGJsYWNrOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUuZWRpdGluZyBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2MDAwMDtcbiAgICBjb2xvcjogYmxhY2s7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5jb21wbGV0ZWQgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDg2MmQ7XG4gICAgY29sb3I6IGJsYWNrOyB9XG5cbmF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5LXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIHtcbiAgcGFkZGluZzogNjBweCAwIDEwcHggMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1lbXB0eS1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaTpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gICAgdG9wOiAtMjVweDtcbiAgICBsZWZ0OiBjYWxjKDUwJSArIDI1cHgpOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5LXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpIC5zdGVwLWluZGljYXRvciB7XG4gICAgdG9wOiAtNTBweDtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1cHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTZFNkU2O1xuICAgIGNvbG9yOiAjRTZFNkU2OyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5LXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm9wdGlvbmFsIC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzM4ZWYzODtcbiAgICBjb2xvcjogIzM4ZWYzODsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1lbXB0eS1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lIC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzOTkzMztcbiAgICBjb2xvcjogIzMzOTkzMzsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1lbXB0eS1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5jdXJyZW50IC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzgwODA4MDtcbiAgICBjb2xvcjogIzgwODA4MDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1lbXB0eS1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5lZGl0aW5nIC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGMDAwMDtcbiAgICBjb2xvcjogI0ZGMDAwMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIuaG9yaXpvbnRhbC5sYXJnZS1lbXB0eS1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5jb21wbGV0ZWQgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzM5OTMzO1xuICAgIGNvbG9yOiAjMzM5OTMzOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5LXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZSBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjZGNkY2Q7XG4gICAgY29sb3I6ICNjZGNkY2Q7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLmhvcml6b250YWwubGFyZ2UtZW1wdHktc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLm9wdGlvbmFsIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTJlMjEyO1xuICAgIGNvbG9yOiAjMTJlMjEyOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5LXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5kb25lIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjY3MzI2O1xuICAgIGNvbG9yOiAjMjY3MzI2OyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5LXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5jdXJyZW50IGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjc2NzY3O1xuICAgIGNvbG9yOiAjNjc2NzY3OyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5LXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5lZGl0aW5nIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2MwMDAwO1xuICAgIGNvbG9yOiAjY2MwMDAwOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci5ob3Jpem9udGFsLmxhcmdlLWVtcHR5LXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5jb21wbGV0ZWQgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNjczMjY7XG4gICAgY29sb3I6ICMyNjczMjY7IH1cblxuYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLnNtYWxsIHVsLnN0ZXBzLWluZGljYXRvciB7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDE5cHg7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLnNtYWxsIHVsLnN0ZXBzLWluZGljYXRvciBsaTpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtN3B4O1xuICAgIHRvcDogMTRweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE0cHgpO1xuICAgIHdpZHRoOiAxcHg7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLnNtYWxsIHVsLnN0ZXBzLWluZGljYXRvciBsaSBhIHtcbiAgICBtaW4taGVpZ2h0OiAxNHB4OyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5zbWFsbCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTE0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLnNtYWxsIHVsLnN0ZXBzLWluZGljYXRvciBsaS5vcHRpb25hbCAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGVmMzg7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLnNtYWxsIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzOTkzMzsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwuc21hbGwgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmN1cnJlbnQgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5zbWFsbCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZWRpdGluZyAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLnNtYWxsIHVsLnN0ZXBzLWluZGljYXRvciBsaS5jb21wbGV0ZWQgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5OTMzOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5zbWFsbCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwuc21hbGwgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5vcHRpb25hbCBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwZWQyMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwuc21hbGwgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5kb25lIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ4NjJkOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5zbWFsbCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmN1cnJlbnQgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzczNzM7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLnNtYWxsIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUuZWRpdGluZyBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2MDAwMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwuc21hbGwgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5jb21wbGV0ZWQgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDg2MmQ7IH1cblxuYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWZpbGxlZCB1bC5zdGVwcy1pbmRpY2F0b3Ige1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCA1NXB4OyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1maWxsZWQgdWwuc3RlcHMtaW5kaWNhdG9yIGxpOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0yNXB4O1xuICAgIHRvcDogNTBweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICAgIHdpZHRoOiAxcHg7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWZpbGxlZCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkgYSB7XG4gICAgbWluLWhlaWdodDogNTBweDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZmlsbGVkIHVsLnN0ZXBzLWluZGljYXRvciBsaSAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZmlsbGVkIHVsLnN0ZXBzLWluZGljYXRvciBsaS5vcHRpb25hbCAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGVmMzg7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWZpbGxlZCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZG9uZSAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzk5MzM7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWZpbGxlZCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuY3VycmVudCAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWZpbGxlZCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZWRpdGluZyAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWZpbGxlZCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuY29tcGxldGVkIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzOTkzMzsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZmlsbGVkIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5OyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1maWxsZWQgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5vcHRpb25hbCBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwZWQyMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZmlsbGVkIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUuZG9uZSBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkODYyZDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZmlsbGVkIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUuY3VycmVudCBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzczNzM3MzsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZmlsbGVkIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUuZWRpdGluZyBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2MDAwMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZmlsbGVkIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUuY29tcGxldGVkIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ4NjJkOyB9XG5cbmF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1lbXB0eSB1bC5zdGVwcy1pbmRpY2F0b3Ige1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCA1NXB4OyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1lbXB0eSB1bC5zdGVwcy1pbmRpY2F0b3IgbGk6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTI1cHg7XG4gICAgdG9wOiA1MHB4O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XG4gICAgd2lkdGg6IDFweDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZW1wdHkgdWwuc3RlcHMtaW5kaWNhdG9yIGxpIGEge1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWVtcHR5IHVsLnN0ZXBzLWluZGljYXRvciBsaSAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0U2RTZFNjsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZW1wdHkgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm9wdGlvbmFsIC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzM4ZWYzODsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZW1wdHkgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmRvbmUgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzM5OTMzOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1lbXB0eSB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuY3VycmVudCAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4MDgwODA7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWVtcHR5IHVsLnN0ZXBzLWluZGljYXRvciBsaS5lZGl0aW5nIC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGMDAwMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZW1wdHkgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmNvbXBsZXRlZCAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzk5MzM7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWVtcHR5IHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2RjZGNkOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1lbXB0eSB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLm9wdGlvbmFsIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTJlMjEyOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1lbXB0eSB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmRvbmUgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNjczMjY7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWVtcHR5IHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUuY3VycmVudCBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzY3Njc2NzsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZW1wdHkgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5lZGl0aW5nIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2MwMDAwOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1lbXB0eSB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmNvbXBsZXRlZCBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzI2NzMyNjsgfVxuXG5hdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIHtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggNTVweDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0yNXB4O1xuICAgIHRvcDogNTBweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICAgIHdpZHRoOiAxcHg7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaSBhIHtcbiAgICBtaW4taGVpZ2h0OiA1MHB4OyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgY29sb3I6IGJsYWNrOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkub3B0aW9uYWwgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhlZjM4O1xuICAgIGNvbG9yOiBibGFjazsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmRvbmUgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5OTMzO1xuICAgIGNvbG9yOiBibGFjazsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmN1cnJlbnQgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xuICAgIGNvbG9yOiBibGFjazsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmVkaXRpbmcgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xuICAgIGNvbG9yOiBibGFjazsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmNvbXBsZXRlZCAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzk5MzM7XG4gICAgY29sb3I6IGJsYWNrOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcbiAgICBjb2xvcjogYmxhY2s7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUub3B0aW9uYWwgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGVkMjA7XG4gICAgY29sb3I6IGJsYWNrOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmRvbmUgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDg2MmQ7XG4gICAgY29sb3I6IGJsYWNrOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmN1cnJlbnQgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzczNzM7XG4gICAgY29sb3I6IGJsYWNrOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmVkaXRpbmcgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjAwMDA7XG4gICAgY29sb3I6IGJsYWNrOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmNvbXBsZXRlZCBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkODYyZDtcbiAgICBjb2xvcjogYmxhY2s7IH1cblxuYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWVtcHR5LXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIHtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggNTVweDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZW1wdHktc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGk6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTI1cHg7XG4gICAgdG9wOiA1MHB4O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XG4gICAgd2lkdGg6IDFweDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZW1wdHktc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkgYSB7XG4gICAgbWluLWhlaWdodDogNTBweDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZW1wdHktc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFNkU2RTY7XG4gICAgY29sb3I6ICNFNkU2RTY7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWVtcHR5LXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm9wdGlvbmFsIC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzM4ZWYzODtcbiAgICBjb2xvcjogIzM4ZWYzODsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZW1wdHktc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZG9uZSAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzk5MzM7XG4gICAgY29sb3I6ICMzMzk5MzM7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWVtcHR5LXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmN1cnJlbnQgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODA4MDgwO1xuICAgIGNvbG9yOiAjODA4MDgwOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1lbXB0eS1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5lZGl0aW5nIC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGMDAwMDtcbiAgICBjb2xvcjogI0ZGMDAwMDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZW1wdHktc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuY29tcGxldGVkIC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzOTkzMztcbiAgICBjb2xvcjogIzMzOTkzMzsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZW1wdHktc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NkY2RjZDtcbiAgICBjb2xvcjogI2NkY2RjZDsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZW1wdHktc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLm9wdGlvbmFsIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTJlMjEyO1xuICAgIGNvbG9yOiAjMTJlMjEyOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1lbXB0eS1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUuZG9uZSBhOmhvdmVyIC5zdGVwLWluZGljYXRvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzI2NzMyNjtcbiAgICBjb2xvcjogIzI2NzMyNjsgfVxuICBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXIudmVydGljYWwubGFyZ2UtZW1wdHktc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkubmF2aWdhYmxlLmN1cnJlbnQgYTpob3ZlciAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2NzY3Njc7XG4gICAgY29sb3I6ICM2NzY3Njc7IH1cbiAgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyLnZlcnRpY2FsLmxhcmdlLWVtcHR5LXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLm5hdmlnYWJsZS5lZGl0aW5nIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2MwMDAwO1xuICAgIGNvbG9yOiAjY2MwMDAwOyB9XG4gIGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhci52ZXJ0aWNhbC5sYXJnZS1lbXB0eS1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5uYXZpZ2FibGUuY29tcGxldGVkIGE6aG92ZXIgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjY3MzI2O1xuICAgIGNvbG9yOiAjMjY3MzI2OyB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhci1hcmNod2l6YXJkL2FyY2h3aXphcmQuY3NzJztcclxuLnJlZmVycmVyY29udGFpbmVyIHtcclxuICAgIC8qaGVpZ2h0OiA0MDBweDsqL1xyXG4gICAgLypvdmVyZmxvdzogc2Nyb2xsOyovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNsYXRlZ3JleTtcclxuICAgIHBhZGRpbmc6MTBweDtcclxufVxyXG5cclxuLnN1bW1hcnktdGFibGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJkYmQ7XHJcblxyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LXRvb2xiYXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRhYmxlIC5tYXQtdGFibGUgdGhlYWQge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVmZXJyZXItZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICBcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLnJlaGFicmVmZXJyZXItZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uY3JlYXRlcmVmZXJyZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbn1cclxuLmZ1bGx3aWR0aHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLm1hdC1yb3cuaG92ZXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTZlNGYzO1xyXG4gICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYXQtcm93LmhpZ2hsaWdodGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNhNmU0ZjM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG4ucGF0aWVudC1kaWFsb2ctY29udGFpbmVyIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbi5ub2JvcmRlclRleHQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5wYWRkaW5nYm90dG9tIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG50aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmNlbnRlckFsaWduVGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xyXG59XHJcblxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cclxufVxyXG4ub3B0aW9uLWNvbHVtbi1zdHlsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpbmstZGVjb3JhdGlvbiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6MjAwO1xyXG59XHJcbi5sYWJlbC1mb250IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItYXJjaHdpemFyZC9hcmNod2l6YXJkLmNzcyc7XG4ucmVmZXJyZXJjb250YWluZXIge1xuICAvKmhlaWdodDogNDAwcHg7Ki9cbiAgLypvdmVyZmxvdzogc2Nyb2xsOyovXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zdW1tYXJ5LXRhYmxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJkYmQ7XG59XG4uc3VtbWFyeS10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cbi5zdW1tYXJ5LXRhYmxlIC5tYXQtdG9vbGJhciB7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdW1tYXJ5LXRhYmxlIC5tYXQtdGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yZWZlcnJlci1kaWFsb2ctY29udGFpbmVyIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ucmVoYWJyZWZlcnJlci1kaWFsb2ctY29udGFpbmVyIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY3JlYXRlcmVmZXJyZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbn1cblxuLmZ1bGx3aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXJvdy5ob3ZlcmVkIHtcbiAgYmFja2dyb3VuZDogI2E2ZTRmMztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LXJvdy5oaWdobGlnaHRlZCB7XG4gIGJhY2tncm91bmQ6ICNhNmU0ZjM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBhdGllbnQtZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLm5vYm9yZGVyVGV4dCB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnBhZGRpbmdib3R0b20ge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5jZW50ZXJBbGlnblRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xuICAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XG4gIC8qIHJlZCAqL1xufVxuXG4ub3B0aW9uLWNvbHVtbi1zdHlsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rLWRlY29yYXRpb24ge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4ubGFiZWwtZm9udCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/dtincoming-message-detail/dtincoming-message-detail.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dtincoming-message-detail/dtincoming-message-detail.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: DTIncomingMessageDetailComponent, XMLViewDialog, PatientDialog, ReferrerDialog */

  /***/
  function srcAppModulesEmrpageComponentDtincomingMessageDetailDtincomingMessageDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DTIncomingMessageDetailComponent", function () {
      return DTIncomingMessageDetailComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XMLViewDialog", function () {
      return XMLViewDialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientDialog", function () {
      return PatientDialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferrerDialog", function () {
      return ReferrerDialog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/layout/services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/modal/ModalStaticClass */
    "./src/app/modules/shared/components/modal/ModalStaticClass.ts");
    /* harmony import */


    var src_app_modules_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/modules/shared/services/shared.service */
    "./src/app/modules/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/modules/emrpage/services/referral.service */
    "./src/app/modules/emrpage/services/referral.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var angular_archwizard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular-archwizard */
    "./node_modules/angular-archwizard/fesm2015/angular-archwizard.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_15___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_add_operator_pairwise__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! rxjs/add/operator/pairwise */
    "./node_modules/rxjs-compat/_esm2015/add/operator/pairwise.js");

    var DTIncomingMessageDetailComponent =
    /*#__PURE__*/
    function () {
      function DTIncomingMessageDetailComponent(_headerService, _storageHelper, _sidebarService, modalDialog, _referrerservice, _router, _navigate, datepipe) {
        _classCallCheck(this, DTIncomingMessageDetailComponent);

        this._headerService = _headerService;
        this._storageHelper = _storageHelper;
        this._sidebarService = _sidebarService;
        this.modalDialog = modalDialog;
        this._referrerservice = _referrerservice;
        this._router = _router;
        this._navigate = _navigate;
        this.datepipe = datepipe;
        this.displayedColumns = ['FileName', 'FileData'];
        this.DTIncomingXML = {
          PageSize: 5,
          MaxPageSize: 30
        };
        this.DTincomingmessagedetail = {};
        this.DTincomingmessagedetailprocessed = {};
        this.noRecordsMessage = "";
        this.nopatientRecordsMessage = "";
        this.nopocRecordsMessage = "";
        this.DTPatients = {
          PageSize: 5,
          MaxPageSize: 30
        };
        this.DTincomingmessageResponse = {};
        this.DTPOCs = {
          PageSize: 5,
          MaxPageSize: 30
        };
        this.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.DTIncomingXML.XMLattachment);
        this.patientDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.DTPatients.IncomingMessagePatients);
        this.pocDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.DTPOCs.IncomingMessagePOCs);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);
        this.loggedInUserDetails = {};
        this.referrerdisplayedColumns = ['Name', 'Email', 'Action'];
        this.referrerlist = {
          PageSize: 5,
          MaxPageSize: 7
        };
        this.referrerDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.referrerlist.rehabReferrers);
        this.noreferrerRecordsMessage = "";
        this.responsereferrerlist = [];
        this.pageSizeOptions = [5, 10, 20, 30];
        this.loadingData = false;
        this.xmlSelected = false;
        this.xmlFileContent = {};
        this.actionxml = [{
          value: 'Referral',
          viewValue: 'Referral'
        }, {
          value: 'Plan of care approved',
          viewValue: 'Plan of care approved'
        } //{ value: 'Plan of care declined', viewValue: 'Plan of care declined' }
        ];
        this.acceptpatient = {};
        this.rejectpatient = {};
        this.patientdisplayedColumns = ['Option', 'Name', 'BirthDate', 'CellPh', 'Address', 'MRN', 'Action'];
        this.pocdisplayedColumns = ['Option', 'ApprovalSent', 'TherapistName', 'PDFName']; // DTPatients: IIncomingMessagePatientPage = { PageSize: 20, MaxPageSize: 30 };
        // DTincomingmessageResponse: IIncomingMessageOperation = {};
        // patientDataSource: MatTableDataSource<IIncomingMessagePatient> = new MatTableDataSource(this.DTPatients.IncomingMessagePatients);

        this.patientselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);
        this.pocselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []); //pageSizeOptions: number[] = [10, 20, 30];
        // nopatientRecordsMessage: string = "";

        this.patientitemSelected = false;
        this.pocitemSelected = false;
        this.DTPatient = {};
        this.DTPOC = {};
        this.IsRefererrPatientExist = false;
        this.IsRefererralstep2 = false;
        this.selectedPatient = 0;
        this.selectedDOC = 0;
        this.FinishTitle = "";
        this.showPortal = false;
        this.currentUrl = null;
      }

      _createClass(DTIncomingMessageDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._sidebarService.setActiveState("dtpocnotfoundmessage");

          this._sidebarService.editSidebarShowValue(true);

          this.getIncomingMessageDetail();

          if (this._storageHelper.getItem("loggedInUserDetails") != null) {
            this.loggedInUserDetails = this._storageHelper.getItem("loggedInUserDetails");
          }
        }
      }, {
        key: "OpenXMLView",
        value: function OpenXMLView(xmlfile) {
          this.xmlfile = xmlfile; // console.log(xmlfile.FileData.toString());

          /* new window */
          //var removedstring1 = xmlfile.FileData.replace('<?xml version="1.0" encoding="UTF-8"?>', '');
          //var FinalXMLString = removedstring1.replace('<?xml-stylesheet type="text/xsl" href="https://ced-a.ms.allscriptscloud.com/ced/4.0/ced.xsl" alternate="no" title="Allscripts Default" ?>', '');
          //let XMLFile = new Blob([FinalXMLString], { type: 'text/xml' });
          //let url = URL.createObjectURL(XMLFile);
          //window.open(url,'_blank', 'resizable');
          //URL.revokeObjectURL(url); 

          /*ends here*/

          console.log(xmlfile.XMLContent.firstName);
          var xmlContent = this.xmlfile;
          this.xmlFileContent.FileData = this.xmlfile.FileData.substring(0, this.xmlfile.FileData.indexOf('</recordTarget>') + 15);
          this.xmlFileContent.FileName = this.xmlfile.FileName;
          var dialogRef = this.modalDialog.open(XMLViewDialog, {
            //width: '1070px',
            height: '370px',
            maxWidth: '92vw',
            width: '680px',
            panelClass: 'referrer-dialog-container',
            disableClose: true,
            data: {
              xmlfile: this.xmlFileContent,
              xmlcontent: xmlContent,
              XMLClass: xmlfile.XMLContent
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {});
        }
      }, {
        key: "highlightCompleted",
        value: function highlightCompleted() {
          console.log('done');
        }
      }, {
        key: "getIncomingMessageDetail",
        value: function getIncomingMessageDetail() {
          var _this19 = this;

          this.loadingData = true;

          this._router.params.subscribe(function (params) {
            _this19.InComingMessageId = Number(params['id'].toString());
            _this19.requestedAction = params['action'].toString();

            if (_this19.requestedAction == "referralprocessed") {
              _this19._referrerservice.getIncomingMessageOperation(_this19.InComingMessageId, 'referralprocessed').subscribe(function (res) {
                console.log("response" + res);

                if (res == "404 : Incoming message does not have attachment") {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this19.modalDialog, "", "Error", "Incoming message does not have attachment", 0, false, 1, "500px", 1);

                  _this19.redirectMainPage();
                } else {
                  _this19._referrerservice.UpdateMessageReadFlag(_this19.InComingMessageId).subscribe(function (response) {
                    console.log('IsReadFlag Updated');
                  }, function (err) {});

                  _this19.DTincomingmessagedetail = res; // this.DTincomingmessagedetail.Received = this.datepipe.transform(this.DTincomingmessagedetail.Received , 'yyyy/MM/dd');

                  _this19.DTincomingmessagedetail.Action = 'Referral';
                  _this19.DTIncomingXML.XMLattachment = _this19.DTincomingmessagedetail.XMLattachment;
                  _this19.DTIncomingXML.TotalRecords = _this19.DTIncomingXML.XMLattachment.length || 0;
                  _this19.DTIncomingXML.TotalPages = Math.ceil(_this19.DTIncomingXML.TotalRecords / _this19.DTIncomingXML.PageSize);
                  _this19.DTIncomingXML.CurrentPage = 0;
                  _this19.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this19.DTIncomingXML.XMLattachment.slice(0, _this19.DTIncomingXML.PageSize));
                  _this19.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);

                  if (_this19.DTIncomingXML.XMLattachment.length <= 0) {
                    _this19.noRecordsMessage = "No records found.";
                  } else {
                    _this19.noRecordsMessage = "";
                  }

                  _this19.loadingData = false;
                }
              }, function (err) {
                _this19.loadingData = false;
              });
            }

            if (_this19.requestedAction == "pocprocessed") {
              _this19._referrerservice.getIncomingMessageOperation(_this19.InComingMessageId, 'pocprocessed').subscribe(function (res) {
                console.log("response" + res);

                if (res == "404 : Incoming message does not have attachment") {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this19.modalDialog, "", "Error", "Incoming message does not have attachment", 0, false, 1, "500px", 1);

                  _this19.redirectMainPage();
                } else {
                  _this19._referrerservice.UpdateMessageReadFlag(_this19.InComingMessageId).subscribe(function (response) {
                    console.log('IsReadFlag Updated');
                  }, function (err) {});

                  _this19.DTincomingmessagedetail = res; // this.DTincomingmessagedetail.Received = this.datepipe.transform(this.DTincomingmessagedetail.Received , 'yyyy/MM/dd');

                  _this19.DTincomingmessagedetail.Action = 'Plan of care approved';
                  _this19.DTIncomingXML.XMLattachment = _this19.DTincomingmessagedetail.XMLattachment;
                  _this19.DTIncomingXML.TotalRecords = _this19.DTIncomingXML.XMLattachment.length || 0;
                  _this19.DTIncomingXML.TotalPages = Math.ceil(_this19.DTIncomingXML.TotalRecords / _this19.DTIncomingXML.PageSize);
                  _this19.DTIncomingXML.CurrentPage = 0;
                  _this19.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this19.DTIncomingXML.XMLattachment.slice(0, _this19.DTIncomingXML.PageSize));
                  _this19.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);

                  if (_this19.DTIncomingXML.XMLattachment.length <= 0) {
                    _this19.noRecordsMessage = "No records found.";
                  } else {
                    _this19.noRecordsMessage = "";
                  }

                  _this19.loadingData = false;
                }
              }, function (err) {
                _this19.loadingData = false;
              });
            }

            if (_this19.requestedAction == "declinedprocessed") {
              _this19._referrerservice.getIncomingMessageOperation(_this19.InComingMessageId, 'declinedprocessed').subscribe(function (res) {
                console.log("response" + res);

                if (res == "404 : Incoming message does not have attachment") {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this19.modalDialog, "", "Error", "Incoming message does not have attachment", 0, false, 1, "500px", 1);

                  _this19.redirectMainPage();
                } else {
                  _this19._referrerservice.UpdateMessageReadFlag(_this19.InComingMessageId).subscribe(function (response) {
                    console.log('IsReadFlag Updated');
                  }, function (err) {});

                  _this19.DTincomingmessagedetail = res; // this.DTincomingmessagedetail.Received = this.datepipe.transform(this.DTincomingmessagedetail.Received , 'yyyy/MM/dd');

                  _this19.DTincomingmessagedetail.Action = 'Plan of care approved';
                  _this19.DTIncomingXML.XMLattachment = _this19.DTincomingmessagedetail.XMLattachment;
                  _this19.DTIncomingXML.TotalRecords = _this19.DTIncomingXML.XMLattachment.length || 0;
                  _this19.DTIncomingXML.TotalPages = Math.ceil(_this19.DTIncomingXML.TotalRecords / _this19.DTIncomingXML.PageSize);
                  _this19.DTIncomingXML.CurrentPage = 0;
                  _this19.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this19.DTIncomingXML.XMLattachment.slice(0, _this19.DTIncomingXML.PageSize));
                  _this19.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);

                  if (_this19.DTIncomingXML.XMLattachment.length <= 0) {
                    _this19.noRecordsMessage = "No records found.";
                  } else {
                    _this19.noRecordsMessage = "";
                  }

                  _this19.loadingData = false;
                }
              }, function (err) {
                _this19.loadingData = false;
              });
            } else if (_this19.requestedAction == "sentforapproval") {
              _this19._referrerservice.getIncomingMessageOperation(_this19.InComingMessageId, 'sentforapproval').subscribe(function (res) {
                console.log("response" + res);

                if (res == "404 : Incoming message does not have attachment") {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this19.modalDialog, "", "Error", "Incoming message does not have attachment", 0, false, 1, "500px", 1);

                  _this19.redirectMainPage();
                } else {
                  _this19._referrerservice.UpdateMessageReadFlag(_this19.InComingMessageId).subscribe(function (response) {
                    console.log('IsReadFlag Updated');
                  }, function (err) {});

                  _this19.DTincomingmessagedetail = res; // this.DTincomingmessagedetail.Received = this.datepipe.transform(this.DTincomingmessagedetail.Received , 'yyyy/MM/dd');

                  _this19.DTincomingmessagedetail.Action = 'Plan of care approved';
                  _this19.DTIncomingXML.XMLattachment = _this19.DTincomingmessagedetail.XMLattachment;
                  _this19.DTIncomingXML.TotalRecords = _this19.DTIncomingXML.XMLattachment.length || 0;
                  _this19.DTIncomingXML.TotalPages = Math.ceil(_this19.DTIncomingXML.TotalRecords / _this19.DTIncomingXML.PageSize);
                  _this19.DTIncomingXML.CurrentPage = 0;
                  _this19.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this19.DTIncomingXML.XMLattachment.slice(0, _this19.DTIncomingXML.PageSize));
                  _this19.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);

                  if (_this19.DTIncomingXML.XMLattachment.length <= 0) {
                    _this19.noRecordsMessage = "No records found.";
                  } else {
                    _this19.noRecordsMessage = "";
                  }

                  _this19.loadingData = false;
                }
              }, function (err) {
                _this19.loadingData = false;
              });
            } else if (_this19.requestedAction == "edit") {
              _this19._referrerservice.getIncomingMessageOperation(_this19.InComingMessageId, 'Edit').subscribe(function (res) {
                console.log("response" + res);

                if (res == "404 : Incoming message does not have attachment") {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this19.modalDialog, "", "Error", "Incoming message does not have attachment", 0, false, 1, "500px", 1);

                  _this19.redirectMainPage();
                } else {
                  _this19._referrerservice.UpdateMessageReadFlag(_this19.InComingMessageId).subscribe(function (response) {
                    console.log('IsReadFlag Updated');
                  }, function (err) {});

                  _this19.DTincomingmessagedetail = res; // this.DTincomingmessagedetail.Received = this.datepipe.transform(this.DTincomingmessagedetail.Received , 'yyyy/MM/dd');

                  _this19.DTIncomingXML.XMLattachment = _this19.DTincomingmessagedetail.XMLattachment;
                  _this19.DTIncomingXML.TotalRecords = _this19.DTIncomingXML.XMLattachment.length || 0;
                  _this19.DTIncomingXML.TotalPages = Math.ceil(_this19.DTIncomingXML.TotalRecords / _this19.DTIncomingXML.PageSize);
                  _this19.DTIncomingXML.CurrentPage = 0;
                  _this19.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this19.DTIncomingXML.XMLattachment.slice(0, _this19.DTIncomingXML.PageSize));
                  _this19.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);

                  if (_this19.DTIncomingXML.XMLattachment.length <= 0) {
                    _this19.noRecordsMessage = "No records found.";
                  } else {
                    _this19.noRecordsMessage = "";
                  }

                  _this19.loadingData = false;
                }
              }, function (err) {
                _this19.loadingData = false;
              });
            } else if (_this19.requestedAction == "readonly") {
              _this19._referrerservice.getIncomingMessageOperation(_this19.InComingMessageId, 'Edit').subscribe(function (res) {
                console.log("response" + res);

                if (res == "404 : Incoming message does not have attachment") {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this19.modalDialog, "", "Error", "Incoming message does not have attachment", 0, false, 1, "500px", 1);

                  _this19.redirectMainPage();
                } else {
                  _this19._referrerservice.UpdateMessageReadFlag(_this19.InComingMessageId).subscribe(function (response) {
                    console.log('IsReadFlag Updated');
                  }, function (err) {});

                  _this19.DTincomingmessagedetail = res; // this.DTincomingmessagedetail.Received = this.datepipe.transform(this.DTincomingmessagedetail.Received , 'yyyy/MM/dd');

                  _this19.DTIncomingXML.XMLattachment = _this19.DTincomingmessagedetail.XMLattachment;
                  _this19.DTIncomingXML.TotalRecords = _this19.DTIncomingXML.XMLattachment.length || 0;
                  _this19.DTIncomingXML.TotalPages = Math.ceil(_this19.DTIncomingXML.TotalRecords / _this19.DTIncomingXML.PageSize);
                  _this19.DTIncomingXML.CurrentPage = 0;
                  _this19.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this19.DTIncomingXML.XMLattachment.slice(0, _this19.DTIncomingXML.PageSize));
                  _this19.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);

                  if (_this19.DTIncomingXML.XMLattachment.length <= 0) {
                    _this19.noRecordsMessage = "No records found.";
                  } else {
                    _this19.noRecordsMessage = "";
                  }

                  _this19.loadingData = false;
                }
              }, function (err) {
                _this19.loadingData = false;
              });
            }
          }, function (err) {
            _this19.loadingData = false;
          });
        }
      }, {
        key: "getPaginationData",
        value: function getPaginationData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTIncomingXML.CurrentPage = pageEvent.pageIndex;
            this.DTIncomingXML.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.DTIncomingXML.XMLattachment.slice(this.DTIncomingXML.CurrentPage * this.DTIncomingXML.PageSize, (this.DTIncomingXML.CurrentPage + 1) * this.DTIncomingXML.PageSize + 1);
            this.angularDataSource.sort = this.sort;
          } else {
            this.angularDataSource.data = this.DTIncomingXML.XMLattachment.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
          }
        }
      }, {
        key: "OnItemChange",
        value: function OnItemChange(value) {
          console.log(value); //this.DTincomingmessagedetailprocessed.AttachmentID = value;
          //var selectedattachmntdata = this.DTincomingmessagedetail.XMLattachment.find((x) => {
          //    if (x.AttachmentID == value) {
          //        return x;
          //    }
          //});
          //this.DTincomingmessagedetailprocessed.FileData = selectedattachmntdata.FileData;
          //this.DTincomingmessagedetailprocessed.FileName = selectedattachmntdata.FileName;

          console.log(value);
          this.DTincomingmessagedetailprocessed.Action = value;
        }
      }, {
        key: "acceptDetails",
        value: function acceptDetails() {
          var _this20 = this;

          this.loadingData = true;
          this.acceptpatient.InpatientID = 0;
          this.acceptpatient.InincomingmessageID = this.DTincomingmessagedetail.ID;
          ;
          this.acceptpatient.InUserID = this.loggedInUserDetails.LoginName;
          this.acceptpatient.AttachmentID = this.DTincomingmessagedetailprocessed.AttachmentID;

          this._referrerservice.AcceptPatient(this.acceptpatient).subscribe(function (response) {
            _this20.loadingData = false;

            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this20.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);
          }, function (err) {
            _this20.loadingData = false;

            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this20.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
          });
        }
      }, {
        key: "rejectDetails",
        value: function rejectDetails() {
          var _this21 = this;

          this.loadingData = true;
          this.loadingData = true;
          this.rejectpatient.InpatientID = null;
          this.rejectpatient.InincomingmessageID = this.DTincomingmessagedetail.ID;
          ;
          this.rejectpatient.InUserID = this.loggedInUserDetails.LoginName;
          this.acceptpatient.AttachmentID = this.DTincomingmessagedetailprocessed.AttachmentID;

          this._referrerservice.RejectPatient(this.rejectpatient).subscribe(function (res) {
            _this21.loadingData = false; //ModalStaticClass.show(this.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);

            var response = res;

            if (response.ErrorCode == "200") {
              _this21.loadingData = false;

              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this21.modalDialog, "", "Success", response.ErrorCode + " : " + response.ErrorMessage, 0, false, 1, "500px", 0);

              _this21.redirectMainPage();
            } else {
              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this21.modalDialog, "", "Error", "502 : Patient reject could not be processed sucessfully. Please contact IT support.", 0, false, 1, "500px", 0);

              _this21.redirectMainPage();
            }
          }, function (err) {
            _this21.loadingData = false;

            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this21.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
          });
        }
      }, {
        key: "createDetails",
        value: function createDetails() {
          var _this22 = this;

          _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Confirm", "Are you sure, this could create a duplicate patient?", 2, false, 0, "500px", 3).subscribe(function (res) {
            if (res.result == 'yes') {
              _this22.loadingData = true;
              debugger; //console.log(this.selectedPatient);
              //this.acceptpatient.InpatientID = this.selectedPatient;

              _this22.acceptpatient.InpatientID = 0;
              _this22.acceptpatient.InincomingmessageID = _this22.DTincomingmessagedetail.ID;
              ;
              _this22.acceptpatient.InUserID = _this22.loggedInUserDetails.LoginName;
              _this22.acceptpatient.AttachmentID = _this22.DTincomingmessagedetailprocessed.AttachmentID;

              _this22._referrerservice.GetRehabReferrerList(_this22.acceptpatient).subscribe(function (response) {
                _this22.loadingData = false;
                _this22.responsereferrerlist = response;

                if (_this22.responsereferrerlist != null) {
                  _this22.referrerlist.rehabReferrers = _this22.responsereferrerlist;
                  _this22.referrerlist.TotalRecords = _this22.referrerlist.rehabReferrers.length || 0;
                  _this22.referrerlist.TotalPages = Math.ceil(_this22.referrerlist.TotalRecords / _this22.referrerlist.PageSize);
                  _this22.referrerlist.CurrentPage = 0;
                  _this22.referrerDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this22.referrerlist.rehabReferrers.slice(0, _this22.referrerlist.PageSize));

                  var dialogRef = _this22.modalDialog.open(ReferrerDialog, {
                    //width: '1070px',
                    height: '500px',
                    maxWidth: '350vw',
                    width: '950px',
                    panelClass: 'referrer-dialog-container',
                    disableClose: true,
                    data: {
                      referrerlist: _this22.referrerlist,
                      referrerDataSource: _this22.referrerDataSource,
                      patient: _this22.acceptpatient
                    }
                  });

                  dialogRef.afterClosed().subscribe(function (result) {
                    dialogRef.close();
                  }); //setTimeout(() => this.gotoNextStepTemp(), 500);
                } else {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this22.modalDialog, "", "Error", "No referrer Data exists", 0, false, 1, "500px", 1);
                }
              }, function (err) {
                _this22.loadingData = false;

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this22.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
              });
            }
          });
        }
      }, {
        key: "importDetails",
        value: function importDetails(patientId) {
          var _this23 = this;

          this.loadingData = true; // console.log(this.selectedPatient);
          //  this.acceptpatient.InpatientID = this.selectedPatient;

          this.acceptpatient.InpatientID = patientId;
          this.acceptpatient.InincomingmessageID = this.DTincomingmessagedetail.ID;
          ;
          this.acceptpatient.InUserID = this.loggedInUserDetails.LoginName;
          this.acceptpatient.AttachmentID = this.DTincomingmessagedetailprocessed.AttachmentID;

          this._referrerservice.ImportPatient(this.acceptpatient).subscribe(function (res) {
            var response = res;

            if (response.ErrorCode == "200") {
              _this23.loadingData = false;

              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this23.modalDialog, "", "Success", response.ErrorCode + " : " + response.ErrorMessage, 0, false, 1, "500px", 0);

              _this23.redirectMainPage();
            } else {
              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this23.modalDialog, "", "Error", "502 : Patient importing could not be processed sucessfully. Please contact IT support.", 0, false, 1, "500px", 0);

              _this23.redirectMainPage();
            }
          }, function (err) {
            _this23.loadingData = false;

            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this23.modalDialog, "", "Error", "Unable to accept / Reject / import, please contact administrator.", 0, false, 1, "500px", 1);
          });
        }
      }, {
        key: "processPOC",
        value: function processPOC() {
          var _this24 = this;

          this.DTPOC.Docrowid = this.selectedDOC;

          if (this.DTPOC.Docrowid != null && this.DTPOC.Docrowid != undefined && this.DTPOC.Docrowid != 0) {
            this.loadingData = true;

            this._referrerservice.ProcessPOC(this.DTPatient.Prowid, this.DTincomingmessageResponse.Operation, this.DTincomingmessagedetail.ID, this.DTPOC.Docrowid, this.DTPOC.PDFName, this.loggedInUserDetails.LoginName, this.DTincomingmessagedetailprocessed.AttachmentID).subscribe(function (res) {
              _this24.loadingData = false;
              var response = res;

              if (response.ErrorCode == "200") {
                _this24.loadingData = false;

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this24.modalDialog, "", "Success", response.ErrorCode + " : " + response.ErrorMessage, 0, false, 1, "500px", 0);

                _this24.redirectMainPage();
              } else {
                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this24.modalDialog, "", "Error", "502 : Plan of Care Approval could not be processed successfully. Please contact IT support.", 0, false, 1, "500px", 0);

                _this24.redirectMainPage();
              }
            }, function (err) {
              _this24.loadingData = false;

              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this24.modalDialog, "", "Error", "something went wrong", 0, false, 1, "500px", 0);
            });
          } else {
            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Error", "Please choose POC to Process", 0, false, 1, "500px", 1);
          }
        }
      }, {
        key: "getPDF",
        value: function getPDF(event) {
          var _this25 = this;

          //let file = new Blob([event.Attachment], { type: 'application/pdf' });  
          //saveAs(file, 'testing.pdf');
          this.loadingData = true;

          this._referrerservice.DownloadPOCFile(event.Docrowid).subscribe(function (res) {
            var contentType = res.headers.get('content-type');
            var blob = new Blob([res.body], {
              type: contentType
            });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_15__["saveAs"])(blob, 'sample.pdf'); //var url = window.URL.createObjectURL(blob);
            //window.open(url);

            res;
            _this25.loadingData = false;
          }, function (err) {
            _this25.loadingData = false;

            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this25.modalDialog, "", "Error", "There was an error while downloading the report.", 0, false, 1, "500px");
          });
        }
      }, {
        key: "getPOCDetails",
        value: function getPOCDetails() {
          var _this26 = this;

          this.loadingData = true;
          this.DTPatient.Prowid = this.selectedPatient;
          console.log("patientid" + this.selectedPatient);

          if (this.DTPatient.Prowid != null && this.DTPatient.Prowid != undefined && this.DTPatient.Prowid != 0) {
            if (this.DTincomingmessageResponse.Operation == 'Referral') {
              this._referrerservice.getPOCList(this.DTPatient.Prowid, this.DTincomingmessageResponse.Operation).subscribe(function (response) {
                _this26.loadingData = false;
                _this26.DTincomingmessageResponse = response;

                if (_this26.DTincomingmessageResponse.DT_POCs != null && _this26.DTincomingmessageResponse.DT_POCs.length > 0) {
                  _this26.DTPOCs.IncomingMessagePOCs = _this26.DTincomingmessageResponse.DT_POCs;
                  _this26.DTPOCs.TotalRecords = _this26.DTincomingmessageResponse.DT_POCs.length || 0;
                  _this26.DTPOCs.TotalPages = Math.ceil(_this26.DTPOCs.TotalRecords / _this26.DTPOCs.PageSize);
                  _this26.DTPOCs.CurrentPage = 0;
                  _this26.pocDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this26.DTPOCs.IncomingMessagePOCs.slice(0, _this26.DTPOCs.PageSize));
                  _this26.pocselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);

                  if (_this26.DTPOCs.IncomingMessagePOCs.length <= 0) {
                    _this26.nopocRecordsMessage = "No records found.";
                  } else {
                    _this26.nopocRecordsMessage = "";
                  }
                } else {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this26.modalDialog, "", "Confirmation", "Please Accept OR Reject Patient", 0, false, 1, "500px", 3);
                }
              }, function (err) {
                _this26.loadingData = false;

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this26.modalDialog, "", "Error", "something went wrong", 0, false, 1, "500px", 1);
              });
            } else if (this.DTincomingmessageResponse.Operation == 'Plan of care approved') {
              this._referrerservice.getPOCList(this.DTPatient.Prowid, this.DTincomingmessageResponse.Operation).subscribe(function (response) {
                _this26.loadingData = false;
                _this26.DTincomingmessageResponse = response;

                if (_this26.DTincomingmessageResponse.DT_POCs != null && _this26.DTincomingmessageResponse.DT_POCs.length > 0) {
                  _this26.DTPOCs.IncomingMessagePOCs = _this26.DTincomingmessageResponse.DT_POCs;
                  _this26.DTPOCs.TotalRecords = _this26.DTincomingmessageResponse.DT_POCs.length || 0;
                  _this26.DTPOCs.TotalPages = Math.ceil(_this26.DTPOCs.TotalRecords / _this26.DTPOCs.PageSize);
                  _this26.DTPOCs.CurrentPage = 0;
                  _this26.pocDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this26.DTPOCs.IncomingMessagePOCs.slice(0, _this26.DTPOCs.PageSize));
                  _this26.pocselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);

                  if (_this26.DTPOCs.IncomingMessagePOCs.length <= 0) {
                    _this26.nopocRecordsMessage = "No records found.";
                  } else {
                    _this26.nopocRecordsMessage = "";
                  } //this.wizard.goToNextStep();


                  setTimeout(function () {
                    return _this26.gotoNextStepTemp();
                  }, 500);
                } else {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this26.modalDialog, "", "Error", "No POC Exist for Patient", 0, false, 1, "500px", 1);
                }
              }, function (err) {
                _this26.loadingData = false;

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this26.modalDialog, "", "Error", "something went wrong", 0, false, 1, "500px", 1);
              });
            } else if (this.DTincomingmessageResponse.Operation == 'Plan of care declined') {
              this._referrerservice.getPOCList(this.DTPatient.Prowid, this.DTincomingmessageResponse.Operation).subscribe(function (response) {
                _this26.loadingData = false;
                _this26.DTincomingmessageResponse = response;

                if (_this26.DTincomingmessageResponse.DT_POCs != null && _this26.DTincomingmessageResponse.DT_POCs.length > 0) {
                  _this26.DTPOCs.IncomingMessagePOCs = _this26.DTincomingmessageResponse.DT_POCs;
                  _this26.DTPOCs.TotalRecords = _this26.DTincomingmessageResponse.DT_POCs.length || 0;
                  _this26.DTPOCs.TotalPages = Math.ceil(_this26.DTPOCs.TotalRecords / _this26.DTPOCs.PageSize);
                  _this26.DTPOCs.CurrentPage = 0;
                  _this26.pocDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this26.DTPOCs.IncomingMessagePOCs.slice(0, _this26.DTPOCs.PageSize));
                  _this26.pocselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);

                  if (_this26.DTPOCs.IncomingMessagePOCs.length <= 0) {
                    _this26.nopocRecordsMessage = "No records found.";
                  } else {
                    _this26.nopocRecordsMessage = "";
                  } // this.wizard.goToNextStep();


                  setTimeout(function () {
                    return _this26.gotoNextStepTemp();
                  }, 500);
                } else {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this26.modalDialog, "", "Error", "No POC Exist for Patient", 0, false, 1, "500px", 1);
                }
              }, function (err) {
                _this26.loadingData = false;

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this26.modalDialog, "", "Error", "something went wrong", 0, false, 1, "500px", 1);
              });
            }
          } else {
            this.loadingData = false;

            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Error", "Please fill required data", 0, false, 1, "500px", 1);
          }
        }
      }, {
        key: "saveDetails",
        value: function saveDetails() {
          var _this27 = this;

          this.loadingData = true; // var detailsToBeSent: IPersonalization = { TNumber: this.data.personalizationDetails.TNumber, PersonalizationDetails: this.dataSource.data }

          if (this.mainscreenfrom.valid && this.DTincomingmessagedetailprocessed.FileName != undefined && this.DTincomingmessagedetailprocessed.FileName != null && this.DTincomingmessagedetailprocessed.FileName != "") {
            this.DTincomingmessagedetailprocessed.InComingMessageID = this.DTincomingmessagedetail.ID;
            this.DTincomingmessagedetailprocessed.Username = this.loggedInUserDetails.LoginName;

            this._referrerservice.processIncomingMesssage(this.DTincomingmessagedetailprocessed).subscribe(function (response) {
              _this27.loadingData = false; //ModalStaticClass.show(this.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);

              _this27.DTincomingmessageResponse = response; //this.DTincomingmessageResponse.DT_Patients = [];

              if (_this27.DTincomingmessageResponse.Operation == 'Referral') {
                if (_this27.DTincomingmessageResponse.DT_Patients != null && _this27.DTincomingmessageResponse.DT_Patients.length > 0) {
                  //  this.wizard.goToNextStep();
                  // console.log('nextstep'+this.wizard.canGoToStep(1));
                  //this.wizard.goToNextStep();
                  _this27.DTPatients.IncomingMessagePatients = _this27.DTincomingmessageResponse.DT_Patients;
                  _this27.DTPatients.TotalRecords = _this27.DTincomingmessageResponse.DT_Patients.length || 0;
                  _this27.DTPatients.TotalPages = Math.ceil(_this27.DTPatients.TotalRecords / _this27.DTPatients.PageSize);
                  _this27.DTPatients.CurrentPage = 0;
                  _this27.patientDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this27.DTPatients.IncomingMessagePatients.slice(0, _this27.DTPatients.PageSize));
                  _this27.patientselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);

                  if (_this27.DTPatients.IncomingMessagePatients.length <= 0) {
                    _this27.nopatientRecordsMessage = "No records found.";
                  } else {
                    _this27.nopatientRecordsMessage = "";
                  } //this.wizard.goToNextStep();


                  setTimeout(function () {
                    return _this27.gotoNextStepTemp();
                  }, 500);
                  _this27.FinishTitle = "2";
                } else {
                  _this27.IsRefererrPatientExist = true; // ModalStaticClass.show(this.modalDialog, "", "Confirmation", "Please Accept OR Reject Patient", 0, false, 1, "500px", 3);
                  //document.getElementById("acceptID").focus();

                  _this27.acceptpatient.InpatientID = 0;
                  _this27.acceptpatient.InincomingmessageID = _this27.DTincomingmessagedetail.ID;
                  ;
                  _this27.acceptpatient.InUserID = _this27.loggedInUserDetails.LoginName;
                  _this27.acceptpatient.AttachmentID = _this27.DTincomingmessagedetailprocessed.AttachmentID;

                  var dialogRef = _this27.modalDialog.open(PatientDialog, {
                    width: '500px',
                    height: '200px',
                    panelClass: 'referrer-dialog-container',
                    disableClose: true,
                    data: {
                      patientData: _this27.acceptpatient
                    }
                  });

                  dialogRef.afterClosed().subscribe(function (result) {
                    _this27.redirectMainPage();

                    dialogRef.close();
                  });
                }
              } else if (_this27.DTincomingmessageResponse.Operation == 'Plan of care approved') {
                _this27.IsRefererralstep2 = true;

                if (_this27.DTincomingmessageResponse.DT_Patients != null && _this27.DTincomingmessageResponse.DT_Patients.length > 0 && _this27.DTincomingmessageResponse.DT_Patients[0].FirstName != null && _this27.DTincomingmessageResponse.DT_Patients[0].FirstName != "") {
                  _this27.DTPatients.IncomingMessagePatients = _this27.DTincomingmessageResponse.DT_Patients;
                  _this27.DTPatients.TotalRecords = _this27.DTincomingmessageResponse.DT_Patients.length || 0;
                  _this27.DTPatients.TotalPages = Math.ceil(_this27.DTPatients.TotalRecords / _this27.DTPatients.PageSize);
                  _this27.DTPatients.CurrentPage = 0;
                  _this27.patientDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this27.DTPatients.IncomingMessagePatients.slice(0, _this27.DTPatients.PageSize));
                  _this27.patientselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);

                  if (_this27.DTPatients.IncomingMessagePatients.length <= 0) {
                    _this27.nopatientRecordsMessage = "No records found.";
                  } else {
                    _this27.nopatientRecordsMessage = "";
                  }

                  setTimeout(function () {
                    return _this27.gotoNextStepTemp();
                  }, 500);
                } else if (_this27.DTincomingmessageResponse.DT_Patients != null && _this27.DTincomingmessageResponse.DT_Patients.length == 1 && (_this27.DTincomingmessageResponse.DT_Patients[0].FirstName == null || _this27.DTincomingmessageResponse.DT_Patients[0].FirstName == "")) {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this27.modalDialog, "", "Success", "200 : Plan of care Approval Processed Successfully. Patient MRN is " + _this27.DTincomingmessageResponse.DT_Patients[0].MRNNumber, 0, false, 1, "500px", 1);

                  _this27.redirectMainPage(); // WHEN outgoingmessage id is not present but patient id and note id present.

                } else {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this27.modalDialog, "", "Success", "404 : Patient not found", 0, false, 1, "500px", 1);

                  _this27.redirectMainPage();
                }

                _this27.FinishTitle = "3";
              } //else if (this.DTincomingmessageResponse.Operation == 'Plan of care declined') {
              //    this.IsRefererralstep2 = true;
              //    if (this.DTincomingmessageResponse.DT_Patients != null && this.DTincomingmessageResponse.DT_Patients.length > 0) {
              //        this.DTPatients.IncomingMessagePatients = <IIncomingMessagePatient[]>this.DTincomingmessageResponse.DT_Patients;
              //        this.DTPatients.TotalRecords = this.DTincomingmessageResponse.DT_Patients.length || 0;
              //        this.DTPatients.TotalPages = Math.ceil(this.DTPatients.TotalRecords / this.DTPatients.PageSize);
              //        this.DTPatients.CurrentPage = 0;
              //        this.patientDataSource = new MatTableDataSource(this.DTPatients.IncomingMessagePatients.slice(0, this.DTPatients.PageSize));
              //        this.patientselection = new SelectionModel<IIncomingMessagePatient>(false, []);
              //        if (this.DTPatients.IncomingMessagePatients.length <= 0) {
              //            this.nopatientRecordsMessage = "No records found.";
              //        }
              //        else {
              //            this.nopatientRecordsMessage = "";
              //        }
              //        setTimeout(() => this.gotoNextStepTemp(), 500);
              //    }
              //    else if (this.DTincomingmessageResponse.DT_Patients == []) {
              //        ModalStaticClass.show(this.modalDialog, "", "Success", "Record Processed Successfully", 0, false, 1, "500px", 1);
              //        this.redirectMainPage();
              //    }
              //    else {
              //        ModalStaticClass.show(this.modalDialog, "", "Success", "Patient not found", 0, false, 1, "500px", 1);
              //        this.redirectMainPage();
              //    }
              //    this.FinishTitle = "3";
              //}


              _this27.loadingData = false;
            }, function (err) {
              _this27.loadingData = false;

              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this27.modalDialog, "", "Error", "something went wrong", 0, false, 1, "500px", 1);
            });
          } else {
            this.loadingData = false;

            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Error", "Please fill required data", 0, false, 1, "500px", 1);
          }
        } //ngAfterViewChecked(){
        //    console.log('view checked ' + this.wizard);
        //}
        //ngAfterContentInit() {
        //    console.log('after content ' + this.wizard);
        //}
        //ngAfterViewInit() {
        //    console.log('view rendered');
        //    console.log(this.wizard.currentStep);
        //}
        //ngOnChanges() {
        //    console.log('on changes');
        //}

      }, {
        key: "gotoNextStepTemp",
        value: function gotoNextStepTemp() {
          this.wizard.goToNextStep();
        }
      }, {
        key: "redirectMainPage",
        value: function redirectMainPage() {
          //this._navigate.navigateByUrl("/referrer/incomingmessage");
          var redirect = window.history.state.redirect;

          this._navigate.navigate([redirect], {
            state: {
              redirect: this._navigate.url
            }
          });
        }
      }, {
        key: "getPatientPaginationData",
        value: function getPatientPaginationData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTPatients.CurrentPage = pageEvent.pageIndex;
            this.DTPatients.PageSize = pageEvent.pageSize;
            this.patientDataSource.data = this.DTPatients.IncomingMessagePatients.slice(this.DTPatients.CurrentPage * this.DTPatients.PageSize, (this.DTPatients.CurrentPage + 1) * this.DTPatients.PageSize + 1);
            this.patientDataSource.sort = this.sort;
          } else {
            this.patientDataSource.data = this.DTPatients.IncomingMessagePatients.slice(0, pageEvent.pageSize);
            this.patientDataSource.sort = this.sort;
          }
        }
      }, {
        key: "getPOCPaginationData",
        value: function getPOCPaginationData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTPOCs.CurrentPage = pageEvent.pageIndex;
            this.DTPOCs.PageSize = pageEvent.pageSize;
            this.pocDataSource.data = this.DTPOCs.IncomingMessagePOCs.slice(this.DTPOCs.CurrentPage * this.DTPOCs.PageSize, (this.DTPOCs.CurrentPage + 1) * this.DTPOCs.PageSize + 1);
            this.pocDataSource.sort = this.sort;
          } else {
            this.pocDataSource.data = this.DTPOCs.IncomingMessagePOCs.slice(0, pageEvent.pageSize);
            this.pocDataSource.sort = this.sort;
          }
        }
      }, {
        key: "patientselectionfunction",
        value: function patientselectionfunction(value) {
          this.patientselection.toggle(value);

          if (this.patientselection.selected.length > 0) {
            this.patientitemSelected = true;
          } else {
            this.patientitemSelected = false;
          }

          console.log(value);
          this.DTPatient.Prowid = value.Prowid; //this.DTincomingmessagedetailprocessed.FileData = selectedattachmntdata.FileData;
          //this.DTincomingmessagedetailprocessed.FileName = selectedattachmntdata.FileName;
        }
      }, {
        key: "selectionfunction",
        value: function selectionfunction(value) {
          console.log("xml" + value);
          this.selection.toggle(value);

          if (this.selection.selected.length > 0) {
            this.xmlSelected = true;
          } else {
            this.xmlSelected = false;
          }

          console.log(value);
          this.DTincomingmessagedetailprocessed.AttachmentID = value.AttachmentID;
          var selectedattachmntdata = this.DTincomingmessagedetail.XMLattachment.find(function (x) {
            return x.InComingMessageID = value.AttachmentID;
          });
          this.DTincomingmessagedetailprocessed.FileData = selectedattachmntdata.FileData;
          this.DTincomingmessagedetailprocessed.FileName = selectedattachmntdata.FileName;
        }
      }, {
        key: "pocselectionfunction",
        value: function pocselectionfunction(value) {
          this.pocselection.toggle(value);

          if (this.pocselection.selected.length > 0) {
            this.pocitemSelected = true;
          } else {
            this.pocitemSelected = false;
          }

          console.log(value);
          this.DTPOC.Docrowid = value.Docrowid;
          this.DTPOC.PDFName = value.PDFName;
          var selectedattachmntdata = this.DTPOCs.IncomingMessagePOCs.find(function (x) {
            if (x.Docrowid == value.Docrowid) {
              return x;
            }
          });
        }
      }, {
        key: "goToNextStep",
        value: function goToNextStep() {
          debugger;
          var flag = false;

          if (!this.wizard) {
            return false;
          }

          var currentStep = this.wizard.currentStepIndex;

          if (currentStep === 0) {
            flag = true; //if (this.mainscreenfrom.valid) {
            //    flag = true;
            //}
            //this.saveDetails();
          } else if (currentStep == 1) {
            flag = true;
          } else if (currentStep == 2) {}

          if (flag) {
            if (currentStep === 0) {
              this.wizard.goToNextStep();
            } else if (currentStep == 1) {
              this.wizard.goToNextStep(); // this.moveCatTab();
              //this.openCategoryAllocationModal();
            } else if (currentStep == 2) {//this.finishButtonClicked();
            }
          }
        }
      }, {
        key: "moveCatTab",
        value: function moveCatTab() {
          this.wizard.goToNextStep();
        }
      }, {
        key: "goToPreviousStep",
        value: function goToPreviousStep() {
          this.wizard.goToPreviousStep();
        }
      }, {
        key: "hasPreviousStep",
        get: function get() {
          if (!this.wizard) {
            return false;
          }

          return this.wizard.hasPreviousStep();
        }
      }, {
        key: "isLastStep",
        get: function get() {
          if (!this.wizard) {
            return false;
          }

          return this.wizard.isLastStep();
        }
      }]);

      return DTIncomingMessageDetailComponent;
    }();

    DTIncomingMessageDetailComponent.ctorParameters = function () {
      return [{
        type: src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"]
      }, {
        type: src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"]
      }, {
        type: src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__["ReferralService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])], DTIncomingMessageDetailComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], DTIncomingMessageDetailComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_archwizard__WEBPACK_IMPORTED_MODULE_13__["WizardComponent"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_archwizard__WEBPACK_IMPORTED_MODULE_13__["WizardComponent"])], DTIncomingMessageDetailComponent.prototype, "wizard", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mainscreenfrom", null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgForm"])], DTIncomingMessageDetailComponent.prototype, "mainscreenfrom", void 0);
    DTIncomingMessageDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dtincoming-message-detail',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dtincoming-message-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtincoming-message-detail/dtincoming-message-detail.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./dtincoming-message-detail.component.scss */
      "./src/app/modules/emrpage/component/dtincoming-message-detail/dtincoming-message-detail.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"], src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"], src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__["ReferralService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]])], DTIncomingMessageDetailComponent);

    var XMLViewDialog =
    /*#__PURE__*/
    function () {
      function XMLViewDialog(dialogRef, _referrerservice, modalDialog, _sharedService, data) {
        _classCallCheck(this, XMLViewDialog);

        this.dialogRef = dialogRef;
        this._referrerservice = _referrerservice;
        this.modalDialog = modalDialog;
        this._sharedService = _sharedService;
        this.data = data; // dataSource: MatTableDataSource<IPersonalizationDetails>;

        this.loadingData = false;
        this.defaultValues = {};
        this.xmlmodalContent = {};
        this.xmlclass = {};
        this.content = 'Angular highlight text';
        this.query_conversation = "";
        this.selectedSpendPoolHigh = "";
        this.defaultValues = this.data.xmlfile;
        this.xmlmodalContent = this.data.xmlcontent; // this.defaultValues = vkbeautify.xml(this.data.xmlfile);

        this.xmlclass = this.data.XMLClass;
        console.log(this.xmlclass.firstName);
      }

      _createClass(XMLViewDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "viewMore",
        value: function viewMore() {
          console.log(this.xmlmodalContent.FileData);
          var removedstring1 = this.xmlmodalContent.FileData.replace('<?xml version="1.0" encoding="UTF-8"?>', '');
          var FinalXMLString = removedstring1.replace('<?xml-stylesheet type="text/xsl" href="https://ced-a.ms.allscriptscloud.com/ced/4.0/ced.xsl" alternate="no" title="Allscripts Default" ?>', '');
          FinalXMLString = FinalXMLString.replace('<?xml-stylesheet type="text/xsl" href="CCDA.xsl"?>', '');
          var XMLFile = new Blob([FinalXMLString], {
            type: 'text/xml'
          });
          var url = URL.createObjectURL(XMLFile);
          window.open(url, '_blank', 'resizable');
          URL.revokeObjectURL(url);
        }
      }]);

      return XMLViewDialog;
    }();

    XMLViewDialog.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]
      }, {
        type: src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__["ReferralService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_modules_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      static: true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], XMLViewDialog.prototype, "personalizeSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("alloDataForm", null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgForm"])], XMLViewDialog.prototype, "alloDataForm", void 0);
    XMLViewDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'xml-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./admin-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtincoming-message-detail/admin-dialog.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./dtincoming-message-detail.component.scss */
      "./src/app/modules/emrpage/component/dtincoming-message-detail/dtincoming-message-detail.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__["ReferralService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_modules_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], Object])], XMLViewDialog);

    var PatientDialog =
    /*#__PURE__*/
    function () {
      function PatientDialog(dialogRef, _referrerservice, _navigate, modalDialog, _sharedService, data) {
        _classCallCheck(this, PatientDialog);

        this.dialogRef = dialogRef;
        this._referrerservice = _referrerservice;
        this._navigate = _navigate;
        this.modalDialog = modalDialog;
        this._sharedService = _sharedService;
        this.data = data;
        this.displayedColumns = ['FirstName', 'LastName', 'BirthDate', 'Address1', 'City', 'State', 'ZipCode', 'CellPh', 'TherapistName', 'Note'];
        this.DTPatients = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.DTincomingmessageResponse = {};
        this.patientDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.DTPatients.IncomingMessagePatients);
        this.patientselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](false, []);
        this.pageSizeOptions = [5, 10, 20, 30];
        this.nopatientRecordsMessage = "";
        this.itemSelected = false;
        this.DTPatient = {};
        this.loadingData = false;
        this.referrerdisplayedColumns = ['Name', 'Email', 'Action'];
        this.referrerlist = {
          PageSize: 5,
          MaxPageSize: 7
        };
        this.referrerDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.referrerlist.rehabReferrers);
        this.noreferrerRecordsMessage = "";
        this.responsereferrerlist = [];
        this.patientselectedDetails = {};
        this.patientselectedDetails = this.data.patientData;
      }

      _createClass(PatientDialog, [{
        key: "acceptDetails",
        value: function acceptDetails() {
          var _this28 = this;

          this.loadingData = true; //this._referrerservice.AcceptPatient(this.patientselectedDetails).subscribe(
          //    response => {
          //        this.loadingData = false;
          //        this.closeDialog();
          //        ModalStaticClass.show(this.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);
          //    },
          //    err => {
          //        this.loadingData = false;
          //        this.closeDialog();
          //        ModalStaticClass.show(this.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
          //    });

          this._referrerservice.GetRehabReferrerList(this.patientselectedDetails).subscribe(function (response) {
            _this28.loadingData = false;
            _this28.responsereferrerlist = response;

            if (_this28.responsereferrerlist != null) {
              _this28.referrerlist.rehabReferrers = _this28.responsereferrerlist;
              _this28.referrerlist.TotalRecords = _this28.referrerlist.rehabReferrers.length || 0;
              _this28.referrerlist.TotalPages = Math.ceil(_this28.referrerlist.TotalRecords / _this28.referrerlist.PageSize);
              _this28.referrerlist.CurrentPage = 0;
              _this28.referrerDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this28.referrerlist.rehabReferrers.slice(0, _this28.referrerlist.PageSize));

              var dialogRef = _this28.modalDialog.open(ReferrerDialog, {
                //width: '1070px',
                height: '500px',
                maxWidth: '350vw',
                width: '950px',
                panelClass: 'referrer-dialog-container',
                disableClose: true,
                data: {
                  referrerlist: _this28.referrerlist,
                  referrerDataSource: _this28.referrerDataSource,
                  patient: _this28.patientselectedDetails
                }
              });

              dialogRef.afterClosed().subscribe(function (result) {
                _this28.closeDialog();
              }); //setTimeout(() => this.gotoNextStepTemp(), 500);
            } else {
              _this28.loadingData = false;

              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this28.modalDialog, "", "Error", "No referrer Data exists", 0, false, 1, "500px", 1);
            }
          }, function (err) {
            _this28.loadingData = false;

            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this28.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
          });
        }
      }, {
        key: "rejectDetails",
        value: function rejectDetails() {
          var _this29 = this;

          _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Confirm", "Are you sure?", 2, false, 0, "500px", 3).subscribe(function (res) {
            if (res.result == 'yes') {
              _this29.loadingData = true;

              _this29._referrerservice.RejectPatient(_this29.patientselectedDetails).subscribe(function (res) {
                _this29.loadingData = false;

                _this29.closeDialog();

                var response = res;

                if (response.ErrorCode == "200") {
                  _this29.loadingData = false;

                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this29.modalDialog, "", "Success", response.ErrorCode + " : " + response.ErrorMessage, 0, false, 1, "500px", 0);
                } else {
                  _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this29.modalDialog, "", "Error", "502 :  Patient rejection could not be processed sucessfully. Please contact IT support.", 0, false, 1, "500px", 0);
                }
              }, function (err) {
                _this29.loadingData = false;

                _this29.closeDialog();

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this29.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
              });
            }
          });
        }
      }, {
        key: "redirectMainPage",
        value: function redirectMainPage() {
          this._navigate.navigateByUrl("/referrer/incomingmessage");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
          this.redirectMainPage();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.dialogRef.close();
        }
      }]);

      return PatientDialog;
    }();

    PatientDialog.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]
      }, {
        type: src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__["ReferralService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_modules_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])], PatientDialog.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], PatientDialog.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      static: true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], PatientDialog.prototype, "personalizeSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("alloDataForm", null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgForm"])], PatientDialog.prototype, "alloDataForm", void 0);
    PatientDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'patient-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./patient-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtincoming-message-detail/patient-dialog.component.html")).default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__["ReferralService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_modules_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], Object])], PatientDialog);
    /*This is Referrer List*/

    var ReferrerDialog =
    /*#__PURE__*/
    function () {
      function ReferrerDialog(dialogRef, _referrerservice, _navigate, modalDialog, _sharedService, data) {
        _classCallCheck(this, ReferrerDialog);

        this.dialogRef = dialogRef;
        this._referrerservice = _referrerservice;
        this._navigate = _navigate;
        this.modalDialog = modalDialog;
        this._sharedService = _sharedService;
        this.data = data;
        this.referrerdisplayedColumns = ['Option', 'Name', 'Email', 'NPINumber', 'Address', 'Phone'];
        this.referrerlist = {
          PageSize: 5,
          MaxPageSize: 5
        };
        this.referrerDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.referrerlist.rehabReferrers);
        this.pageSizeOptions = [5];
        this.noreferrerRecordsMessage = "";
        this.patient = {};
        this.loadingData = false;
        this.selectedReferrer = 0;
        this.patientselectedDetails = {};
        this.referrerDataSource = this.data.referrerDataSource;
        this.referrerlist = this.data.referrerlist;
        this.patient = this.data.patient;

        if (this.referrerlist.rehabReferrers.length <= 0) {
          this.noreferrerRecordsMessage = "No records found.";
        } else {
          this.noreferrerRecordsMessage = "";
        }
      }

      _createClass(ReferrerDialog, [{
        key: "acceptDetails",
        value: function acceptDetails(eventID) {
          var _this30 = this;

          this.loadingData = true;

          if (eventID == 1) {
            this.patient.ReferrerID = this.selectedReferrer; // Existing referrer
          } else {
            this.patient.ReferrerID = eventID; // new referrer
          }

          if (this.patient.ReferrerID != undefined && this.patient.ReferrerID != null) {
            this._referrerservice.CreatePatient(this.patient).subscribe(function (res) {
              _this30.closeDialog();

              _this30.loadingData = false;
              var response = res;

              if (response.ErrorCode == "200") {
                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this30.modalDialog, "", "Success", response.ErrorCode + " : " + response.ErrorMessage, 0, false, 1, "500px", 0);

                _this30.redirectMainPage();
              } else if (response.ErrorCode == "404") {
                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this30.modalDialog, "", "Error", response.ErrorCode + " : " + response.ErrorMessage, 0, false, 1, "500px", 0); // this.redirectMainPage();

              } else {
                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this30.modalDialog, "", "Error", "502 : Patient referral could not be processed sucessfully. Please contact IT support.", 0, false, 1, "500px", 0);
              }
            }, function (err) {
              _this30.loadingData = false;

              _this30.closeDialog();

              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this30.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
            });
          } else {
            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Error", "please select referrer.", 0, false, 1, "500px", 1);
          }
        }
      }, {
        key: "getReferrerPaginationData",
        value: function getReferrerPaginationData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.referrerlist.CurrentPage = pageEvent.pageIndex;
            this.referrerlist.PageSize = pageEvent.pageSize;
            this.referrerDataSource.data = this.referrerlist.rehabReferrers.slice(this.referrerlist.CurrentPage * this.referrerlist.PageSize, (this.referrerlist.CurrentPage + 1) * this.referrerlist.PageSize + 1);
            this.referrerDataSource.sort = this.sort;
          } else {
            this.referrerDataSource.data = this.referrerlist.rehabReferrers.slice(0, pageEvent.pageSize);
            this.referrerDataSource.sort = this.sort;
          }
        }
      }, {
        key: "redirectMainPage",
        value: function redirectMainPage() {
          this._navigate.navigateByUrl("/referrer/incomingmessage");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
          this.redirectMainPage();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.dialogRef.close();
        }
      }]);

      return ReferrerDialog;
    }();

    ReferrerDialog.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]
      }, {
        type: src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__["ReferralService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_modules_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])], ReferrerDialog.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], ReferrerDialog.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      static: true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], ReferrerDialog.prototype, "personalizeSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("alloDataForm", null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgForm"])], ReferrerDialog.prototype, "alloDataForm", void 0);
    ReferrerDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'referrer-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./referrer-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtincoming-message-detail/referrer-dialog.component.html")).default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__["ReferralService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_modules_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], Object])], ReferrerDialog);
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/dtpoc-not-found/dtpoc-not-found.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dtpoc-not-found/dtpoc-not-found.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmrpageComponentDtpocNotFoundDtpocNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".referrercontainer {\n  /*height: 400px;*/\n  overflow: auto;\n  width: 90%;\n  border: 1px solid slategrey;\n}\n\n.summary-table {\n  background: white;\n  height: calc(100vh - 160px);\n  overflow: auto;\n  border: 1px solid #bfbdbd;\n}\n\n.summary-table .mat-header-cell {\n  min-width: 150px;\n}\n\n.summary-table .mat-toolbar {\n  margin-top: 150px;\n  background-color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.summary-table .mat-table thead {\n  background: none !important;\n}\n\n.referrer-dialog-container .mat-dialog-container {\n  padding: 0px;\n  overflow-x: hidden;\n  height: 200px;\n}\n\n.createreferrer {\n  padding-right: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdHBvYy1ub3QtZm91bmQvQzpcXERpcmVjdFRydXN0XFxDb2RlXFxUZWFtUmVoYWJcXENsaWVudEFwcC9zcmNcXGFwcFxcbW9kdWxlc1xcZW1ycGFnZVxcY29tcG9uZW50XFxkdHBvYy1ub3QtZm91bmRcXGR0cG9jLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdHBvYy1ub3QtZm91bmQvZHRwb2Mtbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxnQkFBQTtBQ0NSOztBREVJO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBUjs7QURJQTtFQUNJLDJCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9kdHBvYy1ub3QtZm91bmQvZHRwb2Mtbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZmVycmVyY29udGFpbmVyIHtcclxuICAgIC8qaGVpZ2h0OiA0MDBweDsqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2xhdGVncmV5O1xyXG59XHJcblxyXG4uc3VtbWFyeS10YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmRiZDtcclxuXHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtdG9vbGJhciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgIH1cclxufVxyXG5cclxuLnN1bW1hcnktdGFibGUgLm1hdC10YWJsZSB0aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZWZlcnJlci1kaWFsb2ctY29udGFpbmVyIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY3JlYXRlcmVmZXJyZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbn1cclxuIiwiLnJlZmVycmVyY29udGFpbmVyIHtcbiAgLypoZWlnaHQ6IDQwMHB4OyovXG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XG59XG5cbi5zdW1tYXJ5LXRhYmxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJkYmQ7XG59XG4uc3VtbWFyeS10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cbi5zdW1tYXJ5LXRhYmxlIC5tYXQtdG9vbGJhciB7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdW1tYXJ5LXRhYmxlIC5tYXQtdGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yZWZlcnJlci1kaWFsb2ctY29udGFpbmVyIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY3JlYXRlcmVmZXJyZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/dtpoc-not-found/dtpoc-not-found.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/dtpoc-not-found/dtpoc-not-found.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: DTPocNotFoundComponent */

  /***/
  function srcAppModulesEmrpageComponentDtpocNotFoundDtpocNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DTPocNotFoundComponent", function () {
      return DTPocNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/layout/services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modules/emrpage/services/referral.service */
    "./src/app/modules/emrpage/services/referral.service.ts");

    var DTPocNotFoundComponent =
    /*#__PURE__*/
    function () {
      function DTPocNotFoundComponent(_headerService, _storageHelper, _sidebarService, modalDialog, _referrerservice) {
        _classCallCheck(this, DTPocNotFoundComponent);

        this._headerService = _headerService;
        this._storageHelper = _storageHelper;
        this._sidebarService = _sidebarService;
        this.modalDialog = modalDialog;
        this._referrerservice = _referrerservice;
        this.displayedColumns = ['Institute_ID', 'Note_ID', 'Patient_ID', 'POC_Status'];
        this.DTPOCNotFoundMessages = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.DTPOCNotFoundMessage = {};
        this.noRecordsMessage = "";
        this.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.DTPOCNotFoundMessages.IdtpocnotfoundMessages);
        this.pageSizeOptions = [10, 20, 30];
        this.loadingData = false;
      }

      _createClass(DTPocNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._sidebarService.setActiveState("dtpocnotfoundmessage");

          this._sidebarService.editSidebarShowValue(true);

          this.getDTPOCNotFoundMessageList();
        }
      }, {
        key: "getDTPOCNotFoundMessageList",
        value: function getDTPOCNotFoundMessageList() {
          var _this31 = this;

          this.loadingData = true;

          this._referrerservice.getDTPOCNotFoundMessageList().subscribe(function (res) {
            _this31.DTPOCNotFoundMessages.IdtpocnotfoundMessages = res;
            _this31.loadingData = false;
            _this31.DTPOCNotFoundMessages.TotalRecords = _this31.DTPOCNotFoundMessages.IdtpocnotfoundMessages.length || 0;
            _this31.DTPOCNotFoundMessages.TotalPages = Math.ceil(_this31.DTPOCNotFoundMessages.TotalRecords / _this31.DTPOCNotFoundMessages.PageSize);
            _this31.DTPOCNotFoundMessages.CurrentPage = 0;
            _this31.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this31.DTPOCNotFoundMessages.IdtpocnotfoundMessages.slice(0, _this31.DTPOCNotFoundMessages.PageSize));

            if (_this31.DTPOCNotFoundMessages.IdtpocnotfoundMessages.length <= 0) {
              _this31.noRecordsMessage = "No records found.";
            } else {
              _this31.noRecordsMessage = "";
            }
          }, function (err) {});
        } //Paginator

      }, {
        key: "getPaginationData",
        value: function getPaginationData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTPOCNotFoundMessages.CurrentPage = pageEvent.pageIndex;
            this.DTPOCNotFoundMessages.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.DTPOCNotFoundMessages.IdtpocnotfoundMessages.slice(this.DTPOCNotFoundMessages.CurrentPage * this.DTPOCNotFoundMessages.PageSize, (this.DTPOCNotFoundMessages.CurrentPage + 1) * this.DTPOCNotFoundMessages.PageSize + 1);
            this.angularDataSource.sort = this.sort;
          } else {
            this.angularDataSource.data = this.DTPOCNotFoundMessages.IdtpocnotfoundMessages.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return DTPocNotFoundComponent;
    }();

    DTPocNotFoundComponent.ctorParameters = function () {
      return [{
        type: src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"]
      }, {
        type: src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"]
      }, {
        type: src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_8__["ReferralService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])], DTPocNotFoundComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], DTPocNotFoundComponent.prototype, "sort", void 0);
    DTPocNotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dtpoc-not-found',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dtpoc-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/dtpoc-not-found/dtpoc-not-found.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./dtpoc-not-found.component.scss */
      "./src/app/modules/emrpage/component/dtpoc-not-found/dtpoc-not-found.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"], src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"], src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_8__["ReferralService"]])], DTPocNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/emraddview/emraddview.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/emraddview/emraddview.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmrpageComponentEmraddviewEmraddviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".referrercontainer {\n  /*height: 400px;*/\n  overflow: auto;\n  width: 100%;\n  border: 1px solid slategrey;\n}\n\n.summary-table {\n  background: white;\n  height: calc(100vh - 160px);\n  overflow: auto;\n  border: 1px solid #bfbdbd;\n}\n\n.summary-table .mat-header-cell {\n  min-width: 150px;\n}\n\n.summary-table .mat-toolbar {\n  margin-top: 150px;\n  background-color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.summary-table .mat-table thead {\n  background: none !important;\n}\n\n.referrer-dialog-container .mat-dialog-container {\n  padding: 0px;\n  overflow-x: hidden;\n  height: 200px;\n}\n\n.createreferrer {\n  padding-right: 100px;\n}\n\nth.mat-header-cell {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9lbXJhZGR2aWV3L0M6XFxEaXJlY3RUcnVzdFxcQ29kZVxcVGVhbVJlaGFiXFxDbGllbnRBcHAvc3JjXFxhcHBcXG1vZHVsZXNcXGVtcnBhZ2VcXGNvbXBvbmVudFxcZW1yYWRkdmlld1xcZW1yYWRkdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9lbXJhZGR2aWV3L2VtcmFkZHZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDSTtFQUNJLGdCQUFBO0FDQ1I7O0FERUk7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FSOztBREdBO0VBQ0ksMkJBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9lbXJhZGR2aWV3L2VtcmFkZHZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmZXJyZXJjb250YWluZXIge1xyXG4gICAgLypoZWlnaHQ6IDQwMHB4OyovXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2xhdGVncmV5O1xyXG59XHJcbiAgXHJcbiAgLnN1bW1hcnktdGFibGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJkYmQ7XHJcblxyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LXRvb2xiYXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICB9XHJcbn1cclxuLnN1bW1hcnktdGFibGUgLm1hdC10YWJsZSB0aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlZmVycmVyLWRpYWxvZy1jb250YWluZXIgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGhlaWdodDoyMDBweDtcclxufVxyXG4uY3JlYXRlcmVmZXJyZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbn1cclxudGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIiwiLnJlZmVycmVyY29udGFpbmVyIHtcbiAgLypoZWlnaHQ6IDQwMHB4OyovXG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgc2xhdGVncmV5O1xufVxuXG4uc3VtbWFyeS10YWJsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZGJkO1xufVxuLnN1bW1hcnktdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG4uc3VtbWFyeS10YWJsZSAubWF0LXRvb2xiYXIge1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3VtbWFyeS10YWJsZSAubWF0LXRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmVmZXJyZXItZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNyZWF0ZXJlZmVycmVyIHtcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/emraddview/emraddview.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/emraddview/emraddview.component.ts ***!
    \******************************************************************************/

  /*! exports provided: EMRaddviewComponent, PersonalizationDialog */

  /***/
  function srcAppModulesEmrpageComponentEmraddviewEmraddviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EMRaddviewComponent", function () {
      return EMRaddviewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalizationDialog", function () {
      return PersonalizationDialog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/layout/services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/modal/ModalStaticClass */
    "./src/app/modules/shared/components/modal/ModalStaticClass.ts");
    /* harmony import */


    var src_app_modules_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/modules/shared/services/shared.service */
    "./src/app/modules/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/modules/emrpage/services/referral.service */
    "./src/app/modules/emrpage/services/referral.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var EMRaddviewComponent =
    /*#__PURE__*/
    function () {
      function EMRaddviewComponent(_headerService, _storageHelper, _sidebarService, modalDialog, _referrerservice) {
        _classCallCheck(this, EMRaddviewComponent);

        this._headerService = _headerService;
        this._storageHelper = _storageHelper;
        this._sidebarService = _sidebarService;
        this.modalDialog = modalDialog;
        this._referrerservice = _referrerservice;
        this.displayedColumns = ['Institute_Name', 'Edit'];
        this.DTReferrers = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.referrerDetail = {};
        this.referrerDetails = [];
        this.referrerDetaildelete = {};
        this.noRecordsMessage = "";
        this.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.DTReferrers.DirectTrustReferrers);
        this.pageSizeOptions = [10, 20, 30];
        this.loadingData = false; //this.dataSource.paginator = this.paginator;
        //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        //this._referrerservice.getReferrerList().subscribe(
        //    response => {
        //      this.dataSource = new MatTableDataSource(response);
        //    });
      }

      _createClass(EMRaddviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._sidebarService.setActiveState("referrer");

          this._sidebarService.editSidebarShowValue(true);

          this.getReferrerList();
        }
      }, {
        key: "getReferrerList",
        value: function getReferrerList() {
          var _this32 = this;

          this.loadingData = true;

          this._referrerservice.getReferrerList().subscribe(function (res) {
            _this32.DTReferrers.DirectTrustReferrers = res;
            _this32.loadingData = false;
            _this32.DTReferrers.TotalRecords = _this32.DTReferrers.DirectTrustReferrers.length || 0;
            _this32.DTReferrers.TotalPages = Math.ceil(_this32.DTReferrers.TotalRecords / _this32.DTReferrers.PageSize);
            _this32.DTReferrers.CurrentPage = 0;
            _this32.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this32.DTReferrers.DirectTrustReferrers.slice(0, _this32.DTReferrers.PageSize));

            if (_this32.DTReferrers.DirectTrustReferrers.length <= 0) {
              _this32.noRecordsMessage = "No records found.";
            } else {
              _this32.noRecordsMessage = "";
            }
          }, function (err) {});
        } //Paginator

      }, {
        key: "getPaginationData",
        value: function getPaginationData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTReferrers.CurrentPage = pageEvent.pageIndex;
            this.DTReferrers.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.DTReferrers.DirectTrustReferrers.slice(this.DTReferrers.CurrentPage * this.DTReferrers.PageSize, (this.DTReferrers.CurrentPage + 1) * this.DTReferrers.PageSize + 1);
            this.angularDataSource.sort = this.sort;
          } else {
            this.angularDataSource.data = this.DTReferrers.DirectTrustReferrers.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "OpenCreateReferrerModal",
        value: function OpenCreateReferrerModal() {
          var _this33 = this;

          this.referrerDetails = [];
          this.referrerDetail = {};
          this.referrerDetails.push(this.referrerDetail);
          var dialogRef = this.modalDialog.open(PersonalizationDialog, {
            width: '1100px',
            height: '450px',
            panelClass: 'referrer-dialog-container',
            disableClose: true,
            data: {
              referrerDetails: this.referrerDetails
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this33.getReferrerList();
          });
        }
      }, {
        key: "getReferrerDetail",
        value: function getReferrerDetail(instituteid) {
          var _this34 = this;

          //this.loadingData = true;
          this._referrerservice.getReferrerDetail(instituteid).subscribe(function (response) {
            _this34.referrerDetails = response; //         this.loadingData = false;

            var dialogRef = _this34.modalDialog.open(PersonalizationDialog, {
              width: '1100px',
              height: '450px',
              panelClass: 'referrer-dialog-container',
              disableClose: true,
              data: {
                referrerDetails: _this34.referrerDetails
              }
            });

            dialogRef.afterClosed().subscribe(function (result) {
              //if (result && result.result != null && result.result.length > 0) {
              //    this.displayedColumns = result.result;
              //}
              _this34.getReferrerList();
            });
          });
        }
      }, {
        key: "deleteDetails",
        value: function deleteDetails(instituteid, RefEmailID) {
          var _this35 = this;

          this.referrerDetaildelete.RefEmailID = RefEmailID;
          this.referrerDetaildelete.RefID = instituteid;

          _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Delete Referrer", "This action will Delete Referrer. Please confirm", 1, false, 1, "400px").subscribe(function (res) {
            if (res) {
              _this35.loadingData = true;

              _this35._referrerservice.deleteReferrerDetails(_this35.referrerDetaildelete).subscribe(function (response) {
                _this35.loadingData = false;

                _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this35.modalDialog, "", "Success", "Details Deleted successfully.", 0, false, 1, "500px", 0);

                _this35.getReferrerList();
              });
            }
          });
        }
      }]);

      return EMRaddviewComponent;
    }();

    EMRaddviewComponent.ctorParameters = function () {
      return [{
        type: src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"]
      }, {
        type: src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"]
      }, {
        type: src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__["ReferralService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])], EMRaddviewComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], EMRaddviewComponent.prototype, "sort", void 0);
    EMRaddviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-emraddview',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./emraddview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/emraddview/emraddview.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./emraddview.component.scss */
      "./src/app/modules/emrpage/component/emraddview/emraddview.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"], src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"], src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__["ReferralService"]])], EMRaddviewComponent);

    var PersonalizationDialog =
    /*#__PURE__*/
    function () {
      function PersonalizationDialog(dialogRef, _referrerservice, modalDialog, _sharedService, data) {
        _classCallCheck(this, PersonalizationDialog);

        this.dialogRef = dialogRef;
        this._referrerservice = _referrerservice;
        this.modalDialog = modalDialog;
        this._sharedService = _sharedService;
        this.data = data; // dataSource: MatTableDataSource<IPersonalizationDetails>;

        this.displayedColumns = ['Select', 'ColumnName'];
        this.loadingData = false;
        this.defaultValues = [];
        this.DTReferrers = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.referrerDetails = [];
        this.referrerDetail = {};
        this.referrerDetaildelete = {};
        this.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.DTReferrers.DirectTrustReferrers);
        this.selectedSpendPoolHigh = "";
        this.referrerDetail = {};
        this.referrerDetails.push(this.referrerDetail);
        this.defaultValues = this.data.referrerDetails;
      }

      _createClass(PersonalizationDialog, [{
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "getReferrerList",
        value: function getReferrerList() {
          var _this36 = this;

          this.loadingData = true;

          this._referrerservice.getReferrerList().subscribe(function (res) {
            _this36.DTReferrers.DirectTrustReferrers = res;
            _this36.loadingData = false;
            _this36.DTReferrers.TotalRecords = _this36.DTReferrers.DirectTrustReferrers.length || 0;
            _this36.DTReferrers.TotalPages = Math.ceil(_this36.DTReferrers.TotalRecords / _this36.DTReferrers.PageSize);
            _this36.DTReferrers.CurrentPage = 0;
            _this36.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this36.DTReferrers.DirectTrustReferrers.slice(0, _this36.DTReferrers.PageSize));
          }, function (err) {});
        }
      }, {
        key: "AddRowReferrerModal",
        value: function AddRowReferrerModal() {
          this.referrerDetail = {};
          this.defaultValues.push(this.referrerDetail); //this.data.referrerDetails = this.referrerDetails;

          this.defaultValues = this.defaultValues;
        }
      }, {
        key: "DeleteRowReferrerModal",
        value: function DeleteRowReferrerModal(index) {
          this.defaultValues.splice(index, 1);
        }
      }, {
        key: "saveDetails",
        value: function saveDetails() {
          var _this37 = this;

          this.loadingData = true; // var detailsToBeSent: IPersonalization = { TNumber: this.data.personalizationDetails.TNumber, PersonalizationDetails: this.dataSource.data }

          if (this.alloDataForm.valid) {
            this._referrerservice.saveReferrerDetails(this.defaultValues).subscribe(function (response) {
              _this37.loadingData = false;

              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this37.modalDialog, "", "Success", "Details saved successfully.", 0, false, 1, "500px", 0);

              _this37.dialogRef.close();

              _this37.getReferrerList();
            });
          } else {
            this.loadingData = false;
          }
        }
      }, {
        key: "updateDetails",
        value: function updateDetails() {
          var _this38 = this;

          if (this.alloDataForm.valid) {
            this.loadingData = true; // var detailsToBeSent: IPersonalization = { TNumber: this.data.personalizationDetails.TNumber, PersonalizationDetails: this.dataSource.data }

            this._referrerservice.updateReferrerDetails(this.defaultValues).subscribe(function (response) {
              _this38.loadingData = false;

              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this38.modalDialog, "", "Success", "Details saved successfully.", 0, false, 1, "500px", 0);

              _this38.dialogRef.close();

              _this38.getReferrerList();
            });
          } else {
            this.loadingData = false;
          }
        }
      }, {
        key: "resetDetails",
        value: function resetDetails() {//  this.data.personalizationDetails.PersonalizationDetails = JSON.parse(JSON.stringify(this.defaultValues.PersonalizationDetails));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// this.dataSource.sort = this.personalizeSort;
          // this._sharedService.getSpendPoolHigh(this.defaultValues.TNumber).subscribe(
          //     response => {
          //         this.spendPoolHighList = <IDropdown[]>response;
          //         this.selectedSpendPoolHigh = this.spendPoolHighList.filter(x => { return x.selected == true })[0].ID;
          //     }
          // )
        }
      }]);

      return PersonalizationDialog;
    }();

    PersonalizationDialog.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]
      }, {
        type: src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__["ReferralService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_modules_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      static: true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], PersonalizationDialog.prototype, "personalizeSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("alloDataForm", null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"])], PersonalizationDialog.prototype, "alloDataForm", void 0);
    PersonalizationDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'referrer-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./admin-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/emraddview/admin-dialog.component.html")).default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_10__["ReferralService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_modules_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], Object])], PersonalizationDialog);
    var ELEMENT_DATA = [{
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H'
    }, {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He'
    }, {
      position: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li'
    }, {
      position: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be'
    }, {
      position: 5,
      name: 'Boron',
      weight: 10.811,
      symbol: 'B'
    }, {
      position: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C'
    }, {
      position: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N'
    }, {
      position: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O'
    }, {
      position: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }];
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/incomingmessage/incomingmessage.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/incomingmessage/incomingmessage.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmrpageComponentIncomingmessageIncomingmessageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-tab-label {\n  font-size: 16px;\n  height: 30px !important;\n  min-width: 96px;\n  opacity: 1;\n  padding: 0px !important;\n  background-color: grey !important;\n}\n\n.referrercontainer {\n  /*height: 400px;*/\n  overflow: auto;\n  width: 100%;\n  border: 1px solid slategrey;\n}\n\n.summary-table {\n  background: white;\n  height: calc(100vh - 160px);\n  overflow: auto;\n  border: 1px solid #bfbdbd;\n}\n\n.summary-table .mat-header-cell {\n  min-width: 150px;\n}\n\n.summary-table .mat-toolbar {\n  margin-top: 150px;\n  background-color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.summary-table .mat-table thead {\n  background: none !important;\n}\n\n.referrer-dialog-container .mat-dialog-container {\n  padding: 0px;\n  overflow-x: hidden;\n  height: 200px;\n}\n\n.createreferrer {\n  padding-right: 100px;\n}\n\ntable {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\n.mat-row.hovered {\n  background: #C8C8C8;\n  color: white;\n  cursor: pointer !important;\n}\n\n.mat-row.highlighted {\n  background: #C8C8C8;\n  color: white;\n  cursor: pointer !important;\n}\n\ntd.mat-cell {\n  border-right-style: none;\n}\n\nth.mat-header-cell {\n  text-align: center;\n  background: #5dbcd2;\n}\n\n.mat-row.label-font-read {\n  font-weight: normal !important;\n}\n\n.mat-row.label-font-unread {\n  font-weight: bold !important;\n}\n\n.mat-row.read {\n  background: #C8C8C8;\n  font-weight: bold !important;\n}\n\n/* email*/\n\n:host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n}\n\n:host ::ng-deep .mat-tab-labels {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nmat-tab-group {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n:host ::ng-deep .mat-tab-body-wrapper {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nmat-tab-body {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n:host ::ng-deep mat-ink-bar {\n  display: none;\n}\n\n:host ::ng-deep .mat-tab-label:not(:first-child) {\n  margin: 0 0px 0px 0px !important;\n}\n\n:host ::ng-deep .mat-tab-label {\n  font-size: 16px;\n  height: 30px !important;\n  min-width: 160px;\n  opacity: 1;\n  padding: 0px !important;\n  /*background-color: grey;*/\n  border: solid;\n  /*border-bottom:none;*/\n}\n\n:host ::ng-deep .mat-tab-label-container {\n  border: solid;\n}\n\n:host ::ng-deep .mat-tab-body-wrapper {\n  margin-left: -10px;\n}\n\n.headbar {\n  margin-top: 0px;\n  background: #5dbcd2;\n  width: -23px;\n  height: 50px;\n  padding-top: 6px;\n  color: black !important;\n}\n\n.blackFont {\n  color: black !important;\n}\n\n.composeDiv {\n  /*height: 400px;*/\n  overflow: hidden;\n  width: 100%;\n  border: 1px solid slategrey;\n  padding: 5px;\n}\n\n.button-border-radius-zero {\n  border-radius: 0px;\n}\n\n.headerstyle {\n  font-size: larger;\n  font-weight: 300;\n}\n\n.list-group-item.active {\n  z-index: 2;\n  color: #fff !important;\n  background-color: #5dbcd2;\n  border-color: #5dbcd2;\n}\n\n.mat-input-element {\n  text-align: initial !important;\n  border-bottom: 2px solid #9a9494;\n}\n\n.OrangeFont {\n  color: #FB6E2C !important;\n}\n\n.WhiteFont {\n  color: white !important;\n}\n\n.listBackground {\n  background: #FB6E2C !important;\n  color: white !important;\n}\n\n.BlueFont {\n  color: #3f51b5 !important;\n}\n\n.attachment {\n  background: white;\n  border: solid 1px darkgrey;\n  width: 350px;\n  height: 48px;\n}\n\n.text-hidden {\n  display: block;\n  width: 300px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.textalign-left {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9pbmNvbWluZ21lc3NhZ2UvQzpcXERpcmVjdFRydXN0XFxDb2RlXFxUZWFtUmVoYWJcXENsaWVudEFwcC9zcmNcXGFwcFxcbW9kdWxlc1xcZW1ycGFnZVxcY29tcG9uZW50XFxpbmNvbWluZ21lc3NhZ2VcXGluY29taW5nbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9lbXJwYWdlL2NvbXBvbmVudC9pbmNvbWluZ21lc3NhZ2UvaW5jb21pbmdtZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0FDQ0o7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNESjs7QURHSTtFQUNJLGdCQUFBO0FDRFI7O0FESUk7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0ZSOztBRE1BO0VBQ0ksMkJBQUE7QUNISjs7QURNQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNISjs7QURNQTtFQUNJLG9CQUFBO0FDSEo7O0FETUE7RUFDSSxXQUFBO0FDSEo7O0FETUE7RUFDSSxTQUFBO0FDSEo7O0FETUE7RUFDSSxzQkFBQTtBQ0hKOztBRE1BO0VBQ0ksbUJBQUE7QUNISjs7QURNQTtFQUNJLHNCQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNISjs7QURNQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSEo7O0FETUE7RUFDSSxhQUFBO0FDSEo7O0FETUE7RUFDSSxZQUFBO0FDSEo7O0FES0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNGSjs7QURJQTtFQUNJLHdCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FER0E7RUFDSSw4QkFBQTtBQ0FKOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0VBQ0EsNEJBQUE7QUNFSjs7QURDQSxTQUFBOztBQUNBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUNJLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7VUFBQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNFSjs7QURDQTtFQUNJLG1CQUFBO1VBQUEsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0VKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBRENBO0VBQ0ksZ0NBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7QUNJSjs7QUREQTtFQUNJLGtCQUFBO0FDSUo7O0FEREE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNJSjs7QURGQTtFQUNJLHVCQUFBO0FDS0o7O0FESEE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7QUNPSjs7QURMQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNRSjs7QUROQTtFQUNJLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNTSjs7QURQQTtFQUNJLDhCQUFBO0VBQ0EsZ0NBQUE7QUNVSjs7QURSQTtFQUNJLHlCQUFBO0FDV0o7O0FEVEE7RUFDSSx1QkFBQTtBQ1lKOztBRFZBO0VBQ0ksOEJBQUE7RUFDQSx1QkFBQTtBQ2FKOztBRFhBO0VBQ0kseUJBQUE7QUNjSjs7QURUQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFZBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNhSjs7QURYQTtFQUNJLGdCQUFBO0FDY0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2VtcnBhZ2UvY29tcG9uZW50L2luY29taW5nbWVzc2FnZS9pbmNvbWluZ21lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogOTZweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4ucmVmZXJyZXJjb250YWluZXIge1xyXG4gICAgLypoZWlnaHQ6IDQwMHB4OyovXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2xhdGVncmV5O1xyXG59XHJcblxyXG4uc3VtbWFyeS10YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmRiZDtcclxuXHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtdG9vbGJhciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgIH1cclxufVxyXG5cclxuLnN1bW1hcnktdGFibGUgLm1hdC10YWJsZSB0aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZWZlcnJlci1kaWFsb2ctY29udGFpbmVyIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY3JlYXRlcmVmZXJyZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLm1hdC1yb3cuaG92ZXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzhDOEM4OyAvLyNhNmU0ZjM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1yb3cuaGlnaGxpZ2h0ZWQge1xyXG4gICAgYmFja2dyb3VuZDogI0M4QzhDODsgLy8jYTZlNGYzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxudGQubWF0LWNlbGwge1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG50aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzVkYmNkMjsvLyNGQjZFMkM7XHJcbn1cclxuLm1hdC1yb3cubGFiZWwtZm9udC1yZWFkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LXJvdy5sYWJlbC1mb250LXVucmVhZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtcm93LnJlYWQge1xyXG4gICAgYmFja2dyb3VuZDogI0M4QzhDODtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIGVtYWlsKi9cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWxzIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbm1hdC10YWItZ3JvdXAge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbm1hdC10YWItYm9keSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1pbmstYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW46IDAgMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OyovXHJcbiAgICBib3JkZXI6c29saWQ7XHJcbiAgICAvKmJvcmRlci1ib3R0b206bm9uZTsqL1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHhcclxufVxyXG5cclxuLmhlYWRiYXIge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzVkYmNkMjtcclxuICAgIHdpZHRoOiAtMjNweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG4uYmxhY2tGb250e1xyXG4gICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxufVxyXG4uY29tcG9zZURpdiB7XHJcbiAgICAvKmhlaWdodDogNDAwcHg7Ki9cclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2xhdGVncmV5O1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn1cclxuLmJ1dHRvbi1ib3JkZXItcmFkaXVzLXplcm8ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbi5oZWFkZXJzdHlsZXtcclxuICAgIGZvbnQtc2l6ZTpsYXJnZXI7XHJcbiAgICBmb250LXdlaWdodDozMDA7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiY2QyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWRiY2QyO1xyXG59XHJcbi5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzlhOTQ5NDtcclxufVxyXG4uT3JhbmdlRm9udCB7XHJcbiAgICBjb2xvcjogI0ZCNkUyQyAhaW1wb3J0YW50O1xyXG59XHJcbi5XaGl0ZUZvbnQge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3RCYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQ6ICNGQjZFMkMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5CbHVlRm9udCB7XHJcbiAgICBjb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbi5hdHRhY2htZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZGFya2dyZXk7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuLnRleHQtaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4udGV4dGFsaWduLWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4iLCIubWF0LXRhYi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogOTZweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbn1cblxuLnJlZmVycmVyY29udGFpbmVyIHtcbiAgLypoZWlnaHQ6IDQwMHB4OyovXG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgc2xhdGVncmV5O1xufVxuXG4uc3VtbWFyeS10YWJsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZGJkO1xufVxuLnN1bW1hcnktdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG4uc3VtbWFyeS10YWJsZSAubWF0LXRvb2xiYXIge1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3VtbWFyeS10YWJsZSAubWF0LXRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmVmZXJyZXItZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNyZWF0ZXJlZmVycmVyIHtcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5tYXQtcm93LmhvdmVyZWQge1xuICBiYWNrZ3JvdW5kOiAjQzhDOEM4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXJvdy5oaWdobGlnaHRlZCB7XG4gIGJhY2tncm91bmQ6ICNDOEM4Qzg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbnRkLm1hdC1jZWxsIHtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xufVxuXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM1ZGJjZDI7XG59XG5cbi5tYXQtcm93LmxhYmVsLWZvbnQtcmVhZCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLm1hdC1yb3cubGFiZWwtZm9udC11bnJlYWQge1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXJvdy5yZWFkIHtcbiAgYmFja2dyb3VuZDogI0M4QzhDODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn1cblxuLyogZW1haWwqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWxzIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxubWF0LXRhYi1ncm91cCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktd3JhcHBlciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxubWF0LXRhYi1ib2R5IHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbWF0LWluay1iYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWw6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW46IDAgMHB4IDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogZ3JleTsqL1xuICBib3JkZXI6IHNvbGlkO1xuICAvKmJvcmRlci1ib3R0b206bm9uZTsqL1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtY29udGFpbmVyIHtcbiAgYm9yZGVyOiBzb2xpZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktd3JhcHBlciB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLmhlYWRiYXIge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM1ZGJjZDI7XG4gIHdpZHRoOiAtMjNweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLmJsYWNrRm9udCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uY29tcG9zZURpdiB7XG4gIC8qaGVpZ2h0OiA0MDBweDsqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgc2xhdGVncmV5O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5idXR0b24tYm9yZGVyLXJhZGl1cy16ZXJvIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uaGVhZGVyc3R5bGUge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiY2QyO1xuICBib3JkZXItY29sb3I6ICM1ZGJjZDI7XG59XG5cbi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIHRleHQtYWxpZ246IGluaXRpYWwgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5YTk0OTQ7XG59XG5cbi5PcmFuZ2VGb250IHtcbiAgY29sb3I6ICNGQjZFMkMgIWltcG9ydGFudDtcbn1cblxuLldoaXRlRm9udCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubGlzdEJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjRkI2RTJDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uQmx1ZUZvbnQge1xuICBjb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50O1xufVxuXG4uYXR0YWNobWVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDFweCBkYXJrZ3JleTtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi50ZXh0LWhpZGRlbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGV4dGFsaWduLWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/emrpage/component/incomingmessage/incomingmessage.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/modules/emrpage/component/incomingmessage/incomingmessage.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: IncomingmessageComponent */

  /***/
  function srcAppModulesEmrpageComponentIncomingmessageIncomingmessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomingmessageComponent", function () {
      return IncomingmessageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/layout/services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/modal/ModalStaticClass */
    "./src/app/modules/shared/components/modal/ModalStaticClass.ts");
    /* harmony import */


    var src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/modules/emrpage/services/referral.service */
    "./src/app/modules/emrpage/services/referral.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_18___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_18__);

    var IncomingmessageComponent =
    /*#__PURE__*/
    function () {
      function IncomingmessageComponent(_headerService, _storageHelper, _sidebarService, modalDialog, _referrerservice, _navigate, datepipe) {
        var _this39 = this;

        _classCallCheck(this, IncomingmessageComponent);

        this._headerService = _headerService;
        this._storageHelper = _storageHelper;
        this._sidebarService = _sidebarService;
        this.modalDialog = modalDialog;
        this._referrerservice = _referrerservice;
        this._navigate = _navigate;
        this.datepipe = datepipe;
        this.displayedColumns = ['checkBox', 'From', 'To', 'Received', 'Subject', 'Delete'];
        this.deleteddisplayedColumns = ['From', 'To', 'Received', 'Subject', 'Delete'];
        this.DTincomingMessages = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.DTdeletedincomingMessages = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.DTincomingMessage = {};
        this.DTdeletedincomingMessage = {};
        this.noRecordsMessage = "";
        this.noDeletedRecordsMessage = "";
        this.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.DTincomingMessages.IncomingMessages);
        this.deletedmessageangularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.DTdeletedincomingMessages.IncomingMessages);
        this.pageSizeOptions = [10, 20, 30];
        this.loadingData = false;
        this.loggedInUserDetails = {};
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__["SelectionModel"](false, []);
        this.sentselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__["SelectionModel"](false, []);
        this.selectedMessageID = [];
        this.checkedMessages = {};
        this.isMailDivVisible = false;
        this.isSentDivVisible = false;
        this.isDeletedDivVisible = false;
        this.isComposeDivVisible = false;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["COMMA"]];
        this.fruitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        this.mails = [];
        this.allmails = [];
        this.ccCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        this.ccmails = [];
        this.ccallmails = [];
        this.isEdit = false;
        this.DTMessageSentList = {
          PageSize: 20,
          MaxPageSize: 30
        };
        this.DTMessageSent = {};
        this.DTMessageSentAttachment = {};
        this.DTMessageSentAttachmentlist = [];
        this.sentdisplayedColumns = ['To', 'Received', 'Subject'];
        this.noSentRecordsMessage = "";
        this.angularDataSourceSentMessage = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.DTMessageSentList.message);
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUploader"]({
          // url: URL,
          disableMultipart: false,
          autoUpload: true,
          method: 'post',
          itemAlias: 'attachment',
          allowedFileType: ['image', 'pdf', 'txt', 'xml', 'application']
        });
        this.filteredmails = this.fruitCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["map"])(function (fruit) {
          return fruit ? _this39._filter(fruit) : _this39.allmails.slice();
        }));
        this.filteredccmails = this.ccCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["map"])(function (cc) {
          return cc ? _this39._ccfilter(cc) : _this39.ccallmails.slice();
        }));
      }

      _createClass(IncomingmessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _a; //this.previousUrl = this._previousrouteservice.getPreviousUrl();


          var redirect = window.history.state.redirect;
          console.log('state ' + redirect);

          this._sidebarService.setActiveState("incomingmessage");

          this._sidebarService.editSidebarShowValue(true);

          if (this._storageHelper.getItem("loggedInUserDetails") != null) {
            this.loggedInUserDetails = this._storageHelper.getItem("loggedInUserDetails");
          }

          this.getIncomingMessageList();
          this.getDeletedIncomingMessageList();
          this.getSentMessageList();
          this.getUserEmails();

          if (redirect != undefined && ((_a = redirect) === null || _a === void 0 ? void 0 : _a.includes('readonly'))) {
            this.openDiv("Deleted");
          } else {
            this.openDiv("Inbox");
          }
        }
      }, {
        key: "getBase64",
        value: function getBase64(event) {
          var me = this;
          var file = event.target.files[0];
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function () {
            //me.modelvalue = reader.result;
            console.log("selected file " + reader.result);
          };

          reader.onerror = function (error) {
            console.log('Error: ', error);
          };
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var _this40 = this;

          var file = event[0]; //this.getBase64(event[0]);     

          this.DTMessageSent.Attachment = [];
          var fileCount = this.uploader.queue.length;

          if (fileCount > 0) {
            this.uploader.queue.forEach(function (val, i, array) {
              var fileReader = new FileReader();

              fileReader.onloadend = function (e) {
                var imageData = fileReader.result;
                var rawData = imageData.toString().split("base64,");
                var j = 0;

                if (rawData.length > 1 && j == 0) {
                  j = j + 1;
                  _this40.DTMessageSentAttachment.FileData = rawData[1];
                  _this40.DTMessageSentAttachment.FileName = val.file.name;

                  _this40.DTMessageSent.Attachment.push(_this40.DTMessageSentAttachment);

                  _this40.DTMessageSentAttachment = {};
                }
              }; //if (this.DTMessageSentAttachment && (Object.keys(this.DTMessageSentAttachment).length != 0)) {
              //    this.DTMessageSent.Attachment.push(this.DTMessageSentAttachment);
              //}


              fileReader.readAsDataURL(val._file);
            });
          } else {
            this.DTMessageSent.Attachment = [];
          }
        }
      }, {
        key: "getIncomingMessageList",
        value: function getIncomingMessageList() {
          var _this41 = this;

          this.loadingData = true;
          console.log(this.loggedInUserDetails);

          this._referrerservice.getIncomingMessageList(this.loggedInUserDetails.EmailId, this.loggedInUserDetails.Roles).subscribe(function (res) {
            _this41.DTincomingMessages.IncomingMessages = res;

            _this41.DTincomingMessages.IncomingMessages.forEach(function (x) {
              x.Received = new Date(_this41.datepipe.transform(x.Received, 'yyyy/MM/dd'));
              return x;
            });

            _this41.loadingData = false;
            _this41.DTincomingMessages.TotalRecords = _this41.DTincomingMessages.IncomingMessages.length || 0;
            _this41.DTincomingMessages.TotalPages = Math.ceil(_this41.DTincomingMessages.TotalRecords / _this41.DTincomingMessages.PageSize);
            _this41.DTincomingMessages.CurrentPage = 0;
            _this41.angularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this41.DTincomingMessages.IncomingMessages.slice(0, _this41.DTincomingMessages.PageSize));
            _this41.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__["SelectionModel"](false, []);

            if (_this41.DTincomingMessages.IncomingMessages.length <= 0) {
              _this41.noRecordsMessage = "No records found.";
            } else {
              _this41.noRecordsMessage = "";
            }

            _this41.unReadMessageCount = _this41.DTincomingMessages.IncomingMessages.filter(function (x) {
              return x.IsRead == false || x.IsRead == null;
            }).length;
          }, function (err) {});
        }
      }, {
        key: "getDeletedIncomingMessageList",
        value: function getDeletedIncomingMessageList() {
          var _this42 = this;

          this.loadingData = true;
          console.log(this.loggedInUserDetails);

          this._referrerservice.getDeletedIncomingMessageList(this.loggedInUserDetails.EmailId, this.loggedInUserDetails.Roles).subscribe(function (res) {
            _this42.DTdeletedincomingMessages.IncomingMessages = res;

            _this42.DTdeletedincomingMessages.IncomingMessages.forEach(function (x) {
              x.Received = new Date(_this42.datepipe.transform(x.Received, 'yyyy/MM/dd'));
              return x;
            });

            _this42.loadingData = false;
            _this42.DTdeletedincomingMessages.TotalRecords = _this42.DTdeletedincomingMessages.IncomingMessages.length || 0;
            _this42.DTdeletedincomingMessages.TotalPages = Math.ceil(_this42.DTdeletedincomingMessages.TotalRecords / _this42.DTdeletedincomingMessages.PageSize);
            _this42.DTdeletedincomingMessages.CurrentPage = 0;
            _this42.deletedmessageangularDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this42.DTdeletedincomingMessages.IncomingMessages.slice(0, _this42.DTdeletedincomingMessages.PageSize));
            _this42.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__["SelectionModel"](false, []);

            if (_this42.DTdeletedincomingMessages.IncomingMessages.length <= 0) {
              _this42.noDeletedRecordsMessage = "No records found.";
            } else {
              _this42.noDeletedRecordsMessage = "";
            }
          }, function (err) {});
        }
      }, {
        key: "getSentMessageList",
        value: function getSentMessageList() {
          var _this43 = this;

          this.loadingData = true;
          console.log(this.loggedInUserDetails);

          this._referrerservice.getUserEmailMessages(this.loggedInUserDetails.LoginName).subscribe(function (res) {
            _this43.DTMessageSentList.message = res;

            _this43.DTMessageSentList.message.forEach(function (x) {
              x.Sent = new Date(_this43.datepipe.transform(x.Sent, 'yyyy/MM/dd'));
              return x;
            });

            _this43.loadingData = false;
            _this43.DTMessageSentList.TotalRecords = _this43.DTMessageSentList.message.length || 0;
            _this43.DTMessageSentList.TotalPages = Math.ceil(_this43.DTMessageSentList.TotalRecords / _this43.DTMessageSentList.PageSize);
            _this43.DTMessageSentList.CurrentPage = 0;
            _this43.angularDataSourceSentMessage = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this43.DTMessageSentList.message.slice(0, _this43.DTMessageSentList.PageSize));
            _this43.sentselection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__["SelectionModel"](false, []);

            if (_this43.DTMessageSentList.message.length <= 0) {
              _this43.noSentRecordsMessage = "No records found.";
            } else {
              _this43.noSentRecordsMessage = "";
            }
          }, function (err) {});
        }
      }, {
        key: "getUserEmails",
        value: function getUserEmails() {
          var _this44 = this;

          this.loadingData = true;
          console.log(this.loggedInUserDetails);

          this._referrerservice.getUserEmails().subscribe(function (res) {
            _this44.allmails = res;
            _this44.ccallmails = res;
            _this44.loadingData = false;
          }, function (err) {});
        }
      }, {
        key: "clearComposeEmail",
        value: function clearComposeEmail() {
          this.DTMessageSent = {};
          this.mails = [];
          this.ccmails = [];
          this.isEdit = false;
          this.selectable = true;
          this.removable = true;
          this.DTMessageSent.Attachment = [];
          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUploader"]({
            // url: URL,
            disableMultipart: false,
            autoUpload: true,
            method: 'post',
            itemAlias: 'attachment',
            allowedFileType: ['image', 'pdf', 'txt', 'xml', 'application']
          });
        }
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var _this45 = this;

          console.log(this.uploader.queue);

          if (this.mails.length == 0) {
            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Error", "Please select recepient ", 0, false, 1, "500px", 1);
          } else if (this.DTMessageSent.Subject == '' || this.DTMessageSent.Subject == undefined) {
            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Error", "Please add subject ", 0, false, 1, "500px", 1);
          } else {
            this.loadingData = true;
            this.DTMessageSent.To = this.mails.join();
            this.DTMessageSent.Cc = this.ccmails.join();
            console.log("mail TO " + this.mails);
            this.DTMessageSent.From = this.loggedInUserDetails.LoginName;

            this._referrerservice.sendEmailMessage(this.DTMessageSent).subscribe(function (response) {
              _this45.loadingData = false;

              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this45.modalDialog, "", "Success", "Sent successfully.", 0, false, 1, "500px", 0);

              _this45.clearComposeEmail();

              _this45.getSentMessageList();

              _this45.openDiv("Inbox");
            }, function (err) {
              _this45.loadingData = false;

              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this45.modalDialog, "", "Error", "Unable to sent, please contact administrator.", 0, false, 1, "500px", 1);
            });
          }
        } //Paginator

      }, {
        key: "getPaginationData",
        value: function getPaginationData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTincomingMessages.CurrentPage = pageEvent.pageIndex;
            this.DTincomingMessages.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.DTincomingMessages.IncomingMessages.slice(this.DTincomingMessages.CurrentPage * this.DTincomingMessages.PageSize, (this.DTincomingMessages.CurrentPage + 1) * this.DTincomingMessages.PageSize + 1);
            this.angularDataSource.sort = this.sort;
          } else {
            this.angularDataSource.data = this.DTincomingMessages.IncomingMessages.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
          }
        }
      }, {
        key: "getDeletedMessagePaginationData",
        value: function getDeletedMessagePaginationData(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTdeletedincomingMessages.CurrentPage = pageEvent.pageIndex;
            this.DTdeletedincomingMessages.PageSize = pageEvent.pageSize;
            this.deletedmessageangularDataSource.data = this.DTdeletedincomingMessages.IncomingMessages.slice(this.DTdeletedincomingMessages.CurrentPage * this.DTdeletedincomingMessages.PageSize, (this.DTincomingMessages.CurrentPage + 1) * this.DTincomingMessages.PageSize + 1);
            this.deletedmessageangularDataSource.sort = this.sort;
          } else {
            this.deletedmessageangularDataSource.data = this.DTdeletedincomingMessages.IncomingMessages.slice(0, pageEvent.pageSize);
            this.deletedmessageangularDataSource.sort = this.sort;
          }
        }
      }, {
        key: "getPaginationDataSentMessage",
        value: function getPaginationDataSentMessage(pageEvent) {
          if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTMessageSentList.CurrentPage = pageEvent.pageIndex;
            this.DTMessageSentList.PageSize = pageEvent.pageSize;
            this.angularDataSourceSentMessage.data = this.DTMessageSentList.message.slice(this.DTMessageSentList.CurrentPage * this.DTMessageSentList.PageSize, (this.DTincomingMessages.CurrentPage + 1) * this.DTincomingMessages.PageSize + 1);
            this.angularDataSourceSentMessage.sort = this.sort;
          } else {
            this.angularDataSourceSentMessage.data = this.DTMessageSentList.message.slice(0, pageEvent.pageSize);
            this.angularDataSourceSentMessage.sort = this.sort;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "getMessageDetail",
        value: function getMessageDetail(row, action) {
          console.log('row' + row.IsRead);

          if (this.loggedInUserDetails.Roles.toLocaleLowerCase() == 'front desk' && action == 'edit') {
            this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.ID + '/edit'], {
              state: {
                redirect: this._navigate.url
              }
            });
          } else if (this.loggedInUserDetails.Roles.toLocaleLowerCase() == 'front desk' && action == 'readonly') {
            this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.ID + '/readonly'], {
              state: {
                redirect: this._navigate.url
              }
            });
          }
        }
      }, {
        key: "updateChecked",
        value: function updateChecked(id, event) {
          {
            console.log("id and event" + id + ":" + event.target.checked);

            if (event.target.checked) {
              this.selectedMessageID.push(id);
            } else {
              var index = this.selectedMessageID.indexOf(id, 0);

              if (index > -1) {
                this.selectedMessageID.splice(index, 1);
              }
            } //console.log('selected array' + this.selectedMessageID);

          }
        }
      }, {
        key: "UpdateReadUnReadMessage",
        value: function UpdateReadUnReadMessage(operation) {
          var _this46 = this;

          if (this.selectedMessageID.length > 0) {
            this.checkedMessages.incomingmessageIds = this.selectedMessageID;
            this.checkedMessages.operation = operation;
            this.loadingData = true;

            this._referrerservice.UpdateReadUnReadMessage(this.checkedMessages).subscribe(function (response) {
              _this46.loadingData = false;
              console.log('IsReadFlag Updated');

              _this46.getIncomingMessageList();

              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this46.modalDialog, "", "Success", "Message Flag updated successfully.", 0, false, 1, "500px", 0);
            }, function (err) {
              _this46.loadingData = false;

              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this46.modalDialog, "", "Error", "Unable to update Message Flag, please contact administrator.", 0, false, 1, "500px", 1);
            });
          } else {
            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Error", "Please select Messages to Read / Unread.", 0, false, 1, "500px", 1);
          }

          this.selectedMessageID = [];
        }
      }, {
        key: "UpdateReadFlag",
        value: function UpdateReadFlag(operation) {
          console.log('operation' + operation);
          console.log('selected ID' + this.selectedMessageID);
        }
      }, {
        key: "openDiv",
        value: function openDiv(cardName) {
          this.clearComposeEmail();

          if (cardName == "Inbox") {
            this.isMailDivVisible = true;
            this.isSentDivVisible = false;
            this.isComposeDivVisible = false;
            this.isDeletedDivVisible = false;
          } else if (cardName == "Sent") {
            this.isSentDivVisible = true;
            this.isMailDivVisible = false;
            this.isComposeDivVisible = false;
            this.isDeletedDivVisible = false;
          } else if (cardName == "Compose") {
            this.isSentDivVisible = false;
            this.isMailDivVisible = false;
            this.isComposeDivVisible = true;
            this.isDeletedDivVisible = false;
          } else if (cardName == "Deleted") {
            this.isSentDivVisible = false;
            this.isMailDivVisible = false;
            this.isComposeDivVisible = false;
            this.isDeletedDivVisible = true;
          } else {
            this.isMailDivVisible = true;
            this.isSentDivVisible = false;
            this.isComposeDivVisible = false;
            this.isDeletedDivVisible = false;
          }
        }
      }, {
        key: "CancelCompose",
        value: function CancelCompose() {
          var _this47 = this;

          if (this.isEdit) {
            this.isMailDivVisible = false;
            this.isSentDivVisible = true;
            this.isComposeDivVisible = false;
            this.isDeletedDivVisible = false;
            this.clearComposeEmail();
          } else {
            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(this.modalDialog, "", "Confirm", "Are you sure, you want to discard this message?", 2, false, 0, "500px", 3).subscribe(function (res) {
              if (res.result == 'yes') {
                _this47.isMailDivVisible = true;
                _this47.isSentDivVisible = false;
                _this47.isComposeDivVisible = false;

                _this47.clearComposeEmail();
              }
            });
          }
        }
      }, {
        key: "UpdateMessageInactive",
        value: function UpdateMessageInactive(id) {
          var _this48 = this;

          this.loadingData = true;

          this._referrerservice.UpdateMessageInactive(id).subscribe(function (response) {
            _this48.loadingData = false;

            _this48.getIncomingMessageList();

            _this48.getDeletedIncomingMessageList();

            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this48.modalDialog, "", "Success", "Message Deleted successfully.", 0, false, 1, "500px", 0);
          }, function (err) {
            _this48.loadingData = false;

            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this48.modalDialog, "", "Error", "Unable to Delete, please contact administrator.", 0, false, 1, "500px", 1);
          });
        }
      }, {
        key: "DeleteMessage",
        value: function DeleteMessage(id) {
          var _this49 = this;

          this.loadingData = true;

          this._referrerservice.DeleteMessage(id).subscribe(function (response) {
            _this49.loadingData = false;

            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this49.modalDialog, "", "Success", "Message Deleted successfully.", 0, false, 1, "500px", 0);

            _this49.getDeletedIncomingMessageList();
          }, function (err) {
            _this49.loadingData = false;

            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this49.modalDialog, "", "Error", "Unable to Delete, please contact administrator.", 0, false, 1, "500px", 1);
          });
        }
        /*Angular Email autocomplete*/

      }, {
        key: "add",
        value: function add(event) {
          var input = event.input;
          var value = event.value; // Add our fruit

          if ((value || '').trim()) {
            this.mails.push(value.trim());
          } // Reset the input value


          if (input) {
            input.value = '';
          }

          this.fruitCtrl.setValue(null);
        }
      }, {
        key: "remove",
        value: function remove(fruit) {
          var index = this.mails.indexOf(fruit);

          if (index >= 0) {
            this.mails.splice(index, 1);
          }
        }
      }, {
        key: "selected",
        value: function selected(event) {
          this.mails.push(event.option.viewValue);
          this.mailInput.nativeElement.value = '';
          this.fruitCtrl.setValue(null);
        }
      }, {
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value.toLowerCase();
          return this.allmails.filter(function (fruit) {
            return fruit.toLowerCase().indexOf(filterValue) === 0;
          });
        }
        /* CC Mail list */

      }, {
        key: "addcc",
        value: function addcc(event) {
          var input = event.input;
          var value = event.value; // Add our fruit

          if ((value || '').trim()) {
            this.ccmails.push(value.trim());
          } // Reset the input value


          if (input) {
            input.value = '';
          }

          this.ccCtrl.setValue(null);
        }
      }, {
        key: "removecc",
        value: function removecc(fruit) {
          var index = this.ccmails.indexOf(fruit);

          if (index >= 0) {
            this.ccmails.splice(index, 1);
          }
        }
      }, {
        key: "selectedcc",
        value: function selectedcc(event) {
          this.ccmails.push(event.option.viewValue);
          this.ccmailInput.nativeElement.value = '';
          this.ccCtrl.setValue(null);
        }
      }, {
        key: "_ccfilter",
        value: function _ccfilter(value) {
          var filterValue = value.toLowerCase();
          return this.ccallmails.filter(function (fruit) {
            return fruit.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "getSentMessageDetail",
        value: function getSentMessageDetail(SentMessage) {
          var _this50 = this;

          // console.log(SentMessageID);
          this._referrerservice.getDirectTrustSentMessageByID(SentMessage.ID).subscribe(function (res) {
            _this50.clearComposeEmail();

            _this50.DTMessageSent = res;

            if (_this50.DTMessageSent == null || _this50.DTMessageSent == undefined) {
              _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this50.modalDialog, "", "Error", "No record found.", 0, false, 1, "500px", 1);
            } else {
              _this50.OpenSentMessage();
            }

            _this50.loadingData = false;
          }, function (err) {
            _this50.loadingData = false;
          });
        }
      }, {
        key: "OpenSentMessage",
        value: function OpenSentMessage() {
          this.isSentDivVisible = false;
          this.isMailDivVisible = false;
          this.isComposeDivVisible = true;
          this.isDeletedDivVisible = false;
          this.isEdit = true;
          this.selectable = false;
          this.removable = false;
          this.mails = this.DTMessageSent.To.split(",");
        }
      }, {
        key: "downloadAttachment",
        value: function downloadAttachment(attachment) {
          var _this51 = this;

          this.loadingData = true;

          this._referrerservice.DownloadMailAttachmentFile(attachment.ID).subscribe(function (res) {
            var contentType = res.headers.get('content-type');
            var blob = new Blob([res.body], {
              type: contentType
            });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_18__["saveAs"])(blob, attachment.FileName); //var url = window.URL.createObjectURL(blob);
            //window.open(url);

            res;
            _this51.loadingData = false;
          }, function (err) {
            _this51.loadingData = false;

            _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_8__["ModalStaticClass"].show(_this51.modalDialog, "", "Error", "There was an error while downloading the report.", 0, false, 1, "500px");
          });
        }
      }]);

      return IncomingmessageComponent;
    }();

    IncomingmessageComponent.ctorParameters = function () {
      return [{
        type: src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"]
      }, {
        type: src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"]
      }, {
        type: src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_9__["ReferralService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mailInput', null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], IncomingmessageComponent.prototype, "mailInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ccmailInput', null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], IncomingmessageComponent.prototype, "ccmailInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto', null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocomplete"])], IncomingmessageComponent.prototype, "matAutocomplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ccauto', null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocomplete"])], IncomingmessageComponent.prototype, "ccmatAutocomplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])], IncomingmessageComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], IncomingmessageComponent.prototype, "sort", void 0);
    IncomingmessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-incomingmessage',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./incomingmessage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emrpage/component/incomingmessage/incomingmessage.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./incomingmessage.component.scss */
      "./src/app/modules/emrpage/component/incomingmessage/incomingmessage.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"], src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"], src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_modules_emrpage_services_referral_service__WEBPACK_IMPORTED_MODULE_9__["ReferralService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]])], IncomingmessageComponent);
    /***/
  },

  /***/
  "./src/app/modules/emrpage/emrpage-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/emrpage/emrpage-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: EMRPageRoutingModule */

  /***/
  function srcAppModulesEmrpageEmrpageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EMRPageRoutingModule", function () {
      return EMRPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_emraddview_emraddview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component/emraddview/emraddview.component */
    "./src/app/modules/emrpage/component/emraddview/emraddview.component.ts");
    /* harmony import */


    var _component_incomingmessage_incomingmessage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/incomingmessage/incomingmessage.component */
    "./src/app/modules/emrpage/component/incomingmessage/incomingmessage.component.ts");
    /* harmony import */


    var _component_dt_patient_referral_wip_dt_patient_referral_wip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/dt-patient-referral-wip/dt-patient-referral-wip.component */
    "./src/app/modules/emrpage/component/dt-patient-referral-wip/dt-patient-referral-wip.component.ts");
    /* harmony import */


    var _component_dtpoc_not_found_dtpoc_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/dtpoc-not-found/dtpoc-not-found.component */
    "./src/app/modules/emrpage/component/dtpoc-not-found/dtpoc-not-found.component.ts");
    /* harmony import */


    var _component_dt_patient_referral_processed_dt_patient_referral_processed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/dt-patient-referral-processed/dt-patient-referral-processed.component */
    "./src/app/modules/emrpage/component/dt-patient-referral-processed/dt-patient-referral-processed.component.ts");
    /* harmony import */


    var _component_dtincoming_message_detail_dtincoming_message_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/dtincoming-message-detail/dtincoming-message-detail.component */
    "./src/app/modules/emrpage/component/dtincoming-message-detail/dtincoming-message-detail.component.ts");
    /* harmony import */


    var _component_dt_clinic_user_mapping_dt_clinic_user_mapping_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component/dt-clinic-user-mapping/dt-clinic-user-mapping.component */
    "./src/app/modules/emrpage/component/dt-clinic-user-mapping/dt-clinic-user-mapping.component.ts");
    /* harmony import */


    var _component_dt_sent_poc_dt_sent_poc_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./component/dt-sent-poc/dt-sent-poc.component */
    "./src/app/modules/emrpage/component/dt-sent-poc/dt-sent-poc.component.ts");
    /* harmony import */


    var _component_dt_plan_care_processed_dt_plan_care_processed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./component/dt-plan-care-processed/dt-plan-care-processed.component */
    "./src/app/modules/emrpage/component/dt-plan-care-processed/dt-plan-care-processed.component.ts");

    var routes = [{
      path: 'referrer',
      component: _component_emraddview_emraddview_component__WEBPACK_IMPORTED_MODULE_3__["EMRaddviewComponent"]
    }, {
      path: 'incomingmessage',
      component: _component_incomingmessage_incomingmessage_component__WEBPACK_IMPORTED_MODULE_4__["IncomingmessageComponent"]
    }, {
      path: 'incomingmessagedetail/:id/:action',
      component: _component_dtincoming_message_detail_dtincoming_message_detail_component__WEBPACK_IMPORTED_MODULE_8__["DTIncomingMessageDetailComponent"]
    }, {
      path: 'wipmessage',
      component: _component_dt_patient_referral_wip_dt_patient_referral_wip_component__WEBPACK_IMPORTED_MODULE_5__["DtPatientReferralWIPComponent"]
    }, {
      path: 'dtpocnotfoundmessage',
      component: _component_dtpoc_not_found_dtpoc_not_found_component__WEBPACK_IMPORTED_MODULE_6__["DTPocNotFoundComponent"]
    }, {
      path: 'processedmessages',
      component: _component_dt_patient_referral_processed_dt_patient_referral_processed_component__WEBPACK_IMPORTED_MODULE_7__["DtPatientReferralProcessedComponent"]
    }, {
      path: 'sentPocs',
      component: _component_dt_sent_poc_dt_sent_poc_component__WEBPACK_IMPORTED_MODULE_10__["DtSentPocComponent"]
    }, {
      path: 'ProcessedPocs',
      component: _component_dt_plan_care_processed_dt_plan_care_processed_component__WEBPACK_IMPORTED_MODULE_11__["DtPlanCareProcessedComponent"]
    }, {
      path: 'clinicmapping',
      component: _component_dt_clinic_user_mapping_dt_clinic_user_mapping_component__WEBPACK_IMPORTED_MODULE_9__["DtClinicUserMappingComponent"]
    }, {
      path: '',
      component: _component_emraddview_emraddview_component__WEBPACK_IMPORTED_MODULE_3__["EMRaddviewComponent"]
    }];

    var EMRPageRoutingModule = function EMRPageRoutingModule() {
      _classCallCheck(this, EMRPageRoutingModule);
    };

    EMRPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EMRPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/emrpage/emrpage.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/emrpage/emrpage.module.ts ***!
    \***************************************************/

  /*! exports provided: getHighlightLanguages, EMRPageModule */

  /***/
  function srcAppModulesEmrpageEmrpageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getHighlightLanguages", function () {
      return getHighlightLanguages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EMRPageModule", function () {
      return EMRPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _emrpage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./emrpage-routing.module */
    "./src/app/modules/emrpage/emrpage-routing.module.ts");
    /* harmony import */


    var _component_emraddview_emraddview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/emraddview/emraddview.component */
    "./src/app/modules/emrpage/component/emraddview/emraddview.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _services_referral_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/referral.service */
    "./src/app/modules/emrpage/services/referral.service.ts");
    /* harmony import */


    var _component_incomingmessage_incomingmessage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/incomingmessage/incomingmessage.component */
    "./src/app/modules/emrpage/component/incomingmessage/incomingmessage.component.ts");
    /* harmony import */


    var _component_dt_patient_referral_wip_dt_patient_referral_wip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/dt-patient-referral-wip/dt-patient-referral-wip.component */
    "./src/app/modules/emrpage/component/dt-patient-referral-wip/dt-patient-referral-wip.component.ts");
    /* harmony import */


    var _component_dtpoc_not_found_dtpoc_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component/dtpoc-not-found/dtpoc-not-found.component */
    "./src/app/modules/emrpage/component/dtpoc-not-found/dtpoc-not-found.component.ts");
    /* harmony import */


    var _component_dt_patient_referral_processed_dt_patient_referral_processed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./component/dt-patient-referral-processed/dt-patient-referral-processed.component */
    "./src/app/modules/emrpage/component/dt-patient-referral-processed/dt-patient-referral-processed.component.ts");
    /* harmony import */


    var _component_dtincoming_message_detail_dtincoming_message_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./component/dtincoming-message-detail/dtincoming-message-detail.component */
    "./src/app/modules/emrpage/component/dtincoming-message-detail/dtincoming-message-detail.component.ts");
    /* harmony import */


    var _component_dt_clinic_user_mapping_dt_clinic_user_mapping_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./component/dt-clinic-user-mapping/dt-clinic-user-mapping.component */
    "./src/app/modules/emrpage/component/dt-clinic-user-mapping/dt-clinic-user-mapping.component.ts");
    /* harmony import */


    var angular_archwizard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular-archwizard */
    "./node_modules/angular-archwizard/fesm2015/angular-archwizard.js");
    /* harmony import */


    var _component_dt_sent_poc_dt_sent_poc_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./component/dt-sent-poc/dt-sent-poc.component */
    "./src/app/modules/emrpage/component/dt-sent-poc/dt-sent-poc.component.ts");
    /* harmony import */


    var _component_dt_plan_care_processed_dt_plan_care_processed_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./component/dt-plan-care-processed/dt-plan-care-processed.component */
    "./src/app/modules/emrpage/component/dt-plan-care-processed/dt-plan-care-processed.component.ts");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");

    function getHighlightLanguages() {
      return {
        //typescript: () => import('highlight.js/lib/languages/typescript'),
        //css: () => import('highlight.js/lib/languages/css'),
        xml: function xml() {
          return __webpack_require__.e(
          /*! import() | highlight-js-lib-languages-xml */
          "common").then(__webpack_require__.t.bind(null,
          /*! highlight.js/lib/languages/xml */
          "./node_modules/highlight.js/lib/languages/xml.js", 7));
        }
      };
    }

    var EMRPageModule = function EMRPageModule() {
      _classCallCheck(this, EMRPageModule);
    };

    EMRPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_emraddview_emraddview_component__WEBPACK_IMPORTED_MODULE_4__["EMRaddviewComponent"], _component_emraddview_emraddview_component__WEBPACK_IMPORTED_MODULE_4__["PersonalizationDialog"], _component_incomingmessage_incomingmessage_component__WEBPACK_IMPORTED_MODULE_7__["IncomingmessageComponent"], _component_dt_patient_referral_wip_dt_patient_referral_wip_component__WEBPACK_IMPORTED_MODULE_8__["DtPatientReferralWIPComponent"], _component_dt_sent_poc_dt_sent_poc_component__WEBPACK_IMPORTED_MODULE_14__["DtSentPocComponent"], _component_dt_plan_care_processed_dt_plan_care_processed_component__WEBPACK_IMPORTED_MODULE_15__["DtPlanCareProcessedComponent"], _component_dtpoc_not_found_dtpoc_not_found_component__WEBPACK_IMPORTED_MODULE_9__["DTPocNotFoundComponent"], _component_dt_patient_referral_processed_dt_patient_referral_processed_component__WEBPACK_IMPORTED_MODULE_10__["DtPatientReferralProcessedComponent"], _component_dtincoming_message_detail_dtincoming_message_detail_component__WEBPACK_IMPORTED_MODULE_11__["DTIncomingMessageDetailComponent"], _component_dt_clinic_user_mapping_dt_clinic_user_mapping_component__WEBPACK_IMPORTED_MODULE_12__["DtClinicUserMappingComponent"], _component_dtincoming_message_detail_dtincoming_message_detail_component__WEBPACK_IMPORTED_MODULE_11__["XMLViewDialog"], _component_dtincoming_message_detail_dtincoming_message_detail_component__WEBPACK_IMPORTED_MODULE_11__["PatientDialog"], _component_dtincoming_message_detail_dtincoming_message_detail_component__WEBPACK_IMPORTED_MODULE_11__["ReferrerDialog"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _emrpage_routing_module__WEBPACK_IMPORTED_MODULE_3__["EMRPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], angular_archwizard__WEBPACK_IMPORTED_MODULE_13__["ArchwizardModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_17__["HighlightModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploadModule"]],
      entryComponents: [_component_emraddview_emraddview_component__WEBPACK_IMPORTED_MODULE_4__["PersonalizationDialog"], _component_dtincoming_message_detail_dtincoming_message_detail_component__WEBPACK_IMPORTED_MODULE_11__["XMLViewDialog"], _component_dtincoming_message_detail_dtincoming_message_detail_component__WEBPACK_IMPORTED_MODULE_11__["PatientDialog"], _component_dtincoming_message_detail_dtincoming_message_detail_component__WEBPACK_IMPORTED_MODULE_11__["ReferrerDialog"]],
      providers: [_services_referral_service__WEBPACK_IMPORTED_MODULE_6__["ReferralService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], {
        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_17__["HIGHLIGHT_OPTIONS"],
        useValue: {
          lineNumbers: true
        }
      }],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })], EMRPageModule);
    /***/
  },

  /***/
  "./src/app/modules/emrpage/services/referral.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modules/emrpage/services/referral.service.ts ***!
    \**************************************************************/

  /*! exports provided: ReferralService */

  /***/
  function srcAppModulesEmrpageServicesReferralServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferralService", function () {
      return ReferralService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/services/api.service */
    "./src/app/core/services/api.service.ts");

    var ReferralService =
    /*#__PURE__*/
    function () {
      function ReferralService(_apiService) {
        _classCallCheck(this, ReferralService);

        this._apiService = _apiService;
      }

      _createClass(ReferralService, [{
        key: "getReferrerList",
        value: function getReferrerList() {
          //return this._apiService.getDataWithParams("FIGMasterData/GetVersionDropdown", {
          //    tNumber: tNumber,
          //    userRole: userRole
          //});
          return this._apiService.getData("DirectTrustReferrerList");
        }
      }, {
        key: "saveReferrerDetails",
        value: function saveReferrerDetails(referrerDetails) {
          return this._apiService.postData("CreateReferrer", referrerDetails);
        }
      }, {
        key: "processIncomingMesssage",
        value: function processIncomingMesssage(processdata) {
          return this._apiService.postData("ProcessIncomingMessage", processdata);
        }
      }, {
        key: "getPOCList",
        value: function getPOCList(patientid, operation) {
          return this._apiService.getDataWithParams("PatientPOCs", {
            patientid: patientid,
            operation: operation
          });
        }
      }, {
        key: "ProcessPOC",
        value: function ProcessPOC(patientid, operation, InComingMessageID, noteId, Filename, username, attachmentID) {
          return this._apiService.getDataWithParams("SavePOC", {
            patientId: patientid,
            operation: operation,
            InComingMessageID: InComingMessageID,
            noteId: noteId,
            Filename: Filename,
            username: username,
            attachmentID: attachmentID
          });
        }
      }, {
        key: "SaveClinicMapping",
        value: function SaveClinicMapping(clinicmapping) {
          return this._apiService.postData("SaveDTClinicMapping", clinicmapping);
        }
      }, {
        key: "updateReferrerDetails",
        value: function updateReferrerDetails(referrerDetails) {
          return this._apiService.postData("UpdateReferrer", referrerDetails);
        }
      }, {
        key: "getReferrerDetail",
        value: function getReferrerDetail(instituteId) {
          return this._apiService.getDataWithParams("DirectTrustReferrerDetail", {
            instituteId: instituteId
          });
        }
      }, {
        key: "getDirectTrustIncomingMessageByID",
        value: function getDirectTrustIncomingMessageByID(incomingmessgeid) {
          return this._apiService.getDataWithParams("DirectTrustIncomingMessageByID", {
            incomingmessageid: incomingmessgeid
          });
        }
      }, {
        key: "deleteReferrerDetails",
        value: function deleteReferrerDetails(referrerDetails) {
          return this._apiService.getDataWithParams("DeleteReferrer", {
            refID: referrerDetails.RefID,
            refEmailID: referrerDetails.RefEmailID
          });
        }
      }, {
        key: "getIncomingMessageList",
        value: function getIncomingMessageList(username, role) {
          return this._apiService.getDataWithParams("DirectTrustIncomingMessages", {
            username: username,
            role: role
          });
        }
      }, {
        key: "getInProgressPatients",
        value: function getInProgressPatients() {
          return this._apiService.getData("InProgressPatients");
        }
      }, {
        key: "getClinicMappings",
        value: function getClinicMappings() {
          return this._apiService.getData("DTClinicMapping");
        }
      }, {
        key: "getClinics",
        value: function getClinics() {
          return this._apiService.getData("DTClinics");
        } //CreatePatient(patientId: number): Observable<boolean> {
        //    return this._apiService.getDataWithParams("CreatePatient", {
        //        patientId: patientId
        //    });
        //}
        //RejectPatient(patientId: number): Observable<boolean> {
        //    return this._apiService.getDataWithParams("RejectPatient", {
        //        patientId: patientId
        //    });
        //}
        //ImportPatient(patientId: number): Observable<boolean> {
        //    return this._apiService.getDataWithParams("ImportPatient", {
        //        patientId: patientId
        //    });
        //}

      }, {
        key: "getDTPOCNotFoundMessageList",
        value: function getDTPOCNotFoundMessageList() {
          return this._apiService.getData("DirectTrustPOCNotFoundMessages");
        }
      }, {
        key: "getDTProcessedPatientMessageList",
        value: function getDTProcessedPatientMessageList() {
          return this._apiService.getData("DTProcessedPatients");
        }
      }, {
        key: "getDTProcessedtMessageList",
        value: function getDTProcessedtMessageList(username) {
          //return this._apiService.getData("ProcessedMesages");
          return this._apiService.getDataWithParams("ProcessedMesages", {
            username: username
          });
        }
      }, {
        key: "getSentPOCList",
        value: function getSentPOCList(username) {
          //return this._apiService.getData("POCSent");
          return this._apiService.getDataWithParams("POCSent", {
            username: username
          });
        }
      }, {
        key: "getPocs",
        value: function getPocs(username) {
          // return this._apiService.getData("ProcessedPOC");
          return this._apiService.getDataWithParams("ProcessedPOC", {
            username: username
          });
        }
      }, {
        key: "AcceptPatient",
        value: function AcceptPatient(acceptpatient) {
          return this._apiService.getDataWithParams("CreatePatient", {
            incommingMsgID: acceptpatient.InincomingmessageID,
            userID: acceptpatient.InUserID,
            status: 'Accepted',
            attachmentID: acceptpatient.AttachmentID
          });
        }
      }, {
        key: "GetRehabReferrerList",
        value: function GetRehabReferrerList(acceptpatient) {
          return this._apiService.getDataWithParams("CheckReferrerExist", {
            incommingMsgID: acceptpatient.InincomingmessageID,
            userID: acceptpatient.InUserID,
            status: 'Created',
            attachmentID: acceptpatient.AttachmentID
          });
        }
      }, {
        key: "CreatePatient",
        value: function CreatePatient(acceptpatient) {
          return this._apiService.getDataWithParams("CreatePatient", {
            incommingMsgID: acceptpatient.InincomingmessageID,
            userID: acceptpatient.InUserID,
            status: 'Created',
            attachmentID: acceptpatient.AttachmentID,
            ReferrerID: acceptpatient.ReferrerID
          });
        }
      }, {
        key: "ImportPatient",
        value: function ImportPatient(acceptpatient) {
          return this._apiService.getDataWithParams("ImportPatient", {
            patientID: acceptpatient.InpatientID,
            incommingMsgID: acceptpatient.InincomingmessageID,
            userID: acceptpatient.InUserID,
            status: 'Imported',
            attachmentID: acceptpatient.AttachmentID
          });
        }
      }, {
        key: "RejectPatient",
        value: function RejectPatient(rejectpatient) {
          return this._apiService.getDataWithParams("RejectPatient", {
            patientID: rejectpatient.InpatientID,
            incommingMsgID: rejectpatient.InincomingmessageID,
            userID: rejectpatient.InUserID,
            attachmentID: rejectpatient.AttachmentID
          });
        }
      }, {
        key: "RemoveMapping",
        value: function RemoveMapping(clincno) {
          return this._apiService.getDataWithParams("DeleteDTClinicMapping", {
            ClinicNo: clincno
          });
        }
      }, {
        key: "DownloadPOCFile",
        value: function DownloadPOCFile(Note_ID) {
          return this._apiService.getBlob("DownloadPOCFile", Note_ID);
        }
      }, {
        key: "UpdateMessageReadFlag",
        value: function UpdateMessageReadFlag(incomingMessageId) {
          return this._apiService.postData("UpdateMessageReadFlag", incomingMessageId);
        }
      }, {
        key: "UpdateReadUnReadMessage",
        value: function UpdateReadUnReadMessage(checkedMessages) {
          return this._apiService.postData("UpdateMessageReadUnReadFlag", checkedMessages);
        }
      }, {
        key: "unprocessReferral",
        value: function unprocessReferral(ID) {
          // return this._apiService.getData("ProcessedPOC");
          return this._apiService.getDataWithParams("UnProcessReferralMessage", {
            processedID: ID
          });
        }
      }, {
        key: "getUserEmails",
        value: function getUserEmails() {
          return this._apiService.getData("DTUserEmails");
        }
      }, {
        key: "getUserEmailMessages",
        value: function getUserEmailMessages(from) {
          return this._apiService.getDataWithParams("DTUserEmailMessages", {
            fromId: from
          });
        }
      }, {
        key: "sendEmailMessage",
        value: function sendEmailMessage(message) {
          return this._apiService.postData("SaveDTMessageSent", message);
        }
      }, {
        key: "getDirectTrustSentMessageByID",
        value: function getDirectTrustSentMessageByID(sentmessageid) {
          return this._apiService.getDataWithParams("DirectTrustMessageSentByID", {
            sentmessageid: sentmessageid
          });
        }
      }, {
        key: "DownloadMailAttachmentFile",
        value: function DownloadMailAttachmentFile(attachmentID) {
          return this._apiService.getBlob("DownloadMailAttachmentFile", attachmentID);
        }
      }, {
        key: "DeleteMessage",
        value: function DeleteMessage(ID) {
          return this._apiService.getDataWithParams("DeleteMessage", {
            ID: ID
          });
        }
      }, {
        key: "UpdateMessageInactive",
        value: function UpdateMessageInactive(ID) {
          return this._apiService.getDataWithParams("UpdateMessageInActive", {
            ID: ID
          });
        }
      }, {
        key: "getDeletedIncomingMessageList",
        value: function getDeletedIncomingMessageList(username, role) {
          return this._apiService.getDataWithParams("DirectTrustDeletedIncomingMessages", {
            username: username,
            role: role
          });
        }
      }, {
        key: "getIncomingMessageOperation",
        value: function getIncomingMessageOperation(refID, operation) {
          return this._apiService.getDataWithParams("DirectTrustIncomingMessageByOperation", {
            incomingmessageid: refID,
            operation: operation
          });
        }
      }]);

      return ReferralService;
    }();

    ReferralService.ctorParameters = function () {
      return [{
        type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    ReferralService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], ReferralService);
    /***/
  }
}]);
//# sourceMappingURL=modules-emrpage-emrpage-module-es5.js.map