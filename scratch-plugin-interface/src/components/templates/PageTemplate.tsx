import { DefaultTemplateComponent } from './DefaultTemplateComponent';

export type PageTemplateProps = {
    components: {
        navigation?: JSX.Element;
        page?: JSX.Element;
    };
};

const PageTemplate = ({ components, ...props }: PageTemplateProps) => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <div style={{ width: '100%', height: '10%' }}>
                {components.navigation ?? (
                    <DefaultTemplateComponent name="Navigation" />
                )}
            </div>
            <div style={{ width: '100%', height: '90%' }}>
                {components.page ?? <DefaultTemplateComponent name="Page" />}
            </div>
        </div>
    );
};

export default PageTemplate;
