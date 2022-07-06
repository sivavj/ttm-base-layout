import { FC, ReactNode, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { SidebarContext } from "../../../../contexts/SidebarContext";

import PropTypes from "prop-types";
import { Button, Badge, ListItem, styled, Box, Popover, Tooltip, tooltipClasses, TooltipProps, IconButton } from "@mui/material";

import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';


const IndicatorWrapper = styled(Box)(
  ({ theme }) => `
  position: absolute;
  top: 50%;
  margin-top: -13px;
  right: -${theme.spacing(1.5)};
  width: 18px;
  height: 18px;

  .MuiSvgIcon-root {
    width: 100%;
    height: auto;
  }
`
);

const PopoverWrapper = styled(Popover)(
  ({ theme }) => `
  .MuiList-root {
    min-width: 240px;
    padding: ${theme.spacing(2)} !important;

    .MuiListItem-root {
      padding: 2px 0 !important;

      .MuiIconButton-root {
        width: 100% !important;
        height: auto !important;
        justify-content: flex-start !important;
        font-weight: bold !important;
        background: transparent !important;
        color: ${theme.colors.alpha.black[70]} !important;
        padding: ${theme.spacing(1, 2)} !important;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(1.8)};
          top: 19px;
        }

        .name-wrapper {
          display: block !important;
        }

        &.Mui-active,
        &:hover {
          background: ${theme.colors.alpha.black[10]} !important;
          color: ${theme.colors.alpha.black[100]} !important;
        }
      }
    }  
  }
`
);


interface SidebarMenuItemProps {
  children?: ReactNode;
  link?: any;
  icon?: any;
  badge?: string;
  open?: boolean;
  active?: boolean;
  name: string;
}

const TooltipWrapper = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.black[100],
    color: theme.palette.getContrastText(theme.colors.alpha.black[100]),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
    borderRadius: theme.general.borderRadiusSm,
    boxShadow:
      '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.black[100]
  }
}));


const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  children,
  link,
  icon: Icon,
  badge,
  open: openParent,
  active,
  name,
  ...rest
}) => {

  const { toggleSidebar } = useContext(SidebarContext);

  const [menuToggle] = useState<boolean | undefined>(openParent);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  if (children) {
    return (
      <ListItem component="div" className="Mui-children" key={name} {...rest}>
        <TooltipWrapper
          title={name}
          disableInteractive
          placement="right"
          arrow
        >
          <IconButton
            className={clsx({ 'Mui-active': menuToggle })}
            onClick={handleClick}
          >
            {Icon && <Icon />}
            {badge === '' ? (
              <Badge color="primary" variant="dot" />
            ) : (
              <Badge badgeContent={badge} />
            )}

            <IndicatorWrapper>
              {open ? (
                <KeyboardArrowLeftTwoToneIcon />
              ) : (
                <KeyboardArrowRightTwoToneIcon />
              )}
            </IndicatorWrapper>
          </IconButton>
        </TooltipWrapper>
        <PopoverWrapper
          disableScrollLock
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left'
          }}
          anchorEl={anchorEl}
          onClose={handleClose}
          onClick={handleClose}
          open={open}
        >
          {children}
        </PopoverWrapper>
      </ListItem>
    );
  }
  return (
    <ListItem component="div" key={name} {...rest}>
      <Button
        className={clsx({ 'Mui-active': active })}
        component={NavLink}
        onClick={toggleSidebar}
        to={link}
        startIcon={Icon && <Icon />}
      >
        {name}
        {badge && <Badge badgeContent={badge} />}
      </Button>
    </ListItem>
  );
};

SidebarMenuItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  link: PropTypes.string,
  icon: PropTypes.elementType,
  badge: PropTypes.string,
  open: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

SidebarMenuItem.defaultProps = {
  open: false,
  active: false,
};

export default SidebarMenuItem;
