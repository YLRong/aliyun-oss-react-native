declare module 'aliyun-oss-react-native' {
  declare const AliyunOSS: {
    enableDevMode: () => void
    initWithSecurityToken: (
      securityToken: string,
      accessKey: string,
      secretKey: string,
      endPoint: string
    ) => void
    asyncUpload: (
      bucketName: string,
      objectKey: string,
      filepath: string
    ) => Promise<any>
  }
  export default AliyunOSS
}