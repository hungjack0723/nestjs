import { DataSource, DataSourceOptions } from 'typeorm';

// 基礎配置
const baseConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'myuser',
  password: 'mypassword',
  database: 'mydatabase',
};

// nestjs typeorm 初始化
export const ormConfig: DataSourceOptions = {
  ...baseConfig,
  entities: ['dist/entity/*.entity{.js,.ts}'],
};

// typeorm cli 配置
const ormConfigForCli: DataSourceOptions = {
  ...baseConfig,
  entities: ['src/entity/*.entity{.js,.ts}'],
  migrations: ['migrations/*{.js,.ts}'], // migration:run的文件
  subscribers: ['subscribers/*{.js,.ts}'],
  logger: 'file',
  logging: true,
};

const dataSource = new DataSource(ormConfigForCli);
export default dataSource;
