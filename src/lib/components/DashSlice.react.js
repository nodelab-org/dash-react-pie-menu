import React, {} from 'react';
import PropTypes from 'prop-types';
import {Slice} from 'react-pie-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    // fix node (data)
    faAnchor,
    // two-way arrow. Add link or relation
    faArrowsAltH,
    // arrow. Add link
    faLongArrowAltRight,
    faLongArrowAltLeft,
    // expand neighbours
    faArrowsAlt,
    // graph? 
    faBezierCurve,
    // bookmark
    faBookmark, 
    // role
    faBriefcase,
    // node
    faCircle,
    // subtyping
    faCodeBranch,
    // settings
    faCog,
    // collapse neighbours
    faCompressArrowsAlt,
    // similar to material UI storage
    faDatabase,
    // download
    faDownload,
    // edit
    faEdit,
    // hide
    faEyeSlash, 
    // increase size
    faExpandAlt,
    // url value/attribute
    faExternalLinkAlt, 
    // color
    faFillDrip,
    // filtering
    faFilter,
    // label
    faFont,
    // ownership
    faHandHolding,
    // relation
    faHandshake,
    faHandshakeSlash,
    // role
    faHardHat,
    // highlight
    faHighlighter,
    // relation/relates (a hub node connecting others)
    faHubSpot,
    // icons
    faIcons,
    // images
    faImages,
    // key
    faKey,
    // chain link: relation 
    faLink, 
    // magic wand, possibly for special node actions
    faMagic,
    // inheritance, hierarchy, ownership?
    faNetworkWired,
    // color
    faPaintBrush,
    // color
    faPalette, 
    // atttachment value/attribute
    faPaperclip, 
    // connect two people
    faPeopleArrows,
    // query or activate node
    faPlay,
    faPlayCircle,
    // add
    faPlus,
    faPlusCircle,
    // plays or relates
    faProjectDiagram,
    // find path between two nodes
    faRoute,
    // node val (size)
    faRuler,
    // save
    faSave,
    // server - similar to material UI dns
    faServer,
    // subtype / schema
    faSitemap,
    // parameters / settings
    faSlidersH,
    // sort text 
    faSortAlphaDown,
    faSortAlphaDownAlt,
    faSortAlphaUp,
    faSortAlphaUpAlt,
    // sort amount
    faSortAmountDown,
    faSortAmountDownAlt,
    faSortAmountUp,
    faSortAmountUpAlt,
    // sort number
    faSortNumericDown,
    faSortNumericDownAlt,
    faSortNumericUp,
    faSortNumericUpAlt,
    // attribute(s)
    faTag, 
    faTags,
    // possibly query
    faTerminal,
    // settings / tools
    faTools,
    // delete
    faTrash,
    faTrashAlt,
    // delete relation
    faUnlink,
    // label or attribute
    faUserTag,
    // Role
    faIdBadge,
    // Role? Guy in suit
    faUserTie,
    // settings
    faWrench
} from '@fortawesome/free-solid-svg-icons'

const icons = {
    "faAnchor":faAnchor,
    "faArrowAltH":faArrowsAltH,
    // arrow. Add link
    "faLongArrowAltRight":faLongArrowAltRight, // import fails
    "faArrowAltLeft":faLongArrowAltLeft, // import fails 
    "faArrowsAlt":faArrowsAlt, 
    "faBezierCurve":faBezierCurve,
    "faBookmark":faBookmark, 
    "faBriefcase":faBriefcase,
    "faCircle":faCircle,
    "faCog":faCog,
    "faCodeBranch":faCodeBranch,
    "faCompressArrowsAlt":faCompressArrowsAlt,
    "faDatabase":faDatabase,
    "faDownload":faDownload,
    "faEdit":faEdit,
    "faEyeSlash":faEyeSlash, 
    "faExpandAlt":faExpandAlt,
    "faExternalLinkAlt":faExternalLinkAlt, 
    "faFillDrip":faFillDrip,
    "faFilter":faFilter,
    "faFont":faFont,
    "faHandHolding":faHandHolding,
    "faHandshake":faHandshake,
    "faHandshakeSlash":faHandshakeSlash,
    "faHardHat": faHardHat,
    "faHighlighter":faHighlighter,
    "faHubSpot":faHubSpot, 
    "faIcons":faIcons,
    "faImages":faImages,
    "faKey":faKey,
    "faLink":faLink, 
    "faMagic":faMagic,
    "faNetworkWired":faNetworkWired,
    "faPaintBrush":faPaintBrush,
    "faPalette":faPalette, 
    "faPaperclip":faPaperclip, 
    "faPeopleArrows":faPeopleArrows,
    "faPlay":faPlay,
    "faPlayCircle":faPlayCircle,
    "faPlus":faPlus,
    "faPlusCircle":faPlusCircle,
    "faProjectDiagram":faProjectDiagram,
    "faRoute":faRoute,
    "faRuler":faRuler,
    "faSave":faSave,
    "faServer":faServer,
    "faSitemap":faSitemap,
    "faSlidersH":faSlidersH,
    "faSortAlphaDown":faSortAlphaDown,
    "faSortAlphaDownAlt":faSortAlphaDownAlt,
    "faSortAlphaUp":faSortAlphaUp,
    "faSortAlphaUpAlt":faSortAlphaUpAlt,
    "faSortAmountDown":faSortAmountDown,
    "faSortAmountDownAlt":faSortAmountDownAlt,
    "faSortAmountUp":faSortAmountUp,
    "faSortAmountUpAlt":faSortAmountUpAlt,
    "faSortNumericDown":faSortNumericDown,
    "faSortNumericDownAlt":faSortNumericDownAlt,
    "faSortNumericUp":faSortNumericUp,
    "faSortNumericUpAlt":faSortNumericUpAlt,
    "faTag":faTag, 
    "faTags":faTags, 
    "faTerminal":faTerminal,
    "faTools":faTools,
    "faTrash":faTrash,
    "faTrashAlt":faTrashAlt,
    "faUnlink":faUnlink,
    "faIdBadge":faIdBadge,
    "faUserTag":faUserTag,
    "faUserTie":faUserTie,
    "faWrench":faWrench
}

export default function DashSlice (props) {

    const {attrs, className, icon, iconColor, iconSize, id, label, n_clicks, loading_state} = props;
    return (
        <Slice    
            id={id}
            key={id}
            attrs={attrs}
            className={className}
            // data-dash-is-loading={
            //     (loading_state && loading_state.is_loading) || undefined
            // }
            onSelect={() => props.setProps({ "n_clicks" : n_clicks+1 })}
            // onMouseOver={() => props.setProps({ "hovered" : true })}
            // onMouseOut={() => props.setProps({ "hovered" : false })}
            >
            {/* <abbr title="testing 1-2">{"\u2753"}</abbr>. */}
            <abbr title={label}>
            <FontAwesomeIcon icon={icons[icon]} size={iconSize} color={iconColor}/>
            </abbr>
            
        </Slice>
    );
}

DashSlice.defaultProps = {
    // highlight:true,
    attrs:{},
    className:"react-pie-menu-slice",
    // hidden: false,
    iconColor:"#192733",
    iconSize:"2x",
    n_clicks:0,
    // hovered:false,
    label: null
    // style:{}
};

DashSlice.propTypes = {
    // see https://www.npmjs.com/package/react-pie-menu

    /**
     * You can add custom attributes by specifying in attrs. For example, { enabled: 'true' }.
    */
    attrs: PropTypes.object,

    /**
     * CSS class
    */
    className: PropTypes.string,

    /**
     * Height of the content in CSS Size. This prop is used to center the content between top and bottom of the slice. For example, 2em.
     */
    // contentHeight: PropTypes.string,
    
    /**
     * whether to highlight 
     */
    // highlight: PropTypes.bool,
    
    /**
     * The font awesome icon, e.g. "faCoffee". Must be one of the icons imported above.
     */
    icon: PropTypes.string.isRequired,
    
    /**
     * Icon color
     */
    iconColor: PropTypes.string,
    /**
     * icon size, e.g. "xs", "2x". See https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons
     */
    iconSize: PropTypes.string,
    
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,
    
    /**
     * Assigned by Dash
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * label to show on hover
     */
    label: PropTypes.string,

    /**
     * number of times slice has been clicked
     */
    n_clicks: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * inline styling (see Dash docs)
     */
    // style: PropTypes.object
    
};
