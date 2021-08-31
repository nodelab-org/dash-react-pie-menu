# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashReactPieMenu(Component):
    """A DashReactPieMenu component.


Keyword arguments:
- children (list; optional): DashSlice components
- centerRadius (string; default "30px"): Defines the center radius. For example, 30px or 0 (no center). This prop is forwarded to the Center Component.
- centerX (string; required): Defines the x position of the pie menu in CSS Unit. For example, 0px will be left-most position of its parent container.
- centerY (string; required): Defines the y position of the pie menu in CSS Unit. For example, 0px will be the top-most position of its parent container.
- hidden (boolean; default False): The ID used to identify this component in Dash callbacks.
- id (string; required): The ID used to identify this component in Dash callbacks.
- loading_state (dict; optional): Assigned by Dash. loading_state has the following type: dict containing keys 'is_loading', 'prop_name', 'component_name'.
Those keys have the following types:
  - is_loading (boolean; optional): Determines if the component is loading or not
  - prop_name (string; optional): Holds which property is loading
  - component_name (string; optional): Holds the name of the component that is loading
- radius (string; default "125px"): Defines pie menu's radius in CSS Unit. For example, 150px. `"""
    @_explicitize_args
    def __init__(self, children=None, centerRadius=Component.UNDEFINED, centerX=Component.REQUIRED, centerY=Component.REQUIRED, hidden=Component.UNDEFINED, id=Component.REQUIRED, loading_state=Component.UNDEFINED, radius=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'centerRadius', 'centerX', 'centerY', 'hidden', 'id', 'loading_state', 'radius']
        self._type = 'DashReactPieMenu'
        self._namespace = 'dash_react_pie_menu'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'centerRadius', 'centerX', 'centerY', 'hidden', 'id', 'loading_state', 'radius']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['centerX', 'centerY', 'id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashReactPieMenu, self).__init__(children=children, **args)
