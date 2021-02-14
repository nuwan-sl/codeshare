package com.elearning.onlineassignment.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class ConfigurationAdapter extends WebMvcConfigurerAdapter
{

    @Autowired
    Environment environment;

    @Override
    public void addInterceptors( InterceptorRegistry registry )
    {
      /*  registry.addInterceptor( new SecurityInterceptor( environment ) )
                .excludePathPatterns(
                        Constant.AUTH_CONTROLLER + "/**",
                        Constant.ERROR_EP,
                        Constant.FORBIDDEN_EP,
                        Constant.OOPS_EP,
                        Constant.NO_GROUPS_EP
                );*/
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        super.addResourceHandlers(registry);
        registry.addResourceHandler("/index.html")
                .addResourceLocations("classpath:static/index.html")
                .setCachePeriod(0);
    }
}