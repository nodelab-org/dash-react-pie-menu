# AUTO GENERATED FILE - DO NOT EDIT

dashSlice <- function(attrs=NULL, className=NULL, icon=NULL, iconColor=NULL, iconSize=NULL, id=NULL, loading_state=NULL, n_clicks=NULL) {
    
    props <- list(attrs=attrs, className=className, icon=icon, iconColor=iconColor, iconSize=iconSize, id=id, loading_state=loading_state, n_clicks=n_clicks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashSlice',
        namespace = 'dash_react_pie_menu',
        propNames = c('attrs', 'className', 'icon', 'iconColor', 'iconSize', 'id', 'loading_state', 'n_clicks'),
        package = 'dashReactPieMenu'
        )

    structure(component, class = c('dash_component', 'list'))
}
