# AUTO GENERATED FILE - DO NOT EDIT

dashReactPieMenu <- function(children=NULL, centerRadius=NULL, centerX=NULL, centerY=NULL, hidden=NULL, id=NULL, loading_state=NULL, radius=NULL) {
    
    props <- list(children=children, centerRadius=centerRadius, centerX=centerX, centerY=centerY, hidden=hidden, id=id, loading_state=loading_state, radius=radius)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashReactPieMenu',
        namespace = 'dash_react_pie_menu',
        propNames = c('children', 'centerRadius', 'centerX', 'centerY', 'hidden', 'id', 'loading_state', 'radius'),
        package = 'dashReactPieMenu'
        )

    structure(component, class = c('dash_component', 'list'))
}
