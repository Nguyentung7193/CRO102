import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

type HeaderProps = {
    title: string;
    iconleft?: any;
    iconright?: any;
    onPressLeft?: () => void;
    onPressRight?: () => void;
    centerComponent?: React.ReactNode;
    rightComponent?: React.ReactNode;
    leftComponent?: React.ReactNode;
    backgroundColor?: string;
    textColor?: string;
}

const Header = ({
    title,
    iconleft,
    iconright,
    onPressLeft,
    onPressRight,
    centerComponent,
    rightComponent,
    leftComponent,
    backgroundColor = 'blue',
    textColor = 'white',
}: HeaderProps) => {
    const renderLeftComponent = () => {
        if (leftComponent) {
            return leftComponent;
        }
        if (iconleft) {
            return (
                <TouchableOpacity onPress={onPressLeft}>
                    <Image source={iconleft} style={{ width: 24, height: 24,marginTop: 50}} />
                </TouchableOpacity>
            );
        }
    };
    const renderRightComponent = () => {
        if (rightComponent) {
            return rightComponent;
        }
        if (iconright) {
            return (
                <TouchableOpacity onPress={onPressRight}>
                    <Image source={iconright} style={{ width: 24, height: 24,marginTop: 50}} />
                </TouchableOpacity>
            );
        }
    };
    const renderCenterComponent = () => {
        if (centerComponent) {
            return centerComponent;
        }
        return (
            <Text style={[styles.title, { color: textColor }]}>
                {title}
            </Text>
        );
    };
    return (
        <View style={[styles.headerContainer, { backgroundColor }]}>
            {renderLeftComponent()}
            {renderCenterComponent()}
            {renderRightComponent()}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        flex: 1,
        marginTop: 50,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'blue',
    },
    icon: {
        marginTop: 50,
        width: 24,
        height: 24,
    },
    leftIcon: {
        marginRight: 10,
    },
    rightIcon: {
        marginLeft: 10,
    },
    centerText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'blue',
    },
    leftComponent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightComponent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    centerComponent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})