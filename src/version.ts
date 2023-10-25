import config from '../package.json'

// 当前版本
export const getVersion = () :string => {
    return config.version;
} 