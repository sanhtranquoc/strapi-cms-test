module.exports = ({ env }) => ({
    upload: {
        config: {
        provider: 'aws-s3',
        providerOptions: {
            params: {
                Bucket: 'katalon-mkt-strapi-dev',
            },
        },
        // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
        actionOptions: {
            upload: {
                ACL: null
            },
            uploadStream: {
                ACL: null
            },
        }
        },
    }
});
