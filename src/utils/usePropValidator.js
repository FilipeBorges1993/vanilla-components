export const useLayoutPropValidator = (layout = '') => {
    return ['default', 'content', 'standard', 'naked'].includes(layout)
}

export const useGroupedPropValidator = (grouped) => {
    return ['bellow', 'above'].includes(grouped)
}
