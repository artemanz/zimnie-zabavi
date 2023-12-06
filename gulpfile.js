import gulp from "gulp";
import newer from "gulp-newer";
import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

import { resolve } from "path";
const { src, dest, watch, task, series } = gulp;

const input = "assets";
const output = "src/assets";

function toWebp() {
  return src(resolve(input, "**/*.{jpg,jpeg,png,webp}"))
    .pipe(newer(output))
    .pipe(webp())
    .pipe(dest(output));
}

function images() {
  return src(resolve(input, "**/*.{jpg,jpeg,png,webp}"))
    .pipe(newer(output))
    .pipe(imagemin())
    .pipe(dest(output));
}

function fonts() {
  return src(resolve(input, "**/*.ttf"))
    .pipe(fonter({ formats: ["woff"] }))
    .pipe(dest(output))
    .pipe(src(resolve(input, "**/*.ttf")))
    .pipe(ttf2woff2())
    .pipe(dest(output));
}

function svg() {
  return src(resolve(input, "**/*.svg")).pipe(newer(output)).pipe(dest(output));
}

function watcher() {
  watch("assets/**/*.ttf", fonts);
  watch("assets/**/*.{jpg,jpeg,png,webp}", toWebp);
  watch("assets/**/*.svg", svg);
}

task("default", series(fonts, toWebp, svg, watcher));
task("build", series(fonts, svg, toWebp));
