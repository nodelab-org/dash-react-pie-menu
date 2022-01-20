% Auto-generated: do not edit by hand
\name{dashSlice}

\alias{dashSlice}

\title{DashSlice component}

\description{

}

\usage{
dashSlice(id=NULL, attrs=NULL, className=NULL, icon=NULL,
iconColor=NULL, iconSize=NULL, label=NULL,
loading_state=NULL, n_clicks=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{attrs}{Named list. You can add custom attributes by specifying in attrs. For example, { enabled: 'true' }.}

\item{className}{Character. CSS class}

\item{icon}{Character. The font awesome icon, e.g. "faCoffee". Must be one of the icons imported above.}

\item{iconColor}{Character. Icon color}

\item{iconSize}{Character. icon size, e.g. "xs", "2x". See https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons}

\item{label}{Character. label for tooltip}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Assigned by Dash}

\item{n_clicks}{Numeric. number of times slice has been clicked}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

