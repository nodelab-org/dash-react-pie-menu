# AUTO GENERATED FILE - DO NOT EDIT

export dashslice

"""
    dashslice(;kwargs...)

A DashSlice component.

Keyword arguments:
- `icon` (String; required): The ID used to identify this component in Dash callbacks.
- `iconsize` (String; optional): The ID used to identify this component in Dash callbacks.
- `id` (String; required): The ID used to identify this component in Dash callbacks.
- `loading_state` (optional): Assigned by Dash. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `n_clicks` (Real; optional): Height of the content in CSS Size. This prop is used to center the content between top and bottom of the slice. For example, 2em.
"""
function dashslice(; kwargs...)
        available_props = Symbol[:icon, :iconsize, :id, :loading_state, :n_clicks]
        wild_props = Symbol[]
        return Component("dashslice", "DashSlice", "dash_react_pie_menu", available_props, wild_props; kwargs...)
end

