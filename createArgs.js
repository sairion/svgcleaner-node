//  https://github.com/RazrFalcon/svgcleaner/blob/1f579e84a5e8c47b36be195bf9c8decc10d1fca8/src/cli.rs
//  svgcleaner cli v0.8.1

var argKeys = [
    "remove-comments",
    "remove-declarations",
    "remove-nonsvg-elements",
    "remove-unused-defs",
    "convert-shapes",
    "remove-title",
    "remove-desc",
    "remove-metadata",
    "remove-dupl-lineargradient",
    "remove-dupl-radialgradient",
    "remove-dupl-fegaussianblur",
    "ungroup-groups",
    "ungroup-defs",
    "group-by-style",
    "merge-gradients",
    "regroup-gradient-stops",
    "remove-invalid-stops",
    "remove-invisible-elements",
    "resolve-use",

    "remove-version",
    "remove-nonsvg-attributes",
    "remove-unreferenced-ids",
    "trim-ids",
    "remove-text-attributes",
    "remove-unused-coordinates",
    "remove-default-attributes",
    "remove-xmlns-xlink-attribute",
    "remove-needless-attributes",
    "remove-gradient-attributes",
    "join-style-attributes",
    "apply-transform-to-gradients",
    "apply-transform-to-shapes",
    "remove-unresolved-classes",

    "paths-to-relative",
    "remove-unused-segments",
    "convert-segments",
    "trim-paths",
    "join-arcto-flags",
    "remove-dupl-cmd-in-paths",
    "use-implicit-cmds",

    "trim-colors",
    "simplify-transforms",
    "paths-coordinates-precision",
    "indent",

    "multipass",
    "copy-on-error",
    "quiet",
];

var argDict = argKeys.reduce((dict, key) => {
    var cliArgKey = `--${key}`;
    var convertedArgKey = key.replace(/[-|:]([a-z])/g, function (g) { return g[1].toUpperCase(); })
    dict[convertedArgKey] = cliArgKey;
    return dict;
}, {});

console.log(JSON.stringify(argDict));

// {"removeComments":"--remove-comments","removeDeclarations":"--remove-declarations","removeNonsvgElements":"--remove-nonsvg-elements","removeUnusedDefs":"--remove-unused-defs","convertShapes":"--convert-shapes","removeTitle":"--remove-title","removeDesc":"--remove-desc","removeMetadata":"--remove-metadata","removeDuplLineargradient":"--remove-dupl-lineargradient","removeDuplRadialgradient":"--remove-dupl-radialgradient","removeDuplFegaussianblur":"--remove-dupl-fegaussianblur","ungroupGroups":"--ungroup-groups","ungroupDefs":"--ungroup-defs","groupByStyle":"--group-by-style","mergeGradients":"--merge-gradients","regroupGradientStops":"--regroup-gradient-stops","removeInvalidStops":"--remove-invalid-stops","removeInvisibleElements":"--remove-invisible-elements","resolveUse":"--resolve-use","removeVersion":"--remove-version","removeNonsvgAttributes":"--remove-nonsvg-attributes","removeUnreferencedIds":"--remove-unreferenced-ids","trimIds":"--trim-ids","removeTextAttributes":"--remove-text-attributes","removeUnusedCoordinates":"--remove-unused-coordinates","removeDefaultAttributes":"--remove-default-attributes","removeXmlnsXlinkAttribute":"--remove-xmlns-xlink-attribute","removeNeedlessAttributes":"--remove-needless-attributes","removeGradientAttributes":"--remove-gradient-attributes","joinStyleAttributes":"--join-style-attributes","applyTransformToGradients":"--apply-transform-to-gradients","applyTransformToShapes":"--apply-transform-to-shapes","removeUnresolvedClasses":"--remove-unresolved-classes","pathsToRelative":"--paths-to-relative","removeUnusedSegments":"--remove-unused-segments","convertSegments":"--convert-segments","trimPaths":"--trim-paths","joinArctoFlags":"--join-arcto-flags","removeDuplCmdInPaths":"--remove-dupl-cmd-in-paths","useImplicitCmds":"--use-implicit-cmds","trimColors":"--trim-colors","simplifyTransforms":"--simplify-transforms","pathsCoordinatesPrecision":"--paths-coordinates-precision","indent":"--indent","multipass":"--multipass","copyOnError":"--copy-on-error","quiet":"--quiet"}
