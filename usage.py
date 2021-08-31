import dash
import dash_react_pie_menu
from dash.dependencies import Input, Output, State, MATCH, ALL
from dash.exceptions import PreventUpdate
import dash_html_components as html
import dash_bootstrap_components as dbc

app = dash.Dash(__name__)

app.layout = html.Div([
    dbc.Button("Hide",id="button-hide"),
    dash_react_pie_menu.DashReactPieMenu(
        id='pie-menu',
        radius="85px",
        centerX='400px',
        centerY='400px',
        children=[
            dash_react_pie_menu.DashSlice(
                id={"type":"slice", "index":"1"},
                icon="faMinusCircle",
                iconsize="2x"
            ),
            dash_react_pie_menu.DashSlice(
                id={"type":"slice", "index":"2"},
                icon="faPalette",
                iconsize="2x"
            ),
            dash_react_pie_menu.DashSlice(
                id={"type":"slice", "index":"3"},
                icon="faArrowsAlt",
                iconsize="2x"
            ),
            dash_react_pie_menu.DashSlice(
                id={"type":"slice", "index":"4"},
                icon="faTag",
                iconsize="2x"
            )
        ]
    ),
    html.Div(id='output')
])



@app.callback(
    Output('pie-menu', 'hidden'), 
    [
        Input("button-hide","n_clicks")
    ],
    [
        State('pie-menu', 'hidden')
    ])
def display_output(n_clicks, hidden):
    ctx = dash.callback_context

    if not ctx.triggered:
        raise PreventUpdate
    else:
        trigger_id = ctx.triggered[0]["prop_id"].split(".")[0]
    return not hidden

@app.callback(
    Output('output', 'children'), 
    [
        Input({"type":"slice", "index":ALL}, "n_clicks")
    ])
def display_output(n_clicks):
    ctx = dash.callback_context

    if not ctx.triggered:
        raise PreventUpdate
    else:
        trigger_id = ctx.triggered[0]["prop_id"].split(".")[0]
    return 'You have clicked {}'.format(trigger_id)

if __name__ == '__main__':
    app.run_server(debug=True)
