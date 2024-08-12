import { DefaultTemplateComponent } from './DefaultTemplateComponent';

export type BuilderTemplateProps = {
    components: {
        selector?: JSX.Element;
        grid?: JSX.Element;
    };
};

const BuilderTemplate = ({ components }: BuilderTemplateProps) => {
    return (
        <div style={{ display: 'flex', width: '100%', height: '100%' }}>
            <div style={{ flexGrow: 1, height: '100%' }}>
                {components.grid ?? <DefaultTemplateComponent name={'Grid'} />}
            </div>
            <div style={{ width: '25%', height: '100%' }}>
                {components.selector ?? (
                    <DefaultTemplateComponent name={'Selector'} />
                )}
            </div>
        </div>
    );
};

export default BuilderTemplate;
