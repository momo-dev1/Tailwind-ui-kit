import { useRef, useState } from 'react';
import EDITOR_THEME from '../../editorTheme';
import { LiveEditor, LivePreview, LiveProvider } from 'react-live';


const ComponentLayout = (props) => {
    //   const code = useCallback(() => {
    //     return formatHtml(ReactDOMServer.renderToStaticMarkup(props.element));
    // }, [props.element]);

    const [hasCopied, setHasCopied] = useState(false);
    const previewRef = useRef();

    const copyCode = () => {
        const el = document.createElement('textarea');
        el.value = code();
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setHasCopied(true);
    };

    const COPY_BTN = () => {
        return (
            <button
                onClick={copyCode}
                className={`w-28 px-4 py-2 flex items-center text-base font-medium rounded-md ${ hasCopied
                    ? 'text-white bg-green-500 hover:bg-green-700'
                    : 'text-gray-800 bg-white hover:bg-gray-200'
                    }`}
            >
                <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213l-299 299h299v-299zm-640-384l-299 299h299v-299zm196 647l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zm956 804v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z" />
                </svg>
                {hasCopied ? 'Copied' : 'Copy'}
            </button>
        );
    };

    const [status, setStatus] = useState({
        EDIT_CODE = 'edit',
        DEFAULT = 'default',
    });
    return (
        <>
            <div
                className="mb-4 bg-gray-100 shadow rounded-xl"
                key={props.title}
            >
                <div className="flex flex-col items-center justify-between p-4 bg-white border md:flex-row rounded-xl">
                    <p className="mb-2 text-xl font-light text-gray-600 md:mb-0">{props.title} </p>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-4">

                        <div className="w-32">
                            <button
                                onClick={() => setStatus(status.EDIT_CODE)}
                                className="flex items-center justify-between px-4 py-2 text-base font-medium text-gray-800 bg-white border border-gray-800 rounded-md w-28 hover:bg-gray-100"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 2048 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M681 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" />
                                </svg>
                                code
                            </button>
                        </div>

                        {COPY_BTN()}
                    </div>
                </div>

                <LiveProvider
                    scope={scope}
                    theme={EDITOR_THEME}
                    disabled={status !== status.EDIT_CODE}
                    language="markup"
                    code={code()}
                >
                    <div
                        className={`${ props.vertical ? 'flex-col justify-center' : 'flex-col md:flex-row justify-between '
                            } flex gap-4 items-start ${ props.fullscreen ? '' : 'mx-4 py-12' }`}
                    >
                        <div ref={previewRef} className={`${ props.vertical ? 'w-full ' : '' }mx-auto`}>
                            <LivePreview />
                        </div>
                        {status !== status.DEFAULT && (
                            <div className={`${ props.vertical ? '' : 'md:w-3/4' } relative w-full`}>
                                <div>
                                    <div className="absolute z-10 top-2 right-24">{COPY_BTN()}</div>
                                    <button
                                        onClick={() => setStatus(status.DEFAULT)}
                                        className="absolute z-30 w-12 p-2 text-base font-medium bg-red-300 rounded-md top-2 right-2 hover:bg-red-400 "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="6"
                                            height="6"
                                            className="w-6 h-6 mx-auto text-gray-800 "
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                        >
                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                                        </svg>
                                    </button>
                                    <LiveEditor className="rounded-lg" />
                                </div>
                            </div>
                        )}
                    </div>
                </LiveProvider>
            </div>
        </>
    );
};

export default ComponentLayout;
