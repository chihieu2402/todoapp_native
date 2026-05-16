type RootStackParamList = {
    Home: undefined;
    Details: {id: number, title: string, star: number} | undefined;
    About: undefined;
};
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

declare module '*.png'