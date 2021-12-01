# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashSlice(Component):
    """A DashSlice component.


Keyword arguments:
- attrs (dict; optional): You can add custom attributes by specifying in attrs. For example, { enabled: 'true' }.
- className (string; default "react-pie-menu-slice"): CSS class
- icon (string; required): The font awesome icon, e.g. "faCoffee". Must be one of the icons imported above.
- iconColor (string; default "#192733"): Icon color
- iconSize (string; default "2x"): icon size, e.g. "xs", "2x". See https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons
- id (string; required): The ID used to identify this component in Dash callbacks.
- loading_state (dict; optional): Assigned by Dash. loading_state has the following type: dict containing keys 'is_loading', 'prop_name', 'component_name'.
Those keys have the following types:
  - is_loading (boolean; optional): Determines if the component is loading or not
  - prop_name (string; optional): Holds which property is loading
  - component_name (string; optional): Holds the name of the component that is loading
- n_clicks (number; default 0): number of times slice has been clicked"""
    @_explicitize_args
    def __init__(self, attrs=Component.UNDEFINED, className=Component.UNDEFINED, icon=Component.REQUIRED, iconColor=Component.UNDEFINED, iconSize=Component.UNDEFINED, id=Component.REQUIRED, loading_state=Component.UNDEFINED, n_clicks=Component.UNDEFINED, **kwargs):
        self._prop_names = ['attrs', 'className', 'icon', 'iconColor', 'iconSize', 'id', 'loading_state', 'n_clicks']
        self._type = 'DashSlice'
        self._namespace = 'dash_react_pie_menu'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['attrs', 'className', 'icon', 'iconColor', 'iconSize', 'id', 'loading_state', 'n_clicks']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['icon', 'id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashSlice, self).__init__(**args)
