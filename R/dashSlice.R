# AUTO GENERATED FILE - DO NOT EDIT

dashSlice <- function(id=NULL, attrs=NULL, className=NULL, hovered=NULL, icon=NULL, iconColor=NULL, iconSize=NULL, loading_state=NULL, n_clicks=NULL) {
    
    props <- list(id=id, attrs=attrs, className=className, hovered=hovered, icon=icon, iconColor=iconColor, iconSize=iconSize, loading_state=loading_state, n_clicks=n_clicks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashSlice',
        namespace = 'dash_react_pie_menu',
        propNames = c('id', 'attrs', 'className', 'hovered', 'icon', 'iconColor', 'iconSize', 'loading_state', 'n_clicks'),
        package = 'dashReactPieMenu'
        )

    structure(component, class = c('dash_component', 'list'))
}
