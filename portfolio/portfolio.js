"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Error = _interopRequireDefault(require("../../global/Error"));

var _Rest = _interopRequireDefault(require("../../global/Rest"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var Portfolio = _express["default"].Router();

Portfolio.get('/timeline', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _fs["default"].readFile(_path["default"].join(__dirname, './portfolio/timeline.json'), 'utf8', function (err, data) {
              if (err) {
                _Rest["default"].SendErrorInternalServer(res, "Missing Timeline");

                return;
              }

              _Rest["default"].SendSuccess(res, _Error["default"].SuccessError(data));
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
Portfolio.get('/projects', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _fs["default"].readFile(_path["default"].join(__dirname, './portfolio/projects.json'), 'utf8', function (err, data) {
              if (err) {
                _Rest["default"].SendErrorInternalServer(res, "Missing Projects File");

                return;
              }

              _Rest["default"].SendSuccess(res, _Error["default"].SuccessError(data));
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
Portfolio.get('/pic/:id', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res.sendFile(_path["default"].join(__dirname, './portfolio/' + req.params.id + '.png'));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
Portfolio.get('/logo', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res.sendFile(_path["default"].join(__dirname, './portfolio/Logo.svg'));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}());
var _default = Portfolio;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92MS9wb3J0Zm9saW8vcG9ydGZvbGlvLnRzIl0sIm5hbWVzIjpbIlBvcnRmb2xpbyIsImV4cHJlc3MiLCJSb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZnMiLCJyZWFkRmlsZSIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwiZXJyIiwiZGF0YSIsInJlc3QiLCJTZW5kRXJyb3JJbnRlcm5hbFNlcnZlciIsIlNlbmRTdWNjZXNzIiwiRXJyb3IiLCJTdWNjZXNzRXJyb3IiLCJzZW5kRmlsZSIsInBhcmFtcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvQkFBUUMsTUFBUixFQUFsQjs7QUFFQUYsU0FBUyxDQUFDRyxHQUFWLENBQWMsV0FBZDtBQUFBLDJGQUEyQixpQkFBTUMsR0FBTixFQUFXQyxHQUFYLEVBQWdCQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXZCQywyQkFBR0MsUUFBSCxDQUFZQyxpQkFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQW9CLDJCQUFwQixDQUFaLEVBQThELE1BQTlELEVBQXNFLFVBQVVDLEdBQVYsRUFBY0MsSUFBZCxFQUFvQjtBQUN0RixrQkFBSUQsR0FBSixFQUFTO0FBQ0xFLGlDQUFLQyx1QkFBTCxDQUE2QlYsR0FBN0IsRUFBa0Msa0JBQWxDOztBQUNBO0FBQ0g7O0FBQ0RTLCtCQUFLRSxXQUFMLENBQWlCWCxHQUFqQixFQUFzQlksa0JBQU1DLFlBQU4sQ0FBbUJMLElBQW5CLENBQXRCO0FBQ0QsYUFOSDs7QUFGdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQWIsU0FBUyxDQUFDRyxHQUFWLENBQWMsV0FBZDtBQUFBLDRGQUEyQixrQkFBTUMsR0FBTixFQUFXQyxHQUFYLEVBQWdCQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXZCQywyQkFBR0MsUUFBSCxDQUFZQyxpQkFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQW9CLDJCQUFwQixDQUFaLEVBQThELE1BQTlELEVBQXNFLFVBQVVDLEdBQVYsRUFBY0MsSUFBZCxFQUFvQjtBQUN0RixrQkFBSUQsR0FBSixFQUFTO0FBQ0xFLGlDQUFLQyx1QkFBTCxDQUE2QlYsR0FBN0IsRUFBa0MsdUJBQWxDOztBQUNBO0FBQ0g7O0FBQ0RTLCtCQUFLRSxXQUFMLENBQWlCWCxHQUFqQixFQUFzQlksa0JBQU1DLFlBQU4sQ0FBbUJMLElBQW5CLENBQXRCO0FBQ0QsYUFOSDs7QUFGdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQWIsU0FBUyxDQUFDRyxHQUFWLENBQWMsVUFBZDtBQUFBLDRGQUEwQixrQkFBTUMsR0FBTixFQUFXQyxHQUFYLEVBQWdCQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3RCRCxZQUFBQSxHQUFHLENBQUNjLFFBQUosQ0FBYVYsaUJBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFvQixpQkFBaUJQLEdBQUcsQ0FBQ2dCLE1BQUosQ0FBV0MsRUFBNUIsR0FBaUMsTUFBckQsQ0FBYjs7QUFEc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQXJCLFNBQVMsQ0FBQ0csR0FBVixDQUFjLE9BQWQ7QUFBQSw0RkFBdUIsa0JBQU1DLEdBQU4sRUFBV0MsR0FBWCxFQUFnQkMsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkQsWUFBQUEsR0FBRyxDQUFDYyxRQUFKLENBQWFWLGlCQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBb0Isc0JBQXBCLENBQWI7O0FBRG1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBO2VBSWVYLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXJyb3IgZnJvbSAnQEdsb2JhbC9FcnJvcidcbmltcG9ydCByZXN0IGZyb20gJ0BHbG9iYWwvUmVzdCdcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5jb25zdCBQb3J0Zm9saW8gPSBleHByZXNzLlJvdXRlcigpXG5cblBvcnRmb2xpby5nZXQoJy90aW1lbGluZScsIGFzeW5jKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgXG4gICAgZnMucmVhZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwnLi9wb3J0Zm9saW8vdGltZWxpbmUuanNvbicpLCAndXRmOCcsIGZ1bmN0aW9uIChlcnIsZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXN0LlNlbmRFcnJvckludGVybmFsU2VydmVyKHJlcywgXCJNaXNzaW5nIFRpbWVsaW5lXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3QuU2VuZFN1Y2Nlc3MocmVzLCBFcnJvci5TdWNjZXNzRXJyb3IoZGF0YSkpXG4gICAgICB9KTtcbn0pXG5cblBvcnRmb2xpby5nZXQoJy9wcm9qZWN0cycsIGFzeW5jKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgXG4gICAgZnMucmVhZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwnLi9wb3J0Zm9saW8vcHJvamVjdHMuanNvbicpLCAndXRmOCcsIGZ1bmN0aW9uIChlcnIsZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXN0LlNlbmRFcnJvckludGVybmFsU2VydmVyKHJlcywgXCJNaXNzaW5nIFByb2plY3RzIEZpbGVcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdC5TZW5kU3VjY2VzcyhyZXMsIEVycm9yLlN1Y2Nlc3NFcnJvcihkYXRhKSlcbiAgICAgIH0pO1xufSlcblxuUG9ydGZvbGlvLmdldCgnL3BpYy86aWQnLCBhc3luYyhyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCcuL3BvcnRmb2xpby8nICsgcmVxLnBhcmFtcy5pZCArICcucG5nJykpXG59KVxuXG5Qb3J0Zm9saW8uZ2V0KCcvbG9nbycsIGFzeW5jKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsJy4vcG9ydGZvbGlvL0xvZ28uc3ZnJykpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW87Il19