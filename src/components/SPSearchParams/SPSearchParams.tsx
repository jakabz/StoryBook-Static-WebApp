import { SearchBox } from '@fluentui/react';
import * as React from 'react';

export interface ISPSearchParamsProps {
    searchSiteUrl: string;
    searchQueryField: string;
    searchQueryValue: string;
    searchplaceholder: string;
}

export const SPSearchParams: React.FunctionComponent<ISPSearchParamsProps> = (props: React.PropsWithChildren<ISPSearchParamsProps>) => {

    const [searchValue, setSearchValue] = React.useState<string>('');
    const searchParams = `oobRefiners={"${props.searchQueryField}":"${props.searchQueryValue}","FileType":["html"]}&q=${searchValue}`;

    const searchNavigation = (): void => {
        window.location.href = `${props.searchSiteUrl}?${searchParams}`;
    };


    return (
        <SearchBox
            placeholder={props.searchplaceholder}
            onChange={(_, newValue) => setSearchValue(String(newValue))}
            onSearch={searchNavigation}
        />
    );
};