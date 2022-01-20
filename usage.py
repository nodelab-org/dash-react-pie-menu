import dash
import dash_react_pie_menu
from dash.dependencies import Input, Output, State, MATCH, ALL
from dash.exceptions import PreventUpdate
import dash_html_components as html
import dash_bootstrap_components as dbc
import json

app = dash.Dash(__name__)

app.layout = html.Div([
    dbc.Container([
        dbc.Row(
            dbc.Col(
                style={"width":"500px"},
                children=[
                dbc.Textarea(
                    cols=1,
                    size="sm",
                    title="tooltip for textarea",
                    value='''
                        tabIndex (string | number; optional): DEPRECATED Use tabindex instead Overrides the browser's default tab order and follows the one specified instead.

                        tabindex (string | number; optional): Overrides the browser's default tab order and follows the one specified instead.

                        title (string; optional): Text to be displayed in a tooltip when hovering over the element.

                        valid (boolean; optional): Apply valid style to the Textarea for feedback purposes. This will cause any FormFeedback in the enclosing div with valid=True to display.

                        value (string; default ''): The value of the textarea.

                        wrap (string; optional): Indicates whether the text should be wrapped.
                    ''',
                    wrap=True
                ),
            ])
        )
    ]),
    dbc.Row(
        dbc.Col(
            dbc.Button("Hide",id="button-hide"),
        )
    ),
    dbc.Row(
        dbc.Col(
            children=[

                dash_react_pie_menu.DashReactPieMenu(
                    id='pie-menu',
                    radius="85px",
                    centerX='400px',
                    centerY='400px',
                    # iconSize="2x",
                    children=[
                        dash_react_pie_menu.DashSlice(
                            id={"type":"slice", "index":"1"},
                            icon="faEyeSlash",
                            iconColor="orange",
                            iconSize="2x",
                            # label = "hide"
                        ),
                        dash_react_pie_menu.DashSlice(
                            id={"type":"slice", "index":"2"},
                            icon="faPalette",
                            iconColor="red",
                            iconSize="2x",
                            # label = "color"
                        ),
                        dash_react_pie_menu.DashSlice(
                            id={"type":"slice", "index":"3"},
                            icon="faArrowsAlt",
                            iconColor="green",
                            iconSize="2x",
                            # label = "expand"
                        ),
                        dash_react_pie_menu.DashSlice(
                            id={"type":"slice", "index":"4"},
                            icon="faTag",
                            iconColor="blue",
                            iconSize="2x",
                            # label = "attribute"
                        )
                    ]
                ),
                html.Div(id='output1'),
                html.Div(id='output2'),
            ]
        )
    )
    # html.Div(
    #     id='div-tooltip',
    #     hidden=True,
    #     style={
    #         "backgroundColor":"black", 
    #         "color":"white",
    #         "width":"200px", 
    #         "height":"50px", 
    #         "position":"absolute", 
    #         "left":"50%", 
    #         "top":"50%"}
    #     )
])



@app.callback(
    Output('pie-menu', 'hidden'), 
    [
        Input("button-hide","n_clicks")
    ],
    [
        State('pie-menu', 'hidden')
    ])
def show_menu(n_clicks, hidden):
    ctx = dash.callback_context

    if not ctx.triggered:
        raise PreventUpdate
    else:
        trigger_id = ctx.triggered[0]["prop_id"].split(".")[0]
    return not hidden


@app.callback(Output('output1', 'children'), 
    [
        Input({"type":"slice", "index":ALL}, "n_clicks")
    ])
def display_output_1(n_clicks):
    ctx = dash.callback_context
    if not ctx.triggered:
        raise PreventUpdate
    else:
        trigger_id = ctx.triggered[0]["prop_id"].split(".")[0]
    print("")
    print("display_output_1")
    return 'You have clicked {}'.format(trigger_id)



@app.callback(Output('output2', 'children'), 
    [
        Input({"type":"slice", "index":ALL}, "hovered")
    ])
def display_output_2(hovered):
    ctx = dash.callback_context
    if not ctx.triggered:
        raise PreventUpdate
    else:
        trigger_id = ctx.triggered[0]["prop_id"].split(".")[0]
    print("")
    print("display_output_1")
    index = json.loads(trigger_id)["index"]
    return f'slice {index} hovered: {hovered}'

# @app.callback(
#     [
#         Output('div-tooltip', 'children'), 
#         Output('div-tooltip', 'hidden'), 
#     ],
#     [
#         Input({"type":"slice", "index":ALL}, "n_mouse_over")
#     ])
# def display_tool_tip(n_mouse_over):
#     ctx = dash.callback_context

#     if not ctx.triggered:
#         raise PreventUpdate
#     else:
#         trigger_id = ctx.triggered[0]["prop_id"].split(".")[0]
#     print("")
#     print("display_output_2")
#     return ['Mouse over {}'.format(json.loads(trigger_id)["index"]), False]

if __name__ == '__main__':
    app.run_server(debug=True)
