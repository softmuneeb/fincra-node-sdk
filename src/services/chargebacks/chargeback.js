"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ChargeBacks = void 0;
var api_1 = require("../../api");
var error_base_1 = require("../../utils/errors/error.base");
/**
 * The chargeback module for handling the chargeback related operations.
 * @class Chargebacks
 * @extends FincraCore
 */
var ChargeBacks = /** @class */ (function (_super) {
    __extends(ChargeBacks, _super);
    function ChargeBacks(publicKey, secretKey) {
        return _super.call(this, publicKey, secretKey) || this;
    }
    /**
     * It lists all chargebacks for a business
     * @param {string} id - The id of the business you want to get the chargebacks for.
     * @returns The response.data is being returned.
     */
    ChargeBacks.prototype.listChargeBacks = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        request = this.getBaseUrl();
                        return [4 /*yield*/, request.get("/chargebacks?business=".concat(id))];
                    case 1:
                        response = _a.sent();
                        console.log(response.data);
                        return [2 /*return*/, response.data];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1.response);
                        throw new error_base_1.BaseError({ message: error_1.response.data });
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This function accepts a chargeback
     * @param {AcceptChargeBackDto} data - AcceptChargeBackDto
     * @returns The response is the chargeback object with the status changed to accepted.
     */
    ChargeBacks.prototype.acceptChargeBack = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        request = this.getBaseUrl();
                        return [4 /*yield*/, request.patch("/chargebacks/".concat(data.chargeBackId, "/accept?business=").concat(data.businessId))];
                    case 1:
                        response = _a.sent();
                        console.log(response.data);
                        return [2 /*return*/, response.data];
                    case 2:
                        error_2 = _a.sent();
                        throw new error_base_1.BaseError({ message: error_2.response.data });
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This function rejects a chargeback
     * @param {RejectChargeBackDto} data - {
     * @returns The response is a JSON object with the following properties:
     */
    ChargeBacks.prototype.rejectChargeBack = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        request = this.getBaseUrl();
                        return [4 /*yield*/, request.patch("/chargebacks/".concat(data.chargeBackId, "/reject?business=").concat(data.businessId), {
                                business_reject_reason: data.reason
                            })];
                    case 1:
                        response = _a.sent();
                        console.log(response.data);
                        return [2 /*return*/, response.data];
                    case 2:
                        error_3 = _a.sent();
                        throw new error_base_1.BaseError({ message: error_3.response.data });
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ChargeBacks;
}(api_1.FincraCore));
exports.ChargeBacks = ChargeBacks;
