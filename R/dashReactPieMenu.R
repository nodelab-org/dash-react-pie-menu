# AUTO GENERATED FILE - DO NOT EDIT

dashReactPieMenu <- function(children=NULL, className=NULL, centerRadius=NULL, centerX=NULL, centerY=NULL, hidden=NULL, iconsize=NULL, id=NULL, loading_state=NULL, radius=NULL) {
    
    props <- list(children=children, className=className, centerRadius=centerRadius, centerX=centerX, centerY=centerY, hidden=hidden, iconsize=iconsize, id=id, loading_state=loading_state, radius=radius)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashReactPieMenu',
        namespace = 'dash_react_pie_menu',
        propNames = c('children', 'className', 'centerRadius', 'centerX', 'centerY', 'hidden', 'iconsize', 'id', 'loading_state', 'radius'),
        package = 'dashReactPieMenu'
        )

    structure(component, class = c('dash_component', 'list'))
}
