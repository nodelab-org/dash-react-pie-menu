# AUTO GENERATED FILE - DO NOT EDIT

export dashreactpiemenu

"""
    dashreactpiemenu(;kwargs...)
    dashreactpiemenu(children::Any;kwargs...)
    dashreactpiemenu(children_maker::Function;kwargs...)


A DashReactPieMenu component.

Keyword arguments:
- `children` (Array; optional): DashSlice components
- `id` (String; required): The ID used to identify this component in Dash callbacks.
- `centerRadius` (String; optional): Defines the center radius. For example, 30px or 0 (no center). This prop is forwarded to the Center Component.
- `centerX` (String; required): Defines the x position of the pie menu in CSS Unit. For example, 0px will be left-most position of its parent container.
- `centerY` (String; required): Defines the y position of the pie menu in CSS Unit. For example, 0px will be the top-most position of its parent container.
- `className` (String; optional): Defines the center radius. For example, 30px or 0 (no center). This prop is forwarded to the Center Component.
- `hidden` (Bool; optional): The ID used to identify this component in Dash callbacks.
- `iconsize` (String; optional)
- `loading_state` (optional): Assigned by Dash. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `radius` (String; optional): Defines pie menu's radius in CSS Unit. For example, 150px. `
"""
function dashreactpiemenu(; kwargs...)
        available_props = Symbol[:children, :id, :centerRadius, :centerX, :centerY, :className, :hidden, :iconsize, :loading_state, :radius]
        wild_props = Symbol[]
        return Component("dashreactpiemenu", "DashReactPieMenu", "dash_react_pie_menu", available_props, wild_props; kwargs...)
end

dashreactpiemenu(children::Any; kwargs...) = dashreactpiemenu(;kwargs..., children = children)
dashreactpiemenu(children_maker::Function; kwargs...) = dashreactpiemenu(children_maker(); kwargs...)

