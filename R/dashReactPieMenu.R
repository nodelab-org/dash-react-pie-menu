# AUTO GENERATED FILE - DO NOT EDIT

dashReactPieMenu <- function(children=NULL, id=NULL, centerRadius=NULL, centerX=NULL, centerY=NULL, className=NULL, hidden=NULL, iconsize=NULL, loading_state=NULL, radius=NULL) {
    
    props <- list(children=children, id=id, centerRadius=centerRadius, centerX=centerX, centerY=centerY, className=className, hidden=hidden, iconsize=iconsize, loading_state=loading_state, radius=radius)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashReactPieMenu',
        namespace = 'dash_react_pie_menu',
        propNames = c('children', 'id', 'centerRadius', 'centerX', 'centerY', 'className', 'hidden', 'iconsize', 'loading_state', 'radius'),
        package = 'dashReactPieMenu'
        )

    structure(component, class = c('dash_component', 'list'))
}
