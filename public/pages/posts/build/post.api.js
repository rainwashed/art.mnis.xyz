"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Hello World!");
("use strict");
let openedPost = false;
function sleep(ms) {
    return new Promise((res, _) => setTimeout(res, ms));
}
let manifest;
function checkManifestEntry(uid) {
    let returnValue = [false, undefined];
    manifest === null || manifest === void 0 ? void 0 : manifest.postMetadata.forEach((entry) => {
        // fix this line to use the manifest entry interface
        if ((entry === null || entry === void 0 ? void 0 : entry.uid) === uid)
            returnValue = [true, entry];
    });
    return returnValue;
}
function handleHashChange(e) {
    var _a, _b, _c;
    let hash = (_b = (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.hash) === null || _b === void 0 ? void 0 : _b.slice(1);
    console.log("new hash=", hash);
    if (checkManifestEntry(hash)[0] === false)
        return;
    if (openedPost)
        return;
    let entry = checkManifestEntry(hash)[1];
    const postLoadIFrame = document.getElementById("post-load");
    console.log(postLoadIFrame);
    postLoadIFrame.src =
        ((_c = window === null || window === void 0 ? void 0 : window.location) === null || _c === void 0 ? void 0 : _c.origin) +
            "/public/pages/posts/postload.iframe.html?" +
            entry.src;
    postLoadIFrame.classList.add("iframe-visible");
    openedPost = true;
}
window.addEventListener("hashchange", handleHashChange);
function handleDOMLoaded(e) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        // this will be if the browser loads with a uid already loaded, show said uid
        let hash = (_b = (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.hash) === null || _b === void 0 ? void 0 : _b.slice(1);
        console.log("loaded hash=", hash);
        const resolveRoot = ((_c = window === null || window === void 0 ? void 0 : window.location) === null || _c === void 0 ? void 0 : _c.origin) + "/public/pages/posts/manifest.json";
        manifest = yield (yield fetch(resolveRoot)).json();
        if (hash === "" ||
            hash === undefined ||
            hash === "#" ||
            typeof hash === "undefined")
            return;
        if (checkManifestEntry(hash)[0] === false)
            return;
        if (openedPost)
            return;
        let entry = checkManifestEntry(hash)[1];
        const postLoadIFrame = document.getElementById("post-load");
        console.log(postLoadIFrame);
        postLoadIFrame.src =
            ((_d = window === null || window === void 0 ? void 0 : window.location) === null || _d === void 0 ? void 0 : _d.origin) +
                "/public/pages/posts/postload.iframe.html?" +
                entry.src;
        postLoadIFrame.classList.add("iframe-visible");
        openedPost = true;
    });
}
document.addEventListener("DOMContentLoaded", handleDOMLoaded);
function handlePostClick(e) {
    let target = e.target;
    let uid = target.getAttribute("data-manifest-id");
    if (uid === undefined || uid === null || typeof uid === "undefined")
        return;
    console.log("clicked on uid=", uid);
    window.location.hash = "#" + uid;
}
function run() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const resolveRoot = ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.origin) + "/public/pages/posts/manifest.json";
        manifest = yield (yield fetch(resolveRoot)).json();
        let postGrid = document.getElementById("post-grid");
        Array.from(manifest["postMetadata"]).forEach((entry) => {
            let newArticle = document.createElement("article");
            let newTitle = document.createElement("p");
            let formattedTime = new Date(Number(entry["timestamp"]));
            formattedTime = [
                formattedTime.getDate(),
                formattedTime.getMonth() + 1,
                formattedTime.getFullYear(),
            ].join("/");
            newArticle.title = entry["title"];
            newArticle.style.setProperty("--timestamp", `'${formattedTime}'`);
            newArticle.style.setProperty("--bg-url", `url('${entry["thumbnail"]}')`);
            newArticle.setAttribute("data-manifest-id", entry["uid"]);
            newTitle.innerText = entry["title"];
            newArticle.append(newTitle);
            newArticle.addEventListener("click", handlePostClick);
            postGrid.appendChild(newArticle);
        });
    });
}
run();
window.addEventListener("message", (e) => __awaiter(void 0, void 0, void 0, function* () {
    let message = e.data;
    const postLoadIFrame = document.getElementById("post-load");
    if (message === "close-iframe") {
        postLoadIFrame === null || postLoadIFrame === void 0 ? void 0 : postLoadIFrame.classList.remove("iframe-visible");
        yield sleep(500);
        postLoadIFrame.src = "";
        window.location.hash = "";
        openedPost = false;
    }
}));