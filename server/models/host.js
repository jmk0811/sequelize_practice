module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'host',
        {
            _id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            host: {
                type: DataTypes.STRING,
                comment: 'host ip address'
            },
        },
    )
}