package com.stozen.backend.service;

import com.stozen.backend.entity.Product;
import com.stozen.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(String id) {
        return productRepository.findById(id);
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(String id, Product updatedProduct) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setName(updatedProduct.getName());
                    product.setCategory(updatedProduct.getCategory());
                    product.setBarcode(updatedProduct.getBarcode());
                    product.setPurchasePrice(updatedProduct.getPurchasePrice());
                    product.setSellingPrice(updatedProduct.getSellingPrice());
                    product.setStock(updatedProduct.getStock());
                    product.setMinStock(updatedProduct.getMinStock());
                    product.setUnit(updatedProduct.getUnit());
                    product.setSupplier(updatedProduct.getSupplier());

                    return productRepository.save(product);
                })
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public void deleteProduct(String id) {
        if (!productRepository.existsById(id)) {
            throw new RuntimeException("Product not found");
        }

        productRepository.deleteById(id);
    }
}
